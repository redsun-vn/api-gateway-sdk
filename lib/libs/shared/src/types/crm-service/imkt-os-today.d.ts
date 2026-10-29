import { tags } from 'typia';
import { IMktOs } from './imkt-os';
import { IMktOsAudience } from './imkt-os-audience';
import { IMktOsRun } from './imkt-os-run';
type CalendarDay = string & tags.Pattern<'^\\d{4}-\\d{2}-\\d{2}$'>;
export declare namespace IMktOsToday {
    type SuggestionKind = 'signal' | 'fallback_silence' | 'lifecycle' | 'birthday' | 'visit_due';
    type SuggestionStatus = 'new' | 'accepted' | 'dismissed';
    interface ISuggestion {
        id: number;
        kind: SuggestionKind;
        basis_label: string;
        target: IMktOsAudience.Target;
        audience_id: number;
        audience_name: string;
        title: string;
        recipient_count: number;
        status: SuggestionStatus;
        run_id: number | null;
        suggestion_date: string;
        expires_at: string;
    }
    interface ISuggestionListQuery {
        limit?: number & tags.Type<'uint32'> & tags.Minimum<1>;
    }
    interface ISuggestionList {
        generated_at: string | null;
        items: ISuggestion[];
    }
    interface ISuggestionRefreshed {
        ok: true;
        queued: boolean;
    }
    interface ISuggestionAccepted {
        ok: true;
        item: ISuggestion;
        run: IMktOsRun.IRunDetail;
    }
    interface ISuggestionDismissRequest {
        undo?: boolean;
    }
    interface ISuggestionDismissed {
        ok: true;
        item: ISuggestion;
    }
    type CalendarView = 'week' | 'month';
    interface ICalendarQuery {
        from?: CalendarDay;
        to?: CalendarDay;
        view?: CalendarView;
    }
    interface ICalendarBlock {
        campaign_id: number;
        run_id: number;
        name: string;
        status: string;
        pending_approval: boolean;
        channel: string;
        sent: number;
        planned: number;
    }
    interface ICalendarDay {
        date: string;
        sent: number;
        planned: number;
        blocks: ICalendarBlock[];
    }
    interface ICalendarOverlap {
        week_start: string;
        week_end: string;
        journeys: Array<{
            campaign_id: number;
            run_id: number;
            name: string;
        }>;
        people: number;
    }
    interface ICalendar {
        view: CalendarView;
        from: string;
        to: string;
        days: ICalendarDay[];
        overlaps: ICalendarOverlap[];
    }
    interface ITodoBudgetExhausted {
        kind: 'budget_exhausted';
        month: string;
        spent: number;
        budget: number;
        resumes_on: string;
        link: string;
    }
    interface ITodoAutoPaused {
        kind: 'auto_paused';
        campaign_id: number;
        run_id: number;
        name: string;
        reason: string | null;
        budget_scope?: IMktOsRun.BudgetScope | null;
        resumes_on?: string | null;
    }
    interface ITodoDraft {
        kind: 'draft';
        run_id: number;
        name: string;
        ui_stage: string;
        updated_at: string;
    }
    type Todo = ITodoBudgetExhausted | ITodoAutoPaused | ITodoDraft;
    interface IWaitingItem {
        campaign_id: number;
        run_id: number;
        name: string;
        approver_id: number | null;
        approver_name: string | null;
        submitted_at: string | null;
        reminded_at: string | null;
        can_remind: boolean;
    }
    interface IReplyItem {
        participant_id: number;
        campaign_id: number;
        run_id: number;
        journey_name: string;
        person_type: string;
        name: string | null;
        replied_at: string;
        task_id: number | null;
        task_done: boolean;
        assignee_id: number | null;
        assignee_name: string | null;
    }
    interface IDaily {
        date: string;
        package: {
            status: 'active' | 'trial' | 'expired' | 'none' | null;
            ends_at: string | null;
            trial_days_left: number | null;
        };
        budget: {
            monthly_budget: number | null;
            monthly_spent: number;
            spent_month: string;
            exhausted: boolean;
        };
        needs_you: {
            count: number;
            items: Todo[];
        };
        waiting_on_others: {
            items: IWaitingItem[];
        };
        market: {
            status: IMktOs.MarketDigestStatus | 'unavailable';
            enabled: boolean;
            digest_date: string | null;
            updated_at: string | null;
            items: IMktOs.IMarketDigestItem[];
        };
        replies: {
            available: boolean;
            reason: 'no_crm_package' | null;
            items: IReplyItem[];
        };
        suggestions: ISuggestionList;
        week: {
            from: string;
            to: string;
            days: ICalendarDay[];
        };
        week_results: {
            from: string;
            to: string;
            running_journeys: number;
            returned_customers: number;
            revenue: number;
            cost: number;
        };
    }
}
export {};

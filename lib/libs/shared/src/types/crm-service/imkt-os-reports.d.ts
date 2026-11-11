import { tags } from 'typia';
import { IMktOsResults } from './imkt-os-results';
type DateOnly = string & tags.Pattern<'^\\d{4}-\\d{2}-\\d{2}$'>;
export declare namespace IMktOsReports {
    type Tab = 'mine' | 'staff' | 'company';
    type StaffTarget = 'lead' | 'opportunity' | 'customer';
    interface IPeriodQuery {
        from?: DateOnly;
        to?: DateOnly;
    }
    interface IStaffReportQuery extends IPeriodQuery {
        target?: StaffTarget;
    }
    interface IAccess {
        tabs: Tab[];
        all_staff: boolean;
    }
    interface IPeriod {
        from: string;
        to: string;
    }
    interface IMedian {
        median_minutes: number | null;
        count: number;
        median_hidden: boolean;
    }
    interface IMineReport {
        period: IPeriod;
        tasks: {
            total: number;
            completed: number;
            on_time: number;
            overdue: number;
        };
        replies: IMedian & {
            replied: number;
            unanswered: number;
        };
        results: {
            reached: number;
            opportunities: number;
            stage_changed: number;
            won: number;
            won_value: number;
            orders: number;
            order_value: number;
            opportunity_rate: number | null;
            counts_only: boolean;
        };
        approvals: (IMedian & {
            decided: number;
            declined: number;
        }) | null;
    }
    interface IStaffRow {
        staff_id: number | null;
        staff_name: string | null;
        reached: number;
        opportunities: number;
        won: number;
        won_value: number;
        opportunity_rate: number | null;
        won_rate: number | null;
        counts_only: boolean;
        tasks_total: number;
        tasks_on_time: number;
        on_time_rate: number | null;
        reply: IMedian;
        approval: IMedian;
    }
    interface IStaffReport {
        period: IPeriod;
        target: string | null;
        rows: IStaffRow[];
        median: {
            opportunity_rate: number | null;
            won_rate: number | null;
            on_time_rate: number | null;
            reply_minutes: number | null;
            approval_minutes: number | null;
        };
    }
    interface IJourneyRow {
        campaign_id: number;
        name: string | null;
        target: string | null;
        status: string | null;
        approved_at: string | null;
        reached: number;
        click_rate: number | null;
        reply_rate: number | null;
        unsubscribe_rate: number | null;
        conversions: number;
        conversion_rate: number | null;
        order_revenue: number;
        won_value: number;
        revenue_per_recipient: number | null;
        message_cost: number;
        ai_credits: number;
        ai_cost: number | null;
        cost_per_result: number | null;
        revenue_per_cost: number | null;
        lift: IMktOsResults.ILift | null;
        advice: IMktOsResults.IAdvice[];
        counts_only: boolean;
    }
    interface ICompanyReport {
        period: IPeriod;
        totals: {
            enrolled: number;
            reached: number;
            replied: number;
            unsubscribed: number;
            conversions: {
                lead: number;
                opportunity: number;
                customer: number;
            };
            order_revenue: number;
            won_value: number;
            message_cost: number;
            ai_credits: number;
            credit_price_vnd: number | null;
            ai_cost: number | null;
            revenue_per_cost: number | null;
            revenue_minus_cost: number;
        };
        funnel: Array<{
            step: 'enrolled' | 'reached' | 'replied' | 'converted';
            count: number;
        }>;
        journeys: IJourneyRow[];
        average: IJourneyRow;
        trend: Array<{
            month: string;
            order_revenue: number;
            won_value: number;
            message_cost: number;
            ai_cost: number | null;
        }>;
        lift: IMktOsResults.ILift | null;
    }
}
export {};

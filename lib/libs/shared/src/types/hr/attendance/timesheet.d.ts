import { tags } from 'typia';
export declare namespace IAttendanceTimesheet {
    interface IExportQuery {
        from: string & tags.Format<'date-time'>;
        to: string & tags.Format<'date-time'>;
        branch_id?: string;
        department_id?: string;
        user_ids?: string[];
    }
    interface ITally {
        work_time: number;
        work_holiday: number;
        paid_full: number;
        paid_partial: number;
        social_insurance: number;
        unpaid: number;
    }
    interface ITimesheetRow {
        staff_id: number | string;
        user_id: string;
        code: string;
        full_name: string;
        position: string | null;
        department_name: string | null;
        symbols: string[];
        tally: ITally;
    }
    interface IPeriod {
        from: string;
        to: string;
        days: number;
    }
    interface IExportResponse {
        period: IPeriod;
        symbols_in_use: string[];
        rows: ITimesheetRow[];
        truncated?: boolean;
        violations?: IViolationRow[];
    }
    interface IViolationRow {
        staff_id: number | string;
        full_name: string;
        date: string;
        shift_name: string;
        check_in: string;
        check_out: string;
        late_minutes: number;
        early_minutes: number;
        worked_minutes: number;
        shift_minutes: number;
    }
}

export declare namespace ILeaveAccrual {
    interface ISweepBody {
        cursor?: string;
        limit?: number;
    }
    interface ISweepResult {
        shop_id: number;
        period_year: number;
        processed: number;
        granted: number;
        expired: number;
        next_cursor: number | null;
        skipped: Record<string, number>;
    }
}

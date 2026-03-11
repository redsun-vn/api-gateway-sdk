export declare namespace ITableHistory {
    interface ITimelineFilter {
        table_id?: number;
        shop_id?: number;
        startDate?: string;
        endDate?: string;
        page?: number;
        limit?: number;
    }
    interface ITimelineItem {
        type?: 'note' | 'reservation';
        timestamp: string;
        data: Record<string, unknown>;
    }
    interface ITableHistoryItem {
        id: number | string;
        partner_id: number | string;
        partner_name?: string;
        partner_phone?: string;
        partner_cmnd?: string;
        start_date: string;
        end_date: string;
        status: string;
        note?: string;
        created_at: string;
    }
    interface ITableStats {
        total_reservations: number | string;
        total_notes: number | string;
        open_notes: number | string;
        resolved_notes: number | string;
        notes_by_category: Array<{
            category: string;
            count: number;
        }>;
    }
    interface ITableStatsEnhanced extends ITableStats {
        occupancy_rate?: number | string;
        avg_resolve_time_hours?: number | string;
        total_guests?: number | string;
    }
    interface ITableRanking {
        table_id: number | string;
        table_name?: string;
        total_reservations: number | string;
        total_notes: number | string;
        open_notes: number | string;
        occupancy_rate?: number | string;
    }
    interface IPeriodComparison {
        period_1: ITableStatsEnhanced;
        period_2: ITableStatsEnhanced;
        delta: {
            total_reservations: number | string;
            total_notes: number | string;
            open_notes: number | string;
            occupancy_rate?: number | string;
        };
    }
    interface IStatsFilter {
        table_id?: number;
        shop_id?: number;
        startDate?: string;
        endDate?: string;
    }
    interface IComparisonFilter {
        table_id: number;
        shop_id?: number;
        period1Start: string;
        period1End: string;
        period2Start: string;
        period2End: string;
    }
    interface IRankingFilter {
        shop_id?: number;
        startDate?: string;
        endDate?: string;
        limit?: number;
        sortBy?: 'occupancy' | 'reservations' | 'notes' | 'open_notes';
    }
    interface IOccupancyBatchFilter {
        shop_id: number;
        table_ids?: number[];
        startDate: string;
        endDate: string;
    }
    interface IOccupancyResult {
        table_id: number | string;
        occupied_nights: number;
        total_nights: number;
        occupancy_rate: number | string;
        total_reservations: number | string;
        total_guests: number | string;
    }
    interface ITimelineResponse {
        items: ITableHistoryItem[];
        meta: {
            page: number;
            limit: number;
            total: number;
        };
    }
}

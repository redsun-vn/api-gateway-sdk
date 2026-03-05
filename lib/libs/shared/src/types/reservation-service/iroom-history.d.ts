export declare namespace IRoomHistory {
    interface ITimelineFilter {
        room_id?: number;
        shop_id?: number;
        startDate?: string;
        endDate?: string;
        page?: number;
        limit?: number;
    }
    interface ITimelineItem {
        type: 'note' | 'reservation';
        timestamp: string;
        data: any;
    }
    interface IRoomHistoryItem {
        id: number;
        partner_id: number;
        partner_name?: string;
        partner_phone?: string;
        partner_cmnd?: string;
        start_date: string;
        end_date: string;
        status: string;
        note?: string;
        created_at: string;
    }
    interface IRoomStats {
        total_reservations: number;
        total_notes: number;
        open_notes: number;
        resolved_notes: number;
        notes_by_category: Array<{
            category: string;
            count: number;
        }>;
    }
    interface IRoomStatsEnhanced extends IRoomStats {
        occupancy_rate?: number;
        avg_resolve_time_hours?: number;
        total_guests?: number;
    }
    interface IRoomRanking {
        room_id: number;
        room_name?: string;
        total_reservations: number;
        total_notes: number;
        open_notes: number;
        occupancy_rate?: number;
    }
    interface IPeriodComparison {
        period_1: IRoomStatsEnhanced;
        period_2: IRoomStatsEnhanced;
        delta: {
            total_reservations: number;
            total_notes: number;
            open_notes: number;
            occupancy_rate?: number;
        };
    }
    interface IStatsFilter {
        room_id?: number;
        shop_id?: number;
        startDate?: string;
        endDate?: string;
    }
    interface IComparisonFilter {
        room_id: number;
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
        room_ids?: number[];
        startDate: string;
        endDate: string;
    }
    interface IOccupancyResult {
        room_id: number;
        occupied_nights: number;
        total_nights: number;
        occupancy_rate: number;
        total_reservations: number;
        total_guests: number;
    }
    interface ITimelineResponse {
        items: ITimelineItem[];
        meta: {
            page: number;
            limit: number;
            total: number;
        };
    }
}

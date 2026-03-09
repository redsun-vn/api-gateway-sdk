import { tags } from 'typia';
export declare namespace IDashboard {
    interface IDashboardQuery {
        start_date: string & tags.Format<'date'>;
        end_date: string & tags.Format<'date'>;
    }
    interface IDashboardOverview {
        occupancy_rate: number;
        total_reservations: number;
        avg_stay_hours: number;
        open_notes: number;
        auto_transitions: number;
        manual_transitions: number;
    }
    interface IDashboardTrendPoint {
        date: string;
        occupancy_rate: number;
        reservation_count: number;
    }
    interface IDashboardAlert {
        type: 'overdue_checkout' | 'stale_note' | 'low_occupancy';
        table_id: number;
        message: string;
        severity: 'warning' | 'error';
    }
}

import { TableRealtimeStatus } from '../../enum/table-realtime-status.enum';
export declare namespace ITableStatus {
    interface IQueryDate {
        start_date: string;
        end_date: string;
    }
    interface IQueryBranch {
        branch_id?: string;
    }
    interface IBatchFilter {
        shop_id: number;
        branch_id?: number;
    }
    interface ISingleFilter {
        table_id: number;
        shop_id: number;
    }
    interface IAvailabilityFilter {
        table_id: number;
        shop_id: number;
        start_date: string;
        end_date: string;
    }
    interface IAvailabilityResult {
        available: boolean;
        conflicting_reservation_id?: number | string;
    }
    interface ITableStatusItem {
        table_id: number | string;
        status: TableRealtimeStatus;
        active_reservation_id?: number | string;
        active_note_ids?: number[];
    }
}

import { TableRealtimeStatus } from '../../enum/table-realtime-status.enum';
import { tags } from 'typia';
export declare namespace ITableStatus {
    interface IQueryDate {
        start_date: string & tags.Format<'date'>;
        end_date: string & tags.Format<'date'>;
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
        conflicting_reservation_id?: number;
    }
    interface ITableStatusItem {
        table_id: number;
        status: TableRealtimeStatus;
        active_reservation_id?: number;
        active_note_ids?: number[];
    }
}

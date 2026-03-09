import { RoomRealtimeStatus } from '../../enum/room-realtime-status.enum';
import { tags } from 'typia';
export declare namespace IRoomStatus {
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
        room_id: number;
        shop_id: number;
    }
    interface IAvailabilityFilter {
        room_id: number;
        shop_id: number;
        start_date: string;
        end_date: string;
    }
    interface IAvailabilityResult {
        available: boolean;
        conflicting_reservation_id?: number;
    }
    interface IRoomStatusItem {
        room_id: number;
        status: RoomRealtimeStatus;
        active_reservation_id?: number;
        active_note_ids?: number[];
    }
}

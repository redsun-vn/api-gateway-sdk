import { tags } from 'typia';
import { IProductReservation } from './iproduct-reservation';
import { IRoom } from './iroom';
import { ITable } from './itable';
import { BaseResponse } from '../common.type';
export declare namespace IReservation {
    enum ReservationStatus {
        PENDING = "pending",
        ASSIGNED = "assigned",
        RECEIVED = "received",
        PAST = "past",
        CANCELED = "canceled",
        COMPLETED = "completed"
    }
    interface ICreate {
        branch_id: number;
        partner_id: number;
        staff_id: number;
        prefix_code?: string & tags.MinLength<2> & tags.MaxLength<2>;
        adult?: number;
        child?: number;
        startDate: string;
        endDate: string;
        confirmed?: boolean;
        note?: string;
        status?: ReservationStatus;
        tags?: string;
        tableIds?: string[];
        roomIds?: string[];
        personInChargeId?: number;
    }
    interface IUpdate extends Partial<ICreate> {
    }
    interface IReservationResponse extends BaseResponse {
        shop_id: number | string;
        branch_id: number | string;
        partner_id: number | string;
        staff_id: number | string;
        adult?: number | null;
        child?: number | null;
        startDate: string;
        endDate: string;
        confirmed: boolean;
        note?: string | null;
        status: ReservationStatus;
        reservationCode: string;
        tags?: string | null;
        productReservations?: null | IProductReservation.IProductReservationResponse[];
        tables?: null | ITable.ITableResponse[];
        rooms?: null | IRoom.IRoomResponse[];
        personInChargeId?: number | string | null;
    }
    interface IReservationOverlap {
        message: string;
        data: IReservationResponse[];
        code: number;
    }
}

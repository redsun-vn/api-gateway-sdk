import { tags } from 'typia';
import { IProductReservation } from './iproduct-reservation';
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
        personInChargeId?: number | string | null;
    }
    interface IBookingConfigQuery {
        shop_id: number;
        branch_id: number;
    }
    interface IBookingAvailabilityQuery extends IBookingConfigQuery {
        startDate: string;
        endDate: string;
    }
    interface IGuestReservationCreate {
        shop_id: number;
        branch_id: number;
        table_ids: string[];
        startDate: string;
        endDate: string;
        adult: number;
        child?: number;
        guest_name: string;
        guest_phone: string;
        guest_email?: string;
        note?: string;
    }
    interface IBookingConfigTable {
        id: number | string;
        name: string;
        maxAdult: number | null;
        maxChild: number | null;
        description: string | null;
        product_id: number | null;
    }
    interface IBookingConfigResponse {
        tables: IBookingConfigTable[];
    }
    interface IBookingAvailabilityResponse {
        available_tables: IBookingConfigTable[];
    }
    interface IGuestReservationResponse {
        reservation_code: string;
        status: ReservationStatus;
        message: string;
    }
    interface IReservationOverlap {
        message: string;
        data: IReservationResponse[];
        code: number;
    }
}

import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IOrder } from './iorder.type';
export declare namespace ITableReservation {
    interface ICreateTableReservation {
        shop_id?: number & tags.Type<'uint64'>;
        order_id?: number & tags.Type<'uint64'>;
        uuid: string & tags.Format<'uuid'>;
        reservation_id?: number & tags.Type<'uint64'>;
        table_id: number & tags.Type<'uint64'>;
        name?: string | null;
        peopleCount?: number | null;
        effectiveAt?: (string & tags.Format<'date-time'>) | null;
    }
    interface ICreateTableReservationKafka extends ICreateTableReservation {
        shop_id: number & tags.Type<'uint64'>;
    }
    interface IUpdateTableReservation {
        id?: string;
        reservation_id?: number & tags.Type<'uint64'>;
        table_id?: number & tags.Type<'uint64'>;
        name?: string;
        peopleCount?: number;
        effectiveAt?: (string & tags.Format<'date-time'>) | null;
    }
    interface IDetailTableReservationResponse extends BaseResponse {
        shop_id: number | string | null;
        order_id?: number | string | null;
        table_id: number | string | null;
        reservation_id?: number | string | null;
        name?: string | null;
        peopleCount?: number | null;
        effectiveAt?: string | null;
        order?: IOrder.IDetailOrderResponse | null;
    }
}

import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export declare namespace ITableReservation {
    interface ICreateTableReservation {
        order_id: number & tags.Type<'uint32'>;
        table_id: number & tags.Type<'uint32'>;
        name: string;
        peopleCount: number;
        effectiveAt: Date;
        userId?: string;
    }
    interface ICreateTableReservationKafka extends ICreateTableReservation {
        shop_id: number & tags.Type<'uint32'>;
    }
    interface IUpdateTableReservation {
        table_id: number & tags.Type<'uint32'>;
        name?: string;
        peopleCount?: number;
        effectiveAt?: Date;
        userId?: string;
    }
    interface IDetailTableReservationResponse extends BaseResponse {
        shop_id: number | string | null;
        order_id: number | string | null;
        table_id: number | string | null;
        name: string;
        peopleCount: number;
        effectiveAt: Date;
    }
}

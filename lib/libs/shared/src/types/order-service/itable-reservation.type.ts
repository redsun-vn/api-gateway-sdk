/* eslint-disable @typescript-eslint/no-namespace */

import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IOrder } from './iorder.type';

export namespace ITableReservation {
	export interface ICreateTableReservation {
		shop_id?: number & tags.Type<'uint64'>;
		order_id?: number & tags.Type<'uint64'>;
		uuid: string & tags.Format<'uuid'>;
		reservation_id?: number & tags.Type<'uint64'>;
		table_id: number & tags.Type<'uint64'>;
		name?: string | null;
		peopleCount?: number | null;
		effectiveAt?: (string & tags.Format<'date-time'>) | null;
	}

	export interface ICreateTableReservationKafka
		extends ICreateTableReservation {
		shop_id: number & tags.Type<'uint64'>;
	}

	export interface IUpdateTableReservation {
		id?: string;
		reservation_id?: number & tags.Type<'uint64'>;
		table_id?: number & tags.Type<'uint64'>;
		name?: string;
		peopleCount?: number;
		effectiveAt?: (string & tags.Format<'date-time'>) | null;
	}

	export interface IDetailTableReservationResponse extends BaseResponse {
		shop_id: number | string | null;
		order_id?: number | string | null;
		table_id: number | string | null;
		reservation_id?: number | string | null;
		uuid?: string | null;
		name?: string | null;
		peopleCount?: number | null;
		effectiveAt?: string | null;
		order?: IOrder.IDetailOrderResponse | null;
	}
}

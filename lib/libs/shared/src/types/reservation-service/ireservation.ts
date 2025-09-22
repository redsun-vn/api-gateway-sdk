/* eslint-disable @typescript-eslint/no-namespace */

import { tags } from 'typia';
import { IProductReservation } from './iproduct-reservation';
import { IRoom } from './iroom';
import { ITable } from './itable';
import { BaseResponse } from '../common.type';
export namespace IReservation {
	export enum ReservationStatus {
		PENDING = 'pending',
		ASSIGNED = 'assigned',
		RECEIVED = 'received',
		PAST = 'past',
		CANCELED = 'canceled',
		COMPLETED = 'completed',
	}
	export interface ICreate {
		branch_id: number;
		partner_id: number;
		staff_id: number;
		prefix_code?: string & tags.MinLength<2> & tags.MaxLength<2>; // generate code from prefix (2 digit)
		adult?: number;
		child?: number;
		startDate: string;
		endDate: string;
		confirmed?: boolean;
		note?: string;
		status?: ReservationStatus;
		tags?: string;
		tableIds?: string[]; // ["id"]
		roomIds?: string[]; // ["id"]
	}
	export interface IUpdate extends Partial<ICreate> {}
	export interface IReservationResponse extends BaseResponse {
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
		productReservations?:
			| null
			| IProductReservation.IProductReservationResponse[];
		tables?: null | ITable.ITableResponse[];
		rooms?: null | IRoom.IRoomResponse[];
	}

	export interface IReservationOverlap {
		message: string;
		data: IReservationResponse[];
		code: number;
	}
}

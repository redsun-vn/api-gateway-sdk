/* eslint-disable @typescript-eslint/no-namespace */

import { tags } from 'typia';
import { BaseResponse, ITimeSlot } from '../common.type';
import { IAdditionalFee } from './iadditional-fee.type';
import { ILineItem } from './iline-item.type';
import { RecurrencePeriod, SubscriptionStatus } from '../../enum';

export namespace ISubscriptionOrder {
	export interface ICreate {
		branch_id?: number & tags.Type<'uint64'>;
		created_by: number & tags.Type<'uint64'>;
		responsible_by?: number & tags.Type<'uint64'>;
		price_book_id?: number & tags.Type<'uint64'>;
		partner_uuid: string & tags.Format<'uuid'>;
		email?: string;
		phone?: string;
		description?: string;
		duration: number;
		period: RecurrencePeriod | string;
		isActive: boolean;
		features?: Record<string, any>;
		maxUsers?: number;
		trialEndsAt?: (string & tags.Format<'date-time'>) | null;
		status: SubscriptionStatus | string;
		currentPeriodStart?: (string & tags.Format<'date-time'>) | null;
		currentPeriodEnd?: (string & tags.Format<'date-time'>) | null;
		financialStatus?: string;
		paymentMethodId?: number & tags.Type<'uint64'>;
		discountCode?: string | null;
		discountOrder?: number;
		lineItems?: ILineItem.IInputLineItem[];
		tableId?: number & tags.Type<'uint64'>;
		roomId?: number & tags.Type<'uint64'>;
		timeSlots?: ITimeSlot[];
		autoRenew?: boolean;
	}

	export interface IUpdateReq
		extends Omit<Partial<ICreate>, 'shop_id' | 'partner_uuid' | 'created_by'> {
		updated_by: number & tags.Type<'uint64'>;
	}

	export interface IUpdate extends IUpdateReq {
		id: number & tags.Type<'uint64'>;
	}

	export interface ICancelReq {
		cancelReason: string;
	}

	export interface ICancel extends ICancelReq {
		id: (number & tags.Type<'uint64'>) | (string & tags.Format<'uuid'>);
		updated_by: number & tags.Type<'uint64'>;
	}

	export interface IResponse extends BaseResponse {
		shop_id: number | string;
		branch_id: number | string | null;
		created_by: number | string | null;
		updated_by: number | string | null;
		price_book_id: number | string | null;
		partner_uuid: string;
		email: string | null;
		phone: string | null;
		code: string | null;
		uuid: string;
		description: string | null;
		period: string;
		duration: number | string;
		autoRenew: boolean;
		isActive: boolean;
		features: Record<string, any> | null;
		maxUsers: number | string | null;
		trialEndsAt: string | null;
		status: string;
		currentPeriodStart: string | null;
		currentPeriodEnd: string | null;
		cancelledAt: string | null;
		order_id: number | string | null;
		dateOrder: string | null;
		financialStatus: string;
		cancelReason: string | null;
		paymentMethodId: number | string | null;
		total: number | string;
		totalPrice: number | string;
		originTotal: number | string;
		subTotal: number | string;
		taxTotal: number | string;
		discountCode: string | null;
		discountOrder: number | string;
		discountTotal: number | string;
		lineItems: ILineItem.IDetailLineItemResponse[] | null;
		additionalFees?: IAdditionalFee.IDetailAdditionalFeeResponse[] | null;
		tableId: number | string | null;
		roomId: number | string | null;
		timeSlots: ITimeSlot[] | null;
	}
}

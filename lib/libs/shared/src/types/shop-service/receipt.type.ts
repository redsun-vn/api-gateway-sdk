/* eslint-disable @typescript-eslint/no-namespace */

import { tags } from 'typia';
import {
	RECEIPT_LINE_ITEM_TYPE_ENUM,
	RECEIPT_PAYMENT_METHOD_ENUM,
	RECEIPT_PAYMENT_STATUS_ENUM,
	RECEIPT_PRIORITY_ENUM,
	RECEIPT_PROCESSING_STATUS_ENUM,
	RECEIPT_STATUS_ENUM,
	RECEIPT_TYPE_ENUM,
} from '../../enum/shop-service';
import { BaseResponse } from '../common.type';

export namespace IReceipt {
	export interface IUpdate {
		status?: string & RECEIPT_STATUS_ENUM;
		priority?: string & RECEIPT_PRIORITY_ENUM;
		receiptType?: string & RECEIPT_TYPE_ENUM;
		paymentStatus?: string & RECEIPT_PAYMENT_STATUS_ENUM;
		paymentMethod?: string & RECEIPT_PAYMENT_METHOD_ENUM;
		processingStatus?: string & RECEIPT_PROCESSING_STATUS_ENUM;

		crm_quote_id?: string | number; // báo giá

		email?: string & tags.Format<'email'>;
		phone?: string;
		address?: string;

		note?: string;
		allowPrint?: boolean;
		taxTotal?: number;
		taxPercentageTotal?: number;
		taxTotalManual?: number;
		taxPercentageTotalManual?: number;

		approvedBy?: string | number;
		rejectedBy?: string | number;
		approvedAt?: string;
		rejectedAt?: string;
		paidAt?: string;
		expiredAt?: string;
		dueDate?: string;
		rejectionReason?: string;
		updatedBy?: string | number;
		paymentCode?: string;
		voucherCode?: string;
	}

	export interface IShopUpdate {
		email?: string & tags.Format<'email'>;
		phone?: string;
		address?: string;
		note?: string;
		paymentCode?: string;
	}

	export interface ICreate {
		crm_quote_id?: string | number; // báo giá

		priority?: string & RECEIPT_PRIORITY_ENUM;
		receiptType?: string & RECEIPT_TYPE_ENUM;

		note?: string;
		paymentCode?: string;
		allowPrint?: boolean;
		taxTotal?: number;
		taxPercentageTotal?: number;
		taxTotalManual?: number;
		taxPercentageTotalManual?: number;

		email?: string & tags.Format<'email'>;
		phone?: string;
		address?: string;

		lineItems: IReceiptLineItems[];
		voucherCode?: string;
		refCode?: string; // mã giới thiệu
	}

	export interface IAdminCreate extends ICreate {
		shop_id: string;
		package_id?: number;
		subscription_id?: number;
	}

	export interface IResponse extends BaseResponse {
		shop_id: string | number;
		package_id: string | number | null;

		priority?: (string & RECEIPT_PRIORITY_ENUM) | null;
		receiptType?: (string & RECEIPT_TYPE_ENUM) | null;
		paymentStatus?: (string & RECEIPT_PAYMENT_STATUS_ENUM) | null;
		paymentMethod?: (string & RECEIPT_PAYMENT_METHOD_ENUM) | null;
		processingStatus?: (string & RECEIPT_PROCESSING_STATUS_ENUM) | null;

		crm_quote_id?: number | string | null; // báo giá
		subscription_id: string | number | null;

		code: string;
		status: string;
		source: string;
		sourceType: string;
		paymentCode?: string | null;
		refCode?: string | null; // mã giới thiệu

		email?: string | null;
		phone?: string | null;
		address?: string | null;
		note?: string | null;
		allowPrint: boolean;

		paidAmount?: number | string | null; // số tiền đã thanh toán
		outstandingAmount?: number | string | null; // số tiền còn lại
		refundedAmount?: number | string | null; // số tiền đã hoàn
		total: number | string;
		taxTotal: number | string | null;
		taxPercentageTotal: number | string | null;
		taxTotalManual: number | string | null;
		taxPercentageTotalManual: number | string | null;
		updatedBy: number | string | null;
		deletedBy: number | string | null;

		approvedBy?: string | number | null;
		rejectedBy?: string | number | null;
		approvedAt?: string | null;
		rejectedAt?: string | null;
		paidAt?: string | null;
		expiredAt?: string | null;
		dueDate?: string | null;
		completedAt: string | null;

		rejectionReason?: string | null;
		lineItems?: IReceiptLineItems[] | null;

		voucherCode?: string | null;
		originalTotal?: number | string | null;
		totalDiscount?: number | string | null;
	}

	export interface IReceiptLineItems {
		item_id?: string | number;
		type: RECEIPT_LINE_ITEM_TYPE_ENUM | string;
		name?: string;
		price: number;
		discount: number;
		total: number;
		quantity?: number;
		value?: number;
		unit?: string | null;
	}

	/**
	 * Create Receipt, then create Subscription
	 */
	export interface ICreatSubsFromReceipt {
		note?: string;
		email?: string & tags.Format<'email'>;
		phone?: string;
		address?: string;
		voucherCode?: string;
		package_id: string; // cần có khi tạo subscription
		packageAdditionIds?: number[]; // cần có khi tạo subscription
		refCode?: string; // mã giới thiệu
	}

	/**
	 * Create Receipt, then create Subscription
	 */
	export interface ICreatSubsFromReceiptAdminReq extends ICreatSubsFromReceipt {
		shop_id: string;
		createdById?: string; // cần có khi tạo receipt từ admin.sipos.vn
	}

	export interface ICreatSubsFromReceiptAdmin
		extends ICreatSubsFromReceiptAdminReq {
		createdById: string; // cần có khi tạo receipt từ admin.sipos.vn
	}
}

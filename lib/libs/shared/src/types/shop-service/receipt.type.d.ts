import { tags } from 'typia';
import { RECEIPT_LINE_ITEM_TYPE_ENUM, RECEIPT_PAYMENT_METHOD_ENUM, RECEIPT_PAYMENT_STATUS_ENUM, RECEIPT_PRIORITY_ENUM, RECEIPT_PROCESSING_STATUS_ENUM, RECEIPT_STATUS_ENUM, RECEIPT_TYPE_ENUM } from '../../enum/shop-service';
import { BaseResponse } from '../common.type';
export declare namespace IReceipt {
    interface IUpdate {
        status?: string & RECEIPT_STATUS_ENUM;
        priority?: string & RECEIPT_PRIORITY_ENUM;
        receiptType?: string & RECEIPT_TYPE_ENUM;
        paymentStatus?: string & RECEIPT_PAYMENT_STATUS_ENUM;
        paymentMethod?: string & RECEIPT_PAYMENT_METHOD_ENUM;
        processingStatus?: string & RECEIPT_PROCESSING_STATUS_ENUM;
        crm_quote_id?: string | number;
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
    interface IShopUpdate {
        email?: string & tags.Format<'email'>;
        phone?: string;
        address?: string;
        note?: string;
        paymentCode?: string;
    }
    interface ICreate {
        crm_quote_id?: string | number;
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
        refCode?: string;
    }
    interface IAdminCreate extends ICreate {
        shop_id: string;
        package_id?: number;
        subscription_id?: number;
    }
    interface IResponse extends BaseResponse {
        shop_id: string | number;
        package_id: string | number | null;
        priority?: (string & RECEIPT_PRIORITY_ENUM) | null;
        receiptType?: (string & RECEIPT_TYPE_ENUM) | null;
        paymentStatus?: (string & RECEIPT_PAYMENT_STATUS_ENUM) | null;
        paymentMethod?: (string & RECEIPT_PAYMENT_METHOD_ENUM) | null;
        processingStatus?: (string & RECEIPT_PROCESSING_STATUS_ENUM) | null;
        crm_quote_id?: number | null;
        subscription_id: string | number | null;
        code: string;
        status: string;
        source: string;
        sourceType: string;
        paymentCode?: string | null;
        refCode?: string | null;
        email?: string | null;
        phone?: string | null;
        address?: string | null;
        note?: string | null;
        allowPrint: boolean;
        paidAmount?: number | string;
        outstandingAmount?: number | string;
        refundedAmount?: number | string;
        total: number;
        taxTotal: number;
        taxPercentageTotal: number;
        taxTotalManual: number;
        taxPercentageTotalManual: number;
        updatedBy: number | string;
        deletedBy: number | string;
        approvedBy?: string | number | null;
        rejectedBy?: string | number | null;
        approvedAt?: string | null;
        rejectedAt?: string | null;
        paidAt?: string | null;
        expiredAt?: string | null;
        dueDate?: string | null;
        completedAt: string;
        rejectionReason?: string | null;
        lineItems?: IReceiptLineItems[] | null;
        voucherCode?: string | null;
        originalTotal?: number | string | null;
        totalDiscount?: number | string | null;
    }
    interface IReceiptLineItems {
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
    interface ICreatSubsFromReceipt {
        note?: string;
        email?: string & tags.Format<'email'>;
        phone?: string;
        address?: string;
        voucherCode?: string;
        package_id: string;
        packageAdditionIds?: number[];
        refCode?: string;
    }
    interface ICreatSubsFromReceiptAdminReq extends ICreatSubsFromReceipt {
        shop_id: string;
        createdById?: string;
    }
    interface ICreatSubsFromReceiptAdmin extends ICreatSubsFromReceiptAdminReq {
        createdById: string;
    }
}

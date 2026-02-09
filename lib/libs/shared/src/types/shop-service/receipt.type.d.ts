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
        refCode?: string | null;
    }
    interface IShopCreateV2 {
        shopId: number;
        packageId?: number;
        packageAdditionIds?: number[];
        appPlanIds?: number[];
        billingCycle?: string;
        quantity?: number;
        paymentMethod?: string;
        voucherCode?: string;
        note?: string;
        email?: string;
        phone?: string;
        address?: string;
        receiptType?: string;
        refCode?: string | null;
        createdById?: number;
        lineItems?: Array<Partial<IReceipt.IReceiptLineItems>>;
    }
    interface IActivateReceipt {
        paymentCode?: string;
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
        crm_quote_id?: number | string | null;
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
        paidAmount?: number | string | null;
        outstandingAmount?: number | string | null;
        refundedAmount?: number | string | null;
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
        metadata?: {
            payment_gateway?: string;
            transaction_id?: string;
            payment_reference?: string;
            refund_reference?: string;
            processor_response?: any;
            retry_count?: number;
            last_retry_at?: string;
            refund_request?: {
                reason?: string;
                reasonDetail?: string;
                requestedAmount?: number;
                refundType?: 'full' | 'partial';
                requestedBy?: string | number;
                requestedAt?: string;
                status?: string;
                lineItemIds?: (string | number)[];
                approvedAmount?: number;
                approvedBy?: string | number;
                approvedAt?: string;
                rejectedBy?: string | number;
                rejectedAt?: string;
                rejectionReason?: string;
                processedBy?: string | number;
                processedAt?: string;
                completedBy?: string | number;
                completedAt?: string;
                transactionId?: string;
                paymentGateway?: string;
                finalRefundedAmount?: number;
                deactivateSubscription?: boolean;
                note?: string;
            };
            [key: string]: any;
        } | null;
    }
    interface IReceiptLineItems {
        item_id?: string | number;
        type: RECEIPT_LINE_ITEM_TYPE_ENUM | string;
        name?: string;
        price: number | string;
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
        paymentMethod?: string;
    }
    interface ICreatSubsFromReceiptAdminReq extends ICreatSubsFromReceipt {
        shop_id: string;
        createdById?: string;
    }
    interface ICreatSubsFromReceiptAdmin extends ICreatSubsFromReceiptAdminReq {
        createdById: string;
    }
    interface IStatsFilter {
        startDate?: string;
        endDate?: string;
    }
    interface IStats {
        totalReceipts: number;
        totalPaidAmount: number;
        totalPendingAmount: number;
        totalOverdueAmount: number;
        overdueCount: number;
    }
    enum REFUND_REASON_ENUM {
        CUSTOMER_REQUEST = "customer_request",
        SERVICE_ISSUE = "service_issue",
        DUPLICATE_PAYMENT = "duplicate_payment",
        WRONG_PURCHASE = "wrong_purchase",
        FEATURE_NOT_WORKING = "feature_not_working",
        OTHER = "other"
    }
    enum REFUND_STATUS_ENUM {
        PENDING = "pending",
        APPROVED = "approved",
        REJECTED = "rejected",
        PROCESSING = "processing",
        COMPLETED = "completed",
        FAILED = "failed"
    }
    interface IRefundRequest {
        receipt_id: string | number;
        shop_id: string | number;
        reason: REFUND_REASON_ENUM;
        reasonDetail?: string;
        refundAmount?: number;
        refundType?: 'full' | 'partial';
        requestedBy?: string | number;
        lineItemIds?: (string | number)[];
    }
    interface IRefundApprove {
        receipt_id: string | number;
        approvedAmount: number;
        approvedBy: string | number;
        note?: string;
        deactivateSubscription?: boolean;
    }
    interface IRefundReject {
        receipt_id: string | number;
        rejectedBy: string | number;
        rejectionReason: string;
    }
    interface IRefundProcess {
        receipt_id: string | number;
        processedBy: string | number;
        transactionId?: string;
        paymentGateway?: string;
        note?: string;
    }
    interface IRefundComplete {
        receipt_id: string | number;
        completedBy: string | number;
        refundedAmount: number;
        transactionId?: string;
        note?: string;
    }
    interface IRefundResponse {
        id: string | number;
        receipt_id: string | number;
        shop_id: string | number;
        originalReceipt: IResponse;
        refundStatus: REFUND_STATUS_ENUM;
        reason?: REFUND_REASON_ENUM | string;
        reasonDetail?: string;
        requestedAmount?: number;
        approvedAmount?: number;
        refundedAmount: number;
        refundType?: 'full' | 'partial';
        requestedBy?: string | number;
        approvedBy?: string | number;
        rejectedBy?: string | number;
        processedBy?: string | number;
        completedBy?: string | number;
        requestedAt?: string;
        approvedAt?: string;
        rejectedAt?: string;
        processedAt?: string;
        completedAt?: string;
        rejectionReason?: string;
        transactionId?: string;
        paymentGateway?: string;
        note?: string;
        subscriptionDeactivated: boolean;
    }
    interface IRefundStatsFilter {
        startDate?: string;
        endDate?: string;
        status?: REFUND_STATUS_ENUM;
    }
    interface IRefundStats {
        totalRefundRequests: number;
        totalRefundedAmount: number;
        totalPendingRefunds: number;
        totalApprovedRefunds: number;
        totalRejectedRefunds: number;
        totalCompletedRefunds: number;
        averageRefundAmount: number;
        refundsByReason: Record<string, number>;
        refundsByStatus: Record<string, number>;
    }
    interface IRecalculateReportRequest {
        startDate: string;
        endDate: string;
        includeRefunds?: boolean;
        recalculateSubscriptions?: boolean;
    }
    interface IRecalculateReportResponse {
        originalTotal: number;
        adjustedTotal: number;
        totalRefunds: number;
        totalReceipts: number;
        totalActiveSubscriptions: number;
        totalDeactivatedSubscriptions: number;
        calculatedAt: string;
    }
    interface ReceiptSimpleResponse {
        id: number | string;
        code: string;
        shopId: number | string;
        packageId: number | string | null;
        status: string;
        total: number;
        originalTotal: number;
        totalDiscount: number;
        lineItems: IReceipt.IReceiptLineItems[];
        paymentMethod: string;
        note?: string | null;
        email?: string | null;
        phone?: string | null;
        address?: string | null;
        receiptType?: string;
        createdAt: string;
    }
    interface ActivateReceiptSimpleResult {
        receipt: ReceiptSimpleResponse;
        subscription: {
            id: number | string;
            shopId: number | string;
            packageId: number | string | null;
            name?: string | null;
            startDate: string | null;
            endDate: string | null;
            active: boolean;
            price: number;
            isRenewal: boolean;
            day?: number;
            month?: number;
            trialEndsAt?: string | null;
            extendStaff?: number;
            extendBranch?: number;
            refCode?: string | null;
            source?: string;
            paymentCode?: string | null;
            packagePlans?: Array<{
                id: number | string;
                name: string | null;
                type: string;
                target?: string;
                value?: number;
                price?: number;
                startDate?: string | null;
                endDate?: string | null;
            }>;
        } | null;
    }
    interface RefundReceiptV2Result {
        success: boolean;
        receipt: ReceiptSimpleResponse;
        refundStatus: IReceipt.REFUND_STATUS_ENUM;
        refundedAmount: number;
        subscriptionReverted: boolean;
        appPlansRemoved: number[];
        digitalPurchaseReverted: boolean;
        previousSubscriptionId?: number;
        message?: string;
    }
}

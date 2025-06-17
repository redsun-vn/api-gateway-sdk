import { tags } from 'typia';
import { RECEIPT_LINE_ITEM_TYPE_ENUM, RECEIPT_STATUS_ENUM } from '../../enum/shop-service';
import { BaseResponse } from '../common.type';
export declare namespace IReceipt {
    interface IUpdate {
        status?: string & RECEIPT_STATUS_ENUM;
        email?: string & tags.Format<'email'>;
        phone?: string;
        address?: string;
        note?: string;
        allowPrint?: boolean;
        taxTotal?: number;
        taxPercentageTotal?: number;
        taxTotalManual?: number;
        taxPercentageTotalManual?: number;
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
    }
    interface IAdminCreate extends ICreate {
        shop_id: string;
        package_id?: number;
        subscription_id?: number;
    }
    interface IResponse extends BaseResponse {
        shop_id: string;
        package_id: string | number | null;
        subscription_id: string | number | null;
        code: string;
        status: string;
        source: string;
        sourceType: string;
        paymentCode?: string | null;
        email?: string | null;
        phone?: string | null;
        address?: string | null;
        note?: string | null;
        allowPrint: boolean;
        total: number;
        taxTotal: number;
        taxPercentageTotal: number;
        taxTotalManual: number;
        taxPercentageTotalManual: number;
        updatedBy: number | string | null;
        deletedBy: number | string | null;
        completedAt: string | null;
        lineItems?: IReceiptLineItems[] | null;
        voucherCode?: string | null;
        originalTotal?: number | string | null;
        totalDiscount?: number | string | null;
    }
    interface IReceiptLineItems {
        item_id?: string | number;
        type: RECEIPT_LINE_ITEM_TYPE_ENUM;
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
    }
    interface ICreatSubsFromReceiptAdminReq extends ICreatSubsFromReceipt {
        shop_id: string;
    }
    interface ICreatSubsFromReceiptAdmin extends ICreatSubsFromReceiptAdminReq {
        createdById: string;
    }
}

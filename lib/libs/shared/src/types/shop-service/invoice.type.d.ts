import { tags } from 'typia';
import { INVOICE_STATUS_ENUM, INVOICE_TYPE_ENUM } from '../../enum';
import { BaseResponse } from '../common.type';
export declare namespace IShopInvoice {
    interface ICreate {
        shop_id: string;
        receiptId: number;
        type: string & INVOICE_TYPE_ENUM;
        taxCode?: string;
        companyName?: string;
        companyAddress?: string;
        email?: string & tags.Format<'email'>;
        phone?: string;
        invoiceDate?: string;
        dueDate?: string;
        paymentTerms?: string;
        notes?: string;
        autoCalculate?: boolean;
    }
    interface IUpdate {
        status?: string & INVOICE_STATUS_ENUM;
        invoiceNumber?: string;
        taxCode?: string;
        companyName?: string;
        companyAddress?: string;
        email?: string & tags.Format<'email'>;
        phone?: string;
        invoiceDate?: string;
        dueDate?: string;
        paymentTerms?: string;
        notes?: string;
        approvedBy?: number;
    }
    interface IInvoiceLineItem {
        receiptLineItemId?: number;
        packageId?: number | string;
        packageName?: string;
        description: string | null;
        quantity: number | string;
        unitPrice: number | string;
        discount: number | string;
        taxRate: number | string;
        taxAmount: number | string;
        totalAmount: number | string;
    }
    interface IResponse extends BaseResponse {
        shop_id: string;
        receiptId: number | null;
        code: string;
        status: string & INVOICE_STATUS_ENUM;
        type: string & INVOICE_TYPE_ENUM;
        invoiceNumber?: string | null;
        taxCode?: string | null;
        companyName?: string | null;
        companyAddress?: string | null;
        email?: string | null;
        phone?: string | null;
        subTotal: number | string;
        taxAmount: number | string;
        taxRate: number | string;
        discountAmount: number | string;
        totalAmount: number | string;
        invoiceDate?: string;
        dueDate?: string;
        paymentTerms?: string;
        notes?: string;
        createdBy?: number | string;
        approvedBy?: number | string;
        approvedAt?: string | null;
        sentAt?: string | null;
        paidAt?: string | null;
        lineItems?: IInvoiceLineItem[];
        receipt?: any;
    }
    interface sendMail {
        email: string;
        message: string;
    }
}

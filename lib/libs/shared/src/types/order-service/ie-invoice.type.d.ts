import { E_INVOICE_PROVIDER_ENUM } from '../../enum';
export declare namespace IEInvoice {
    interface IEInvoiceConfigRequest {
        shopId: number | string;
        username: string;
        password: string;
        provider: E_INVOICE_PROVIDER_ENUM;
        timeout?: number;
        autoPublishEnabled?: boolean;
        isActive?: boolean;
        appId?: string;
        companyTaxCode?: string;
        invSeries?: string;
        invoiceName?: string;
        defaultCurrency?: string;
        defaultExchangeRate?: number | string;
    }
    interface IEInvoiceConfigResponse {
        id: number | string;
        target: string;
        targetId: string;
        username: string;
        password: string;
        provider: E_INVOICE_PROVIDER_ENUM;
        timeout?: number;
        autoPublishEnabled?: boolean;
        isActive?: boolean;
        appId?: string;
        companyTaxCode?: string;
        invSeries?: string;
        invoiceName?: string;
        defaultCurrency?: string;
        defaultExchangeRate?: number | string;
        companyCode?: string;
    }
    interface IPublishRequest {
        templateId?: string;
        taxCode?: string;
        address?: string;
        sendEmail?: boolean;
        sendFile?: boolean;
        receiverEmail?: string;
        receiverName?: string;
    }
    interface ICancelRequest {
        reason?: string;
    }
    interface IInvoicePrintParams {
        isDev?: boolean;
    }
}

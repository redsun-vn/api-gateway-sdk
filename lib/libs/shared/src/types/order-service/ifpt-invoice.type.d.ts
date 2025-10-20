import { E_INVOICE_PROVIDER_ENUM } from '../../enum';
export declare namespace IFptInvoice {
    interface IFptShopConfig {
        target: string;
        targetId: number | string;
        username: string;
        password: string;
        timeout?: number;
        autoPublishEnabled?: boolean;
        isActive?: boolean;
        provider?: E_INVOICE_PROVIDER_ENUM;
        companyTaxCode: string;
    }
    interface IFptShopConfigInput {
        username: string;
        password: string;
        companyTaxCode: string;
        defaultCurrency?: string;
        defaultExchangeRate?: number | string;
        timeout?: number;
        autoPublishEnabled?: boolean;
        isActive?: boolean;
    }
    interface IEInvoiceConfigResponse {
        target: string;
        targetId: number | string;
        username: string;
        password: string;
        provider: E_INVOICE_PROVIDER_ENUM;
        timeout?: number;
        autoPublishEnabled?: boolean;
        isActive?: boolean;
        defaultCurrency?: string;
        defaultExchangeRate?: number | string;
        companyTaxCode?: string;
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

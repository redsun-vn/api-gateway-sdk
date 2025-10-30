import { E_INVOICE_PROVIDER_ENUM } from '../../enum';
export declare namespace IEInvoice {
    interface IEInvoiceConfigRequest {
        username?: string;
        password?: string;
        provider: E_INVOICE_PROVIDER_ENUM;
        isCreated?: boolean;
        timeout?: number;
        autoPublishEnabled?: boolean;
        isActive?: boolean;
        [key: string]: any;
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
        templateId?: string;
        clientId?: string;
        clientSecret?: string;
        invoiceSymbolMTT?: string;
        invoiceSymbolGTGT?: string;
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
    interface IEInvoiceTemplateResponse {
        qlmtke_id: string;
        qlkhsdung_id: string;
        lhdon: number | null;
        hthuc: string | null;
        khdon: string | null;
        khhdon: string;
        sdmau: number;
        code: string;
        nglap: string;
        nlap: string;
        loaikh: number;
        tenbl: string | null;
        loaibl: string | null;
        solienbl: string | null;
        sottbl: string | null;
        htbl: string | null;
        khmbl: string | null;
        tinh_code: string | null;
        mtttien: string | null;
        permission_id: string;
        qlkhsdung_id1: string;
        wb_user_id: string;
        value: string;
        id: string;
    }
    interface IEInvoiceTestConnectionInput {
        provider: E_INVOICE_PROVIDER_ENUM;
        username: string;
        password: string;
        isEncryptUsername: boolean;
        isEncryptPassword: boolean;
        [key: string]: any;
    }
    interface IEInvoicePrintParams {
        isDev?: boolean;
    }
}

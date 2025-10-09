export declare namespace IMobiInvoice {
    interface IAuthRequest {
        username: string;
        password: string;
    }
    interface IAuthResponse {
        isWeakPass: boolean;
        token: string;
        refresh_token: string;
        ma_dvcs: string;
        wb_user_id: string;
        noti_sso: string;
        notes_sso: string;
        notify: string;
        is_link_sso: boolean;
    }
    interface IMobiShopConfig {
        shopId: number;
        username: string;
        password: string;
        companyCode: string;
        companyTaxCode: string;
        invSeries: string;
        invoiceName: string;
        defaultCurrency: string;
        defaultExchangeRate: number | string;
        timeout: number;
        autoPublishEnabled: boolean;
        isActive: boolean;
    }
    interface IMobiShopConfigInput {
        username: string;
        password: string;
        companyCode: string;
        companyTaxCode: string;
        invSeries: string;
        invoiceName: string;
        defaultCurrency?: string;
        defaultExchangeRate?: number;
        timeout?: number;
        autoPublishEnabled?: boolean;
        isActive?: boolean;
    }
    interface IPublishRequest {
        templateId: string;
        taxCode: string;
        address?: string;
        sendEmail?: boolean;
        receiverEmail?: string;
        receiverName?: string;
    }
    interface IPublishResponse {
        success: boolean;
        errors?: string[];
        data?: any;
    }
    interface ICancelRequest {
        reason?: string;
    }
    interface IInvoicePrintParams {
        isDev?: boolean;
    }
    interface IInvoiceTemplate {
        qlmtke_id: string;
        qlkhsdung_id: string;
        lhdon: number;
        hthuc: string;
        khdon: string;
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
        mtttien: string;
        permission_id: string;
        qlkhsdung_id1: string;
        wb_user_id: string;
        value: string;
        id: string;
    }
    interface IGetInvoiceTemplatesResponse {
        success: boolean;
        data?: IInvoiceTemplate[];
        message?: string;
    }
}

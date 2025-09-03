export declare enum MISA_STATUS_ENUM {
    PENDING = "pending",
    PUBLISHED = "published",
    FAILED = "failed",
    CANCELLED = "cancelled"
}
export declare namespace IMisaInvoice {
    interface IAuthRequest {
        username: string;
        password: string;
        companyTaxCode: string;
    }
    interface IAuthResponse {
        access_token: string;
        token_type: string;
        expires_in: number;
        refresh_token?: string;
    }
    interface IPublishRequest {
        IsSendEmail: boolean;
        ReceiverName?: string;
        ReceiverEmail?: string;
    }
    interface ICancelRequest {
        reason?: string;
    }
    interface IOriginalInvoiceData {
        RefID: string;
        InvSeries: string;
        InvoiceName: string;
        InvDate: string;
        CurrencyCode: string;
        ExchangeRate: number;
        PaymentMethodName: string;
        BuyerLegalName?: string;
        BuyerTaxCode?: string;
        BuyerAddress?: string;
        BuyerEmail?: string;
        BuyerPhoneNumber?: string;
        ContactName?: string;
        TotalAmountWithoutVATOC: number;
        TotalVATAmountOC: number;
        TotalAmount: number;
        TotalAmountWithoutVAT: number;
        TotalVATAmount: number;
        TotalSaleAmountOC: number;
        TotalSaleAmount: number;
        TotalAmountOC: number;
        TotalAmountInWords: string;
        OriginalInvoiceDetail: IOriginalInvoiceDetail[];
        TaxRateInfo: ITaxRateInfo[];
        FeeInfo?: IFeeInfo[];
        OptionUserDefined: IOptionUserDefined;
        IsInvoiceCalculatingMachine: boolean;
        ReferenceType?: number;
        OrgInvoiceType?: number;
        OrgInvTemplateNo?: string;
        OrgInvSeries?: string;
        OrgInvNo?: string;
        OrgInvDate?: string;
        InvoiceNote?: string;
    }
    interface IOriginalInvoiceDetail {
        ItemType: number;
        LineNumber: number;
        ItemCode?: string;
        ItemName: string;
        UnitName?: string;
        Quantity: number;
        UnitPrice: number;
        AmountOC: number;
        Amount: number;
        AmountWithoutVATOC: number;
        AmountWithoutVAT: number;
        VATRateName: string;
        AmountAfterTax: number;
        VATAmountOC: number;
        VATAmount: number;
        SortOrder: number;
        DiscountRate?: number;
        DiscountAmountOC?: number;
        DiscountAmount?: number;
    }
    interface ITaxRateInfo {
        VATRateName: string;
        AmountWithoutVATOC: number;
        VATAmountOC: number;
    }
    interface IFeeInfo {
        FeeName: string;
        FeeAmountOC: number;
    }
    interface IOptionUserDefined {
        MainCurrency: string;
        AmountDecimalDigits: string;
        AmountOCDecimalDigits: string;
        UnitPriceOCDecimalDigits: string;
        UnitPriceDecimalDigits: string;
        QuantityDecimalDigits: string;
        CoefficientDecimalDigits: string;
        ExchangRateDecimalDigits?: string;
        ClockDecimalDigits?: string;
    }
    interface IPublishResponse {
        Success: boolean;
        ErrorCode?: string;
        Errors: string[];
        Data: string;
        CustomData?: any;
    }
    interface IInvoiceResult {
        RefID: string;
        TransactionID: string;
        InvTemplateNo: string;
        InvSeries: string;
        InvNo: string;
        InvCode: string;
        InvDate: string;
        ErrorCode: string;
        CustomData?: any;
    }
    interface IStatusRequest {
        RefID: string;
    }
    interface IStatusResponse {
        Success: boolean;
        ErrorCode?: string;
        Errors: string[];
        Data: IInvoiceStatusData;
    }
    interface IInvoiceStatusData {
        RefID: string;
        TransactionID: string;
        InvTemplateNo: string;
        InvSeries: string;
        InvNo: string;
        InvCode: string;
        InvDate: string;
        Status: string;
        PublishDate?: string;
        ErrorMessage?: string;
    }
    interface IMisaShopConfig {
        shopId: number | string;
        username: string;
        password: string;
        companyTaxCode: string;
        invSeries: string;
        invoiceName: string;
        defaultCurrency: string;
        defaultExchangeRate: number | string;
        timeout: number | string;
        autoPublishEnabled: boolean;
        isActive: boolean;
    }
    interface IMisaShopConfigInput {
        username: string;
        password: string;
        companyTaxCode: string;
        invSeries: string;
        invoiceName: string;
        defaultCurrency?: string;
        defaultExchangeRate?: number;
        timeout?: number;
        autoPublishEnabled?: boolean;
        isActive?: boolean;
    }
    interface IShopAuthToken {
        shopId: number | string;
        accessToken: string;
        tokenType: string;
        expiresAt: Date | string;
        refreshToken?: string;
    }
    interface IOrderToInvoiceMap {
        orderId: string;
        refId: string;
        invoiceData: IOriginalInvoiceData;
        publishRequest: IPublishRequest;
        publishResponse?: IPublishResponse;
        invoiceResult?: IInvoiceResult;
        status: MISA_STATUS_ENUM;
        errorMessage?: string;
        createdAt: Date | string;
        updatedAt: Date | string;
    }
}

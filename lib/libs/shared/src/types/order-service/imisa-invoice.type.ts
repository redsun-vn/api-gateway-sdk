/* eslint-disable @typescript-eslint/no-namespace */

export enum MISA_STATUS_ENUM {
	PENDING = 'pending',
	PUBLISHED = 'published',
	FAILED = 'failed',
	CANCELLED = 'cancelled',
}

export namespace IMisaInvoice {
	// Authentication
	export interface IAuthRequest {
		username: string;
		password: string;
		companyTaxCode: string;
	}

	export interface IAuthResponse {
		access_token: string;
		token_type: string;
		expires_in: number;
		refresh_token?: string;
	}

	// Invoice Publishing Request
	export interface IPublishRequest {
		IsSendEmail: boolean;
		ReceiverName?: string;
		ReceiverEmail?: string;
	}

	export interface ICancelRequest {
		reason?: string;
	}

	// Original Invoice Data
	export interface IOriginalInvoiceData {
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
		// Additional fields for replacement/adjustment invoices
		ReferenceType?: number; // 1: replacement; 2: adjustment
		OrgInvoiceType?: number;
		OrgInvTemplateNo?: string;
		OrgInvSeries?: string;
		OrgInvNo?: string;
		OrgInvDate?: string;
		InvoiceNote?: string;
	}

	// Invoice Detail
	export interface IOriginalInvoiceDetail {
		ItemType: number; // 1: HHDV; 2: promotion; 3: discount; 4: note
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

	// Tax Rate Info
	export interface ITaxRateInfo {
		VATRateName: string;
		AmountWithoutVATOC: number;
		VATAmountOC: number;
	}

	// Fee Info
	export interface IFeeInfo {
		FeeName: string;
		FeeAmountOC: number;
	}

	// Option User Defined
	export interface IOptionUserDefined {
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

	// Publish Response
	export interface IPublishResponse {
		Success: boolean;
		ErrorCode?: string;
		Errors: string[];
		Data: string; // JSON string containing IInvoiceResult[]
		CustomData?: any;
	}

	// Invoice Result
	export interface IInvoiceResult {
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

	// Invoice Status Query
	export interface IStatusRequest {
		RefID: string;
	}

	export interface IStatusResponse {
		Success: boolean;
		ErrorCode?: string;
		Errors: string[];
		Data: IInvoiceStatusData;
	}

	export interface IInvoiceStatusData {
		RefID: string;
		TransactionID: string;
		InvTemplateNo: string;
		InvSeries: string;
		InvNo: string;
		InvCode: string;
		InvDate: string;
		Status: string; // Published, Draft, Cancelled, etc.
		PublishDate?: string;
		ErrorMessage?: string;
	}

	// Shop-specific configuration
	export interface IMisaShopConfig {
		shopId: number | string;
		appId: string;
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

	// Shop configuration input for creation/update
	export interface IMisaShopConfigInput {
		username: string;
		password: string;
		appId: string | null;
		companyTaxCode: string;
		invSeries: string;
		invoiceName: string;
		defaultCurrency?: string;
		defaultExchangeRate?: number;
		timeout?: number;
		autoPublishEnabled?: boolean;
		isActive?: boolean;
	}

	// Shop authentication token management
	export interface IShopAuthToken {
		shopId: number | string;
		accessToken: string;
		tokenType: string;
		expiresAt: Date | string;
		refreshToken?: string;
	}

	// Mapping Configuration
	export interface IOrderToInvoiceMap {
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

	export interface IInvoicePrintParams {
		isDev?: boolean;
	}
}

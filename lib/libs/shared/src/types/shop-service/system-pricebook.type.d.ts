import { BaseResponse } from '../common.type';
import { BILLING_CYCLE_ENUM, PRICEBOOK_ENTRY_STATUS_ENUM, PRICEBOOK_PRODUCT_TYPE_ENUM, PRICEBOOK_SCOPE_ENUM, PRICEBOOK_STATUS_ENUM, PRICEBOOK_TYPE_ENUM, PRICING_MODEL_ENUM, TIER_TYPE_ENUM } from '../../enum';
export declare namespace ISystemPricebook {
    interface ICreate {
        name: string;
        code: string;
        description?: string;
        status?: string & PRICEBOOK_STATUS_ENUM;
        type?: string & PRICEBOOK_TYPE_ENUM;
        scope?: string & PRICEBOOK_SCOPE_ENUM;
        currencyCode?: string;
        isDefault?: boolean;
        priority?: number;
        validFrom?: string;
        validTo?: string;
        usageLimit?: number;
        minOrderValue?: number;
        applicableShopIds?: number[];
        applicableRegions?: string[];
        applicableCustomerGroups?: string[];
        conditions?: IPricebookConditions;
        metadata?: Record<string, unknown>;
        createdBy?: number;
        entries?: IEntryCreate[];
    }
    interface IUpdate {
        name?: string;
        description?: string;
        status?: string & PRICEBOOK_STATUS_ENUM;
        type?: string & PRICEBOOK_TYPE_ENUM;
        scope?: string & PRICEBOOK_SCOPE_ENUM;
        currencyCode?: string;
        isDefault?: boolean;
        priority?: number;
        validFrom?: string;
        validTo?: string;
        usageLimit?: number;
        minOrderValue?: number;
        applicableShopIds?: number[];
        applicableRegions?: string[];
        applicableCustomerGroups?: string[];
        conditions?: IPricebookConditions;
        metadata?: Record<string, unknown>;
        updatedBy?: number;
    }
    interface IPricebookConditions {
        min_subscription_months?: number;
        required_packages?: string[];
        excluded_packages?: string[];
        required_applications?: string[];
        excluded_applications?: string[];
        customer_types?: string[];
        [key: string]: unknown;
    }
    interface IResponse extends BaseResponse {
        name: string;
        code: string;
        description?: string | null;
        status: string;
        type: string;
        scope: string;
        currencyCode: string;
        isDefault: boolean;
        priority: number;
        validFrom?: string | null;
        validTo?: string | null;
        usageLimit?: number | null;
        usageCount: number | null;
        minOrderValue?: number | null;
        applicableShopIds?: number[] | null;
        applicableRegions?: string[] | null;
        applicableCustomerGroups?: string[] | null;
        conditions?: IPricebookConditions | null;
        metadata?: Record<string, unknown> | null;
        createdBy?: number | string | null;
        updatedBy?: number | string | null;
        entries?: IEntryResponse[] | null;
    }
    interface IEntryCreate {
        pricebookId?: number;
        productType: string & PRICEBOOK_PRODUCT_TYPE_ENUM;
        productId?: number;
        externalProductCode?: string;
        serviceSource?: string;
        sku?: string;
        productName?: string;
        priceDescription?: string;
        status?: string & PRICEBOOK_ENTRY_STATUS_ENUM;
        pricingModel?: string & PRICING_MODEL_ENUM;
        billingCycle?: string & BILLING_CYCLE_ENUM;
        billingCycleDays?: number;
        listPrice: number;
        unitPrice?: number;
        minPrice?: number;
        maxPrice?: number;
        setupFee?: number;
        discountPercentage?: number;
        discountAmount?: number;
        hasTrial?: boolean;
        trialDays?: number;
        validFrom?: string;
        validTo?: string;
        minQuantity?: number;
        maxQuantity?: number;
        unit?: string;
        unitQuantity?: number;
        requiresQuote?: boolean;
        isPriceVisible?: boolean;
        isPromotional?: boolean;
        sortOrder?: number;
        taxRate?: number;
        taxInclusive?: boolean;
        conditions?: IEntryConditions;
        metadata?: IEntryMetadata;
        tiers?: ITierCreate[];
    }
    interface IEntryUpdate {
        productType?: string & PRICEBOOK_PRODUCT_TYPE_ENUM;
        productId?: number;
        externalProductCode?: string;
        serviceSource?: string;
        sku?: string;
        productName?: string;
        priceDescription?: string;
        status?: string & PRICEBOOK_ENTRY_STATUS_ENUM;
        pricingModel?: string & PRICING_MODEL_ENUM;
        billingCycle?: string & BILLING_CYCLE_ENUM;
        billingCycleDays?: number;
        listPrice?: number;
        unitPrice?: number;
        minPrice?: number;
        maxPrice?: number;
        setupFee?: number;
        discountPercentage?: number;
        discountAmount?: number;
        hasTrial?: boolean;
        trialDays?: number;
        validFrom?: string;
        validTo?: string;
        minQuantity?: number;
        maxQuantity?: number;
        unit?: string;
        unitQuantity?: number;
        requiresQuote?: boolean;
        isPriceVisible?: boolean;
        isPromotional?: boolean;
        sortOrder?: number;
        taxRate?: number;
        taxInclusive?: boolean;
        conditions?: IEntryConditions;
        metadata?: IEntryMetadata;
    }
    interface IEntryConditions {
        required_products?: string[];
        excluded_products?: string[];
        bundle_with?: string[];
        [key: string]: unknown;
    }
    interface IEntryMetadata {
        external_api_endpoint?: string;
        sync_status?: string;
        last_synced_at?: string;
        features_included?: string[];
        limitations?: Record<string, unknown>;
        [key: string]: unknown;
    }
    interface IEntryResponse extends BaseResponse {
        pricebookId: number | string;
        productType: string;
        productId?: number | string;
        externalProductCode?: string | null;
        serviceSource: string | null;
        sku?: string | null;
        productName?: string;
        priceDescription?: string | null;
        status: string;
        pricingModel: string;
        billingCycle: string;
        billingCycleDays?: number | string | null;
        listPrice: number | string;
        unitPrice: number | string;
        minPrice?: number | string | null;
        maxPrice?: number | string | null;
        setupFee: number | string;
        discountPercentage: number | string;
        discountAmount: number | string;
        hasTrial: boolean;
        trialDays: number | string;
        validFrom?: string | null;
        validTo?: string | null;
        minQuantity: number | string;
        maxQuantity?: number | string | null;
        unit?: string | null;
        unitQuantity: number | string;
        requiresQuote: boolean;
        isPriceVisible: boolean;
        isPromotional: boolean;
        sortOrder: number | string;
        taxRate: number | string;
        taxInclusive: boolean;
        conditions?: IEntryConditions | null;
        metadata?: IEntryMetadata | null;
        tiers?: ITierResponse[];
        finalPrice?: number | string;
        effectiveDiscount?: number | string;
    }
    interface ITierCreate {
        entryId?: number;
        tierType?: string & TIER_TYPE_ENUM;
        tierName?: string;
        fromQuantity: number;
        toQuantity?: number;
        unitPrice: number;
        flatPrice?: number;
        discountPercentage?: number;
        sortOrder?: number;
        description?: string;
        isVisible?: boolean;
        metadata?: Record<string, unknown>;
    }
    interface ITierUpdate {
        tierType?: string & TIER_TYPE_ENUM;
        tierName?: string;
        fromQuantity?: number;
        toQuantity?: number;
        unitPrice?: number;
        flatPrice?: number;
        discountPercentage?: number;
        sortOrder?: number;
        description?: string;
        isVisible?: boolean;
        metadata?: Record<string, unknown>;
    }
    interface ITierResponse extends BaseResponse {
        entryId: number | string;
        tierType: string;
        tierName?: string;
        fromQuantity: number | string;
        toQuantity?: number | string | null;
        unitPrice: number | string;
        flatPrice?: number | string;
        discountPercentage: number | string;
        sortOrder: number | string;
        description?: string;
        isVisible: boolean;
        metadata?: Record<string, unknown>;
    }
    interface IProductPriceRequest {
        productType: string;
        productId?: number;
        externalProductCode?: string;
        options?: {
            shopId?: number;
            quantity?: number;
            billingCycle?: string;
            customerGroup?: string;
        };
    }
    interface IPriceCalculationRequest {
        shopId?: number;
        productType: string & PRICEBOOK_PRODUCT_TYPE_ENUM;
        productId?: number;
        externalProductCode?: string;
        quantity?: number;
        billingCycle?: string & BILLING_CYCLE_ENUM;
        promotionCode?: string;
        customerGroup?: string;
        region?: string;
    }
    interface IPriceCalculationResponse {
        entry: IEntryResponse;
        pricebook: IResponse;
        quantity: number;
        listPrice: number;
        unitPrice: number;
        subtotal: number;
        discount: number;
        discountPercentage: number;
        setupFee: number;
        taxAmount: number;
        taxRate: number;
        total: number;
        currencyCode: string;
        billingCycle: string;
        appliedTier?: ITierResponse;
        promotionApplied?: {
            code: string;
            discount: number;
            type: string;
        };
        hasTrial: boolean;
        trialDays: number;
        breakdown: IPriceBreakdownItem[];
    }
    interface IPriceBreakdownItem {
        description: string;
        amount: number;
        type: 'subtotal' | 'discount' | 'tax' | 'setup_fee' | 'promotion' | 'total';
    }
    interface IFilter {
        status?: string | string[];
        type?: string | string[];
        scope?: string;
        isDefault?: boolean;
        validAt?: string;
        shopId?: number;
        region?: string;
        customerGroup?: string;
        search?: string;
        page?: number;
        limit?: number;
        sortBy?: string;
        sortOrder?: 'ASC' | 'DESC';
    }
    interface IEntryFilter {
        pricebookId?: number;
        productType?: string | string[];
        productId?: number;
        status?: string | string[];
        pricingModel?: string;
        billingCycle?: string;
        isPromotional?: boolean;
        search?: string;
        page?: number;
        limit?: number;
    }
    interface IBulkEntryCreate {
        pricebookId: number;
        entries: IEntryCreate[];
    }
    interface IBulkEntryUpdate {
        updates: Array<{
            id: number;
            data: IEntryUpdate;
        }>;
    }
    interface IBulkOperationResult {
        success: number;
        failed: number;
        errors: Array<{
            index: number;
            error: string;
        }>;
    }
    interface IApplicablePricebookRequest {
        shopId?: number;
        productType: string;
        productId?: number;
        externalProductCode?: string;
        customerGroup?: string;
        region?: string;
        orderValue?: number;
        currentDate?: string;
    }
    interface IApplicablePricebookResponse {
        pricebook: IResponse;
        entry: IEntryResponse;
        reason: string;
    }
}

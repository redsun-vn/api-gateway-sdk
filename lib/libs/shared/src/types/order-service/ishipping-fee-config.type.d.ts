import { FEE_CALCULATION_TYPE, MARKUP_TYPE } from '../../enum';
import { BaseResponse } from '../common.type';
export declare namespace IShippingFeeConfig {
    interface ICreate {
        provider_code?: string;
        configName: string;
        description?: string;
        active?: boolean;
        priority?: number;
        countryCode?: string;
        applyAllProvinces?: boolean;
        provinceCodes?: string[];
        districtCodes?: string[];
        wardCodes?: string[];
        feeCalculationType: string & FEE_CALCULATION_TYPE;
        minOrderValue?: number;
        maxOrderValue?: number;
        baseFee?: number;
        useProviderFee?: boolean;
        feeMarkupType?: string & MARKUP_TYPE;
        feeMarkupValue?: number;
        minWeight?: number;
        maxWeight?: number;
        minDimensions?: {
            length: number;
            width: number;
            height: number;
        };
        maxDimensions?: {
            length: number;
            width: number;
            height: number;
        };
        freeShippingEnabled?: boolean;
        freeShippingMinValue?: number;
        applyFromDate?: Date;
        applyToDate?: Date;
        applyWeekdays?: number[];
        applyHours?: {
            from: string;
            to: string;
        };
        customerGroups?: string[];
        excludeCustomerGroups?: string[];
        productCategories?: string[];
        excludeProductCategories?: string[];
        productTags?: string[];
        customFormula?: string;
        additionalConfig?: Record<string, any>;
        codEnabled?: boolean;
        codFeeType?: string & MARKUP_TYPE;
        codFeeValue?: number;
        maxCodValue?: number;
        createdBy?: number;
    }
    interface IResponse extends BaseResponse {
        provider_code: string | null;
        configName: string | null;
        description: string | null;
        active: boolean | null;
        priority: number | null;
        countryCode: string | null;
        applyAllProvinces: boolean | null;
        provinceCodes: string[] | null;
        districtCodes: string[] | null;
        wardCodes: string[] | null;
        feeCalculationType: string | null;
        minOrderValue: number | string | null;
        maxOrderValue: number | string | null;
        baseFee: number | string | null;
        useProviderFee: boolean | null;
        feeMarkupType?: string | null;
        feeMarkupValue: number | string | null;
        minWeight: number | string | null;
        maxWeight: number | string | null;
        minDimensions: {
            length: number;
            width: number;
            height: number;
        } | null;
        maxDimensions: {
            length: number;
            width: number;
            height: number;
        } | null;
        freeShippingEnabled: boolean | null;
        freeShippingMinValue: number | string | null;
        applyFromDate: Date | null;
        applyToDate: Date | null;
        applyWeekdays: number[] | null;
        applyHours: {
            from: string;
            to: string;
        } | null;
        customerGroups: string[] | null;
        excludeCustomerGroups: string[] | null;
        productCategories: string[] | null;
        excludeProductCategories: string[] | null;
        productTags: string[] | null;
        customFormula: string | null;
        additionalConfig: Record<string, any> | null;
        codEnabled: boolean | null;
        codFeeType?: string | null;
        codFeeValue: number | string | null;
        maxCodValue: number | string | null;
        createdBy?: number | string | null;
        updatedBy?: number | string | null;
    }
    interface IUpdate extends Partial<ICreate> {
        updatedBy?: number | string;
    }
    interface IFeeCalculationRequest {
        shop_id: number;
        draft_order_id?: number;
        provider_code?: string;
        orderValue?: number;
        weight?: number;
        dimensions?: {
            length: number;
            width: number;
            height: number;
        };
        fromAddress?: {
            province?: string;
            district?: string;
            ward?: string;
        };
        toAddress?: {
            province: string;
            district?: string;
            ward?: string;
        };
        productCategories?: string[];
        productTags?: string[];
        customerGroup?: string;
        isCod?: boolean;
        codValue?: number;
    }
    interface IFeeCalculationResponse {
        baseFee: number;
        shippingFee: number;
        codFee: number;
        totalFee: number;
        isFreeShipping: boolean;
        configUsed: IResponse;
        breakdown: {
            providerFee?: number;
            markup?: number;
            discount?: number;
        };
    }
}

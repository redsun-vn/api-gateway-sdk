import { BaseProfile, BaseProfileResponse, BaseResponse } from './common.type';
import { IBranch } from './ibranch';
import { IBrand } from './ibrand';
import { IBusinessType } from './ibusiness-type';
import { IDomain } from './idomain';
import { IShopConfig } from './ishop-config';
import { IShopPaymentMethod } from './ishop-payment-method';
import { IShopSalesChannel } from './ishop-sales-channel';
import { IShopShippingMethod } from './ishop-shipping-method';
import { ISubscription } from './isubscription';
import { tags } from 'typia';
import { CREATE_SHOP_FROM_SOURCE_ENUM } from '../enum';
export declare namespace IShop {
    interface ICreate extends BaseProfile {
        name: string & tags.MinLength<5>;
        shopOwnerId: string;
        business_type_id?: string;
        source?: CREATE_SHOP_FROM_SOURCE_ENUM;
    }
    interface IUpdate extends BaseProfile {
        active?: boolean;
        needConfig?: boolean;
        multiBranchEnabled?: boolean;
        defaultCurrencyCode?: string;
        subscriptions?: string[];
        salesChannels?: string[];
        business_type_id?: string;
        paymentMethods?: string[];
        shippingMethods?: string[];
    }
    interface IAdminUpdate extends BaseProfile {
        active?: boolean;
    }
    interface IShopResponse extends BaseResponse, BaseProfileResponse {
        name: string;
        zipcode?: string | null;
        active: boolean;
        needConfig: boolean;
        multiBranchEnabled: boolean;
        defaultCurrencyCode: string;
        business_type_id?: null | string;
        shopOwnerId: string;
        metadata?: string | null;
        businessType?: null | IBusinessType.IBusinessTypeResponse;
        brand?: null | IBrand.IBrandResponse;
        domain?: null | IDomain.IDomainResponse;
        config?: null | IShopConfig.IShopConfigResponse;
        branches?: null | IBranch.IBranchResponse[];
        subscriptions?: null | ISubscription.ISubscriptionResponse[];
        shopPaymentMethods?: null | IShopPaymentMethod.IShopPaymentMethodResponse[];
        shopShippingMethods?: null | IShopShippingMethod.IShopShippingMethodResponse[];
        shopSalesChannels?: null | IShopSalesChannel.IShopSalesChannelResponse[];
        source?: string | null;
    }
    interface IShopResponseWithoutConfig extends BaseResponse, BaseProfileResponse {
        name: string;
        zipcode?: string | null;
        active: boolean;
        needConfig: boolean;
        multiBranchEnabled: boolean;
        defaultCurrencyCode: string;
        business_type_id?: null | string;
        shopOwnerId: string;
        metadata?: string | null;
        businessType?: null | IBusinessType.IBusinessTypeResponse;
        brand?: null | IBrand.IBrandResponse;
        domain?: null | IDomain.IDomainResponse;
        source?: string | null;
    }
    interface IShopReportResponse {
        active: boolean;
        totalShop: number;
        day?: number;
        week?: number;
        month?: number;
        quarter?: number;
        year?: number;
    }
    interface IPublicShopResponse extends BaseResponse, BaseProfileResponse {
        name: string;
        zipcode?: string | null;
        active: boolean;
        needConfig: boolean;
        multiBranchEnabled: boolean;
        defaultCurrencyCode: string;
        business_type_id?: null | string;
        shopOwnerId: string;
        metadata?: string | null;
        businessType?: null | IBusinessType.IBusinessTypeResponse;
        brand?: null | IBrand.IBrandResponse;
        domain?: null | IDomain.IDomainResponse;
        config?: null | IShopConfig.IShopConfigResponse;
        branches?: null | IBranch.IBranchResponse[];
        shopPaymentMethods?: null | IShopPaymentMethod.IShopPaymentMethodResponse[];
        shopShippingMethods?: null | IShopShippingMethod.IShopShippingMethodResponse[];
        shopSalesChannels?: null | IShopSalesChannel.IShopSalesChannelResponse[];
        source?: string | null;
    }
    interface ISoftDelete {
        name: string;
    }
    interface IStats {
        totalShops: number | string;
        totalPendingPayment: number | string;
        totalExpired: number | string;
        totalActive: number | string;
    }
}

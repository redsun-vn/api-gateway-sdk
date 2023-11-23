import { BaseProfile, IBranch, IBrand, IBusinessType, IDomain, IShopConfig, IShopPaymentMethod, IShopSalesChannel, IShopShippingMethod, ISubscription } from '@shared';
import { tags } from 'typia';
import { BaseProfileResponse, BaseResponse } from './common.type';
export declare namespace IShop {
    interface ICreate extends BaseProfile {
        name: string & tags.MinLength<5>;
        password: string;
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
        branches?: unknown | IBranch.IBranchResponse[];
        subscriptions?: unknown | ISubscription.ISubscriptionResponse[];
        shopPaymentMethods?: unknown | IShopPaymentMethod.IShopPaymentMethodResponse[];
        shopShippingMethods?: unknown | IShopShippingMethod.IShopShippingMethodResponse[];
        shopSalesChannels?: unknown | IShopSalesChannel.IShopSalesChannelResponse[];
    }
}

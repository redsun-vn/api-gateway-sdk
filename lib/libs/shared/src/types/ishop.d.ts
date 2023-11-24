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

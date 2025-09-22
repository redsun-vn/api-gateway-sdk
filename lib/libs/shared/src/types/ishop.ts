/* eslint-disable @typescript-eslint/no-namespace */
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

export namespace IShop {
	export interface ICreate extends BaseProfile {
		name: string & tags.MinLength<5>;
		shopOwnerId: string;
		business_type_id?: string;
		// password: string & tags.MinLength<6>;
	}

	export interface IUpdate extends BaseProfile {
		active?: boolean;
		needConfig?: boolean;
		multiBranchEnabled?: boolean;
		defaultCurrencyCode?: string;
		subscriptions?: string[]; // [id]
		salesChannels?: string[]; // [id]
		business_type_id?: string; // id
		paymentMethods?: string[]; // [id]
		shippingMethods?: string[]; // [id]
	}

	export interface IAdminUpdate extends BaseProfile {
		active?: boolean;
	}

	export interface IShopResponse extends BaseResponse, BaseProfileResponse {
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
		shopShippingMethods?:
			| null
			| IShopShippingMethod.IShopShippingMethodResponse[];
		shopSalesChannels?: null | IShopSalesChannel.IShopSalesChannelResponse[];
	}

	export interface IShopResponseWithoutConfig
		extends BaseResponse,
			BaseProfileResponse {
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
	}
	export interface IShopReportResponse {
		active: boolean;
		totalShop: number;
		day?: number;
		week?: number;
		month?: number;
		quarter?: number;
		year?: number;
	}

	export interface IPublicShopResponse
		extends BaseResponse,
			BaseProfileResponse {
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
		shopShippingMethods?:
			| null
			| IShopShippingMethod.IShopShippingMethodResponse[];
		shopSalesChannels?: null | IShopSalesChannel.IShopSalesChannelResponse[];
	}
}

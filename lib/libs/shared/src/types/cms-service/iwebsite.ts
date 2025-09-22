/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { SEOBaseResponse, SEOBase } from '../common.type';
import { ITheme } from './itheme';

export namespace IWebsite {
	export interface IQueryFindByDomain {
		domain?: string;
	}

	export interface ICreateReq extends SEOBase {
		domain: string;
		homeUrl: string;
		themeUuid?: string;
		language?: string;
		logoId?: number;
		faviconId?: number;
		isDevelopment?: boolean;
		authSignup?: boolean;
		googleAnalyticsKey?: string;
		googleSearchConsoleKey?: string;
		googleMapsApiKey?: string;
		customCodeHead?: string;
		customCodeFooter?: string;
		robotsTxt?: string;
		priceBookId?: number;
		warehouseId?: number;
		availablePaymentMethodIds?: string[];
		availableShippingMethodIds?: string[];
	}

	export interface ICreate extends ICreateReq {
		shop_id?: (number & tags.Type<'uint64'>) | null;
	}

	export interface IDomainVerification {
		id: string;
	}

	export interface IUpdateReq extends Omit<Partial<ICreate>, 'shop_id'> {}

	export interface IUpdate extends IUpdateReq {
		id: string;
	}

	export interface IResponse extends SEOBaseResponse {
		shop_id?: number | string | null;
		domain: string;
		domainVerified: boolean;
		domainVerificationToken: string;
		homeUrl: string;
		themeUuid?: string | null;
		language?: string | null;
		theme?: ITheme.IResponse | null;
		logoId?: number | string | null;
		faviconId?: number | string | null;
		isDevelopment?: boolean;
		authSignup?: boolean;
		googleAnalyticsKey?: string | null;
		googleSearchConsoleKey?: string | null;
		googleMapsApiKey?: string | null;
		customCodeHead?: string | null;
		customCodeFooter?: string | null;
		robotsTxt?: string | null;
		priceBookId?: number | string | null;
		warehouseId?: number | string | null;
		availablePaymentMethodIds?: string[] | null;
		availableShippingMethodIds?: string[] | null;
	}

	export interface ICreateRealmReq {
		domain: string;
	}
}

/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';

export type CustomDataType = {
	[key: string]: string | string[] | boolean | number | undefined;
};

export interface BaseResponse {
	id: number | string | null;
	createdAt: string;
	updatedAt: string;
	deletedAt?: string | null;
	createdById?: number | string | null;
	updatedById?: number | string | null;
}

export interface ISorting {
	property: string;
	direction: string; // 'asc' | 'desc';
}

export interface IFiltering {
	property: string;
	rule: string;
	value: string;
}

export interface IFilteringMultiple {
	andFilter: IFiltering[];
	orFilter: IFiltering[];
}

export interface ISearch {
	s: string;
	properties: string[];
}

export interface IPaginationOptions {
	/**
	 * @default 10
	 * the amount of items to be requested per page
	 */
	limit: number | string;
	/**
	 * @default 1
	 * the page that is requested
	 */
	page: number | string;
}

export interface ISearchOptions {
	pagination?: IPaginationOptions;
	sort?: ISorting;
	filter?: IFiltering;
	filters?: IFilteringMultiple;
	groupBy?: string;
	search?: ISearch;
	shopId?: string;
	script?: string;
}
export interface IFilterTranslation {
	keyTranslation: string;
	langCode: string;
}

export namespace IPage {
	/**
	 * Page request data
	 */
	export interface IRequestFindAll {
		pagination: IPaginationOptions;
		query?: CustomDataType;
	}

	/**
	 * Page meta information.
	 */
	export interface IMeta {
		totalItems: number & tags.Type<'uint64'>;
		itemCount: number & tags.Type<'uint64'>;
		itemsPerPage: number & tags.Type<'uint64'>;
		totalPages: number & tags.Type<'uint64'>;
		currentPage: number & tags.Type<'uint64'>;
	}
}

export interface IResponsePagination<T> {
	items: T[];
	meta: IPage.IMeta;
	links?: unknown;
}

export interface IResponse<T> {
	errorCode?: number | string | null;
	data: T;
	message?: string | Array<string>;
	statusCode?: number & tags.Type<'uint64'>;
	success?: boolean;
}

export enum SORT_TYPE {
	'DESC' = 'desc',
	'ASC' = 'acs',
}

export type FindAllResponse<T> = { count: number; items: T[] };

export type SortParams = { sort_by: string; sort_type: SORT_TYPE };

// export type SearchParams = { s: string; field: string };

export type PaginateParams = { page: number; limit: number };

export interface BaseProfile {
	phone?: string;
	country?: string;
	province?: string;
	ward?: string;
	district?: string;
	city?: string;
	state?: string;
	address1?: string;
	email?: (string & tags.Format<'email'>) | null;
}

export interface BaseProfileResponse {
	phone?: string | null;
	country?: string | null;
	province?: string | null;
	ward?: string | null;
	district?: string | null;
	city?: string | null;
	state?: string | null;
	address1?: string | null;
	email?: string | null;
}

export interface IQuery {
	page?: number;
	limit?: number;
	filter?: string;
	filters?: string;
	groupBy?: string;
	search?: string;
	sort?: string;
	script?: string;
	shopId?: string;
}

export interface IHealthCheck {
	[key: string]: boolean;
}

export interface ITimeSlot {
	start: string;
	end: string;
}

export type NoCodeComponentEntry = {
	_component: string; // instance of the component (unique id)
	_id: string;
	[key: string]: any; // props
};

export interface SEOBase {
	metaTitle?: string | null;
	metaDescription?: string | null;
	metaKeywords?: string | null;
	metaOgImage?: number | string | null;
}

export interface SEOBaseResponse extends BaseResponse {
	metaTitle?: string | null;
	metaDescription?: string | null;
	metaKeywords?: string | null;
	metaOgImage?: number | string | null;
}

export interface CMSBaseResponse extends SEOBaseResponse {
	shop_id?: number | string | null;
	isPublished: boolean;
	author_id: number | string | null;
	updated_by_id: number | string | null;
	title: string;
	slug: string;
	description: string | null;
	content: string | null;
	attachment_id: number | string | null;
	isIndex: boolean;
}

export interface AdminBaseResponse extends BaseResponse {
	companyId?: string | null;
}

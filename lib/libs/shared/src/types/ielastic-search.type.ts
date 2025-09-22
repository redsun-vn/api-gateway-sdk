/* eslint-disable @typescript-eslint/no-namespace */

export namespace IElastic {
	export type CustomDataType = {
		[key: string]: unknown;
	};

	export interface BaseResponse {
		id: number | string;
		createdAt: string;
		updatedAt: string;
		deletedAt?: string;
		createdById?: number | string | null;
		updatedById?: number | string | null;
	}

	export interface IResponse<T> {
		errorCode?: number | string | null;
		data: T;
		message?: string | Array<string>;
		statusCode?: number;
	}

	export interface IBulkIndex {
		_index: string;
		_id: number | string;
	}

	export interface IBulkInputObject {
		id: number | string;
		[key: string]: any;
	}

	export interface IBulkOutputData {
		index: string;
		body: unknown;
	}

	export interface IRequestBase<T> {
		index: string;
		type?: string;
		body: T;
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

	export interface ISeachOptions {
		pagination?: IPaginationOptions;
		sort?: ISorting;
		filter?: IFiltering;
		filters?: IFilteringMultiple;
		search?: ISearch;
		shopId?: string;
		script?: string;
	}

	export namespace IPage {
		export interface IMeta {
			totalItems: number;
			itemCount: number;
			itemsPerPage: number;
			totalPages: number;
			currentPage: number;
		}
	}

	export interface IResponsePagination<T> {
		items: T[];
		meta: IPage.IMeta;
	}

	export interface IResponseSearch {
		_index: string;
		_id: string;
		_score: unknown | null;
		_source: unknown;
	}
}

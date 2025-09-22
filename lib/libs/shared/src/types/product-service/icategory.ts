/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { BaseResponse } from '../common.type';

export namespace ICategory {
	export interface IReqCreateCategory {
		name: string;
		parent_id?: number & tags.Type<'uint64'>;
		image_id?: number & tags.Type<'uint64'>;
		icon?: string;
		active?: boolean;
		description?: string;
		htmlContent?: string;
		userId?: string;
	}
	export interface ICreateCategory extends IReqCreateCategory {
		shop_id: number & tags.Type<'uint64'>;
	}

	export interface IUpdateCategory {
		name?: string;
		active?: boolean;
		icon?: string | null | undefined;
		image_id?: number & tags.Type<'uint64'>;
		description?: string | null;
		htmlContent?: string | null;
		userId?: string | null;
		parent_id?: number & tags.Type<'uint64'>;
	}

	export interface IDetailResponse extends BaseResponse {
		shop_id: string | number | null;
		name: string;
		description?: string | null;
		htmlContent?: string | null;
		icon?: string | null;
		parent_id?: string | number | null;
		image_id?: string | number | null;
		level?: number | string;
		active?: boolean;
		categoriesSlug?: string | null;
		categoryFlattened?: string | null;
		parentName?: string | null;
		sortOrder?: number | null;
		createdBy?: string | null;
		updatedBy?: string | null;
		parent?: IDetailResponse | null;
		childrens?: IDetailResponse[] | null;
	}
}

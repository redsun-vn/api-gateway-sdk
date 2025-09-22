/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { SEOBaseResponse, SEOBase } from '../common.type';
import { IThemeCategory, IThemeTag } from './itheme-category';

export namespace ITheme {
	export interface ICreateReq extends SEOBase {
		name: string;
		isSystem?: boolean;
		isPublic?: boolean;
		isActive?: boolean;
		price?: number;
		salePrice?: number;
		category_uuid?: string;
		tags?: string[];
		imagePreviewId?: number | string;
		isDefault?: boolean;
	}

	export interface ICreate extends ICreateReq {
		shop_id?: (number & tags.Type<'uint64'>) | null;
	}

	export interface IDuplicateReq {
		website_id?: string & tags.Format<'uuid'>;
		theme_id: string & tags.Format<'uuid'>;
	}

	export interface IDuplicate extends IDuplicateReq {
		shop_id?: (number & tags.Type<'uint64'>) | null;
	}

	export interface IUpdateReq extends Partial<ICreate> {}

	export interface IUpdate extends IUpdateReq {
		id: string;
	}

	export interface IResponse extends SEOBaseResponse {
		shop_id?: number | string | null;
		name: string;
		isSystem: boolean | null;
		isPublic: boolean | null;
		isActive: boolean | null;
		price: number | string | null;
		salePrice: number | string | null;
		category_uuid: string | null;
		category?: IThemeCategory.IResponse | null;
		tags?: IThemeTag.IResponse[] | null;
		imagePreviewId?: number | string | null;
		isDefault?: boolean;
	}
}

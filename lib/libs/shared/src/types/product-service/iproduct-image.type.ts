/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IProduct } from './iproduct';
import { IFile } from '../ifile';

export namespace IProductImage {
	export interface ICreateProductImage {
		shop_id?: number & tags.Type<'uint64'>;
		product_id: number & tags.Type<'uint64'>;
		image_id?: number & tags.Type<'uint64'>;
		image_url?: string | null;
		description?: string | null;
		color?: string | null;
		aliasName?: string | null;
		isShow?: boolean;
	}

	export interface IUpdateProductImage {
		id?: string;
		image_id?: number & tags.Type<'uint64'>;
		image_url?: string | null;
		description?: string | null;
		color?: string | null;
		aliasName?: string | null;
		isShow?: boolean;
	}

	export interface IProductImageResponse extends BaseResponse {
		shop_id: number | string | null;
		image_id?: string | number | null;
		product_id?: string | number | null;
		image_url?: string | null;
		description?: string | null;
		color?: string | null;
		aliasName?: string | null;
		isShow?: boolean;
		product?: IProduct.IProductResponse | null;
		image?: IFile.IResponse | null;
	}

	export interface IDeleteProductImage {
		id: string;
	}
}

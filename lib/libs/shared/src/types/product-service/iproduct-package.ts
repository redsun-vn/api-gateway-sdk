/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IVariant } from './ivariant';
import { IProduct } from './iproduct';

export namespace IProductPackage {
	export interface ICreateProductPackage {
		shop_id?: number & tags.Type<'uint64'>;
		product_id: number & tags.Type<'uint64'>;
		variant_id: number & tags.Type<'uint64'>;
		description?: string | null;
		quantity: number;
		price?: number;
		unitPrice?: number;
		variant?: IVariant.IVariantResponse | null;
	}

	export interface IUpdateProductPackage
		extends Omit<
			Partial<ICreateProductPackage>,
			'shop_id' | 'product_id' | 'variant_id'
		> {
		id?: string;
	}

	export interface IDetailProductPackageResponse extends BaseResponse {
		shop_id: number | string | null;
		variant_id?: string | number | null;
		product_id?: string | number | null;
		description?: string | null;
		quantity: number | string | null;
		price?: number | string | null;
		unitPrice?: number | string | null;
		variant?: IVariant.IVariantResponse | null;
		product?: IProduct.IProductResponse | null;
	}
}

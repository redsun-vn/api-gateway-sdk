/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IStockQuantity } from '../inventory-service';
import { IProduct } from './iproduct';
import { IUnit } from './iunit';
import { IProductOption } from './iproduct-option';

export namespace IVariant {
	export interface IVariantStockInput {
		stock_location_id: number & tags.Type<'uint64'>;
		quantity: number;
	}
	export interface IRefCreateUnit {
		uom_uom_id: number & tags.Type<'uint64'>;
		isDefault: boolean;
		rounding: number;
		factor: number;
		conversion: number;
	}
	export interface IRefUpdateUnit {
		id?: string;
		uom_uom_id?: number & tags.Type<'uint64'>;
		isDefault?: boolean;
		rounding?: number;
		factor?: number;
		conversion?: number;
	}

	export interface IReqCreateVariant {
		image_id?: number & tags.Type<'uint64'>;
		product_id: number & tags.Type<'uint64'>;
		name: string;
		barcode?: string;
		sku?: string;
		active: boolean;
		icon?: string;
		price: number;
		originPrice: number;
		compareAtPrice?: number;
		availableForSale?: boolean;
		currentlyNotInStock?: boolean;
		isSaleOnline?: boolean;
		requiredShipping?: boolean;
		quantityAvailable?: number;
		totalInventory?: number;
		weight?: number;
		expiredAt?: string & tags.Format<'date-time'>;
		userId?: string;
		unit?: IRefCreateUnit;
		selectedOptionIds?: number[];
		variantStocks?: IVariantStockInput[];
	}

	export interface ICreateVariant extends IReqCreateVariant {
		shop_id: number & tags.Type<'uint64'>;
	}

	export interface IUpdateVariant {
		id?: string;
		image_id?: number & tags.Type<'uint64'>;
		name?: string;
		active?: boolean;
		icon?: string;
		price?: number;
		originPrice?: number;
		compareAtPrice?: number;
		availableForSale?: boolean;
		currentlyNotInStock?: boolean;
		isSaleOnline?: boolean;
		requiredShipping?: boolean;
		quantityAvailable?: number;
		totalInventory?: number;
		weight?: number;
		expiredAt?: string & tags.Format<'date-time'>;
		userId?: string;
		selectedOptionIds?: number[];
		variantStocks?: IVariantStockInput[];
		unit?: IRefCreateUnit;
	}

	export interface IVariantResponse extends BaseResponse {
		name?: string | null;
		shop_id: number | string | null;
		image_id: number | string | null;
		product_id: number | string | null;
		barcode: string;
		sku: string;
		active: boolean;
		icon?: string | null;
		price: number | string | null;
		originPrice: number | string | null;
		compareAtPrice?: number | string | null;
		availableForSale: boolean;
		currentlyNotInStock: boolean;
		isSaleOnline: boolean;
		requiredShipping: boolean;
		quantityAvailable: number | string | null;
		totalInventory: number | string | null;
		weight: number | string | null;
		expiredAt: string | undefined | null;
		createdBy?: string | undefined | null;
		updatedBy?: string | undefined | null;
		unit?: IUnit.IDetailUnitResponse | null;
		variantStocks?: IStockQuantity.IStockQuantityResponse[] | null;
		selectedOptions?: IProductOption.IDetailProductOptionResponse[] | null;
		product?: IProduct.IProductResponse | null;
	}

	export interface IDeleteVariant {
		id: string;
	}
}

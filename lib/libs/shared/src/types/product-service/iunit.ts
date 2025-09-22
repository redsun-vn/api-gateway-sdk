/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IUomUom } from './iuom-uom';
import { IVariant } from './ivariant';

export namespace IUnit {
	export interface ICreateUnit {
		shop_id: number & tags.Type<'uint64'>;
		variant_id: number & tags.Type<'uint64'>;
		product_id: number & tags.Type<'uint64'>;
		uom_uom_id: number & tags.Type<'uint64'>;
		isDefault: boolean;
		rounding: number;
		factor: number;
		conversion: number;
	}

	export interface IUpdateUnit {
		isDefault?: boolean;
		rounding?: number;
		factor?: number;
		conversion?: number;
	}

	export interface IDetailUnitResponse extends BaseResponse {
		shop_id: string | number | null;
		product_id: string | number | null;
		variant_id?: string | number | null;
		uom_uom_id?: string | number | null;
		isDefault?: boolean | string;
		rounding?: number | string;
		factor?: number | string;
		conversion?: number | string;
		uomUom?: IUomUom.IDetailUomUomResponse;
		variant?: IVariant.IVariantResponse;
	}
}

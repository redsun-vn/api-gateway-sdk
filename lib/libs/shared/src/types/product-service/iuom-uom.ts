/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { UomType } from '../../enum';
import { IUomCategory } from './iuom-category';

export namespace IUomUom {
	export interface ICreateUomUom {
		shop_id?: number & tags.Type<'uint64'>;
		uom_category_id: number & tags.Type<'uint64'>;
		name: string;
		type: UomType;
		active?: boolean;
	}

	export interface IUpdateUomUom {
		name?: string;
		type?: UomType;
		active?: boolean;
	}

	export interface IDetailUomUomResponse extends BaseResponse {
		shop_id: string | number | null;
		uom_category_id?: string | number | null;
		name: string;
		type?: string;
		active?: boolean;
		uomCategory?: IUomCategory.IDetailUomCategoryResponse | null;
	}
}

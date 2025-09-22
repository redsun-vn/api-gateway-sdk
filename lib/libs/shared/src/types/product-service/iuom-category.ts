/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IUomUom } from './iuom-uom';

export namespace IUomCategory {
	export interface ICreateUomCategory {
		shop_id?: number & tags.Type<'uint64'>;
		name: string;
	}

	export interface IUpdateUomCategory {
		name?: string;
	}

	export interface IDetailUomCategoryResponse extends BaseResponse {
		name: string;
		shop_id: string | number | null;
		uomUoms?: IUomUom.IDetailUomUomResponse[] | null;
	}
}

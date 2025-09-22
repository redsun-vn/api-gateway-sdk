/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IProductOption } from './iproduct-option';

export namespace IAttribute {
	export interface IOptionInput {
		id?: string | number | null;
		name: string;
		active?: boolean;
	}

	export interface ICreateAttribute {
		shop_id?: number & tags.Type<'uint64'>;
		active?: boolean;
		name: string;
		options?: IOptionInput[];
	}

	export interface IUpdateAttribute {
		id?: string;
		active?: boolean;
		name?: string;
	}

	export interface IDetailAttributeResponse extends BaseResponse {
		shop_id: string | number | null;
		name?: string;
		active?: boolean;
		options?: IProductOption.IDetailProductOptionResponse[] | null;
	}

	export interface AttributeOptionsResponse {
		attribute_id: string | number;
		attribute_name: string | number;
		attribute_active: boolean;
		shop_id: string | number;
		options: {
			option_name: string;
			option_sequence: number | string;
			option_active: boolean;
		}[];
	}
}

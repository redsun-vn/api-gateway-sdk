/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { BaseResponse } from '../common.type';

export namespace IManufacturer {
	export interface ICreateManufacturer {
		shop_id?: number & tags.Type<'uint64'>;
		parent_id?: number & tags.Type<'uint64'>;
		attachment_id?: number & tags.Type<'uint64'>;
		avatar_id?: number & tags.Type<'uint64'>;
		active?: boolean;
		name: string;
		description?: string | null;
	}

	export interface IUpdateManufacturer {
		attachment_id?: number & tags.Type<'uint64'>;
		avatar_id?: number & tags.Type<'uint64'>;
		active?: boolean;
		name?: string;
		description?: string | null;
	}

	export interface IDetailManufacturerResponse extends BaseResponse {
		shop_id: number | string | null;
		parent_id?: number | string | null;
		attachment_id?: number | string | null;
		avatar_id?: number | string | null;
		active?: boolean;
		name: string;
		description?: string | null;
		manufacturerSlug?: string | null;
		parent?: IDetailManufacturerResponse | null;
		childrens?: IDetailManufacturerResponse[] | null;
	}
}

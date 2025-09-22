/* eslint-disable @typescript-eslint/no-namespace */
import { BaseResponse } from './common.type';

export namespace INameSpace {
	export interface ICreate {
		code: string;
		name: string;
		description?: string;
		parent_id?: number | null;
		is_active?: boolean;
		is_master?: boolean;
		is_category?: boolean;
		createdById?: number | string;
	}
	export interface IUpdate {
		code: string;
		name: string;
		description?: string;
		parent_id?: number | null;
		is_active?: boolean;
		is_master?: boolean;
		is_category?: boolean;
		updatedById?: number | string;
	}
	export interface IResponse extends BaseResponse {
		code: string;
		name: string;
		description?: string | null;
		parent_id?: number | null;
		is_active?: boolean;
		is_master?: boolean;
		is_category?: boolean;
		parent?: IResponse | null;
	}
}

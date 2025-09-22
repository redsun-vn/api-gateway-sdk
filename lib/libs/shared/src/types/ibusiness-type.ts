/* eslint-disable @typescript-eslint/no-namespace */
import { BaseResponse } from './common.type';
export namespace IBusinessType {
	export interface ICreate {
		code_business_type: string;
		name: string;
		active?: boolean;
		description?: string;
		icon?: string;
		metadata?: string;
		category_business_id: string;
	}

	export interface IUpdate {
		code_business_type?: string;
		name?: string;
		active?: boolean;
		description?: string;
		icon?: string;
		metadata?: string;
	}

	export interface IBusinessTypeResponse extends BaseResponse {
		name: string;
		description?: null | string;
		category_business_id: string;
		icon?: null | string;
		metadata?: string | null;
		active: boolean;
		code_business_type?: string | null;
		code?: string | null;
	}
}

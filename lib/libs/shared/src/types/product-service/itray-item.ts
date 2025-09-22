/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { BaseResponse } from '../common.type';

export namespace ITrayItem {
	export interface IReqCreateTrayItem {
		branch_id: number & tags.Type<'uint64'>;
		code: string;
		shortTrayCode: string;
		userId?: string;
	}

	export interface ICreateTrayItem extends IReqCreateTrayItem {
		shop_id: number & tags.Type<'uint64'>;
	}

	export interface IUpdateTrayItem {
		id?: string;
		code?: string;
		shortTrayCode?: string;
		userId?: string;
	}

	export interface ITrayItemResponse extends BaseResponse {
		shop_id: number | string | null;
		branch_id: number | string | null;
		code: string;
		shortTrayCode: string;
	}

	export interface IDeleteTrayItem {
		id: string;
	}
}

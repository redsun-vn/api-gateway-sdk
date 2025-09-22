/* eslint-disable @typescript-eslint/no-namespace */
import { BaseResponse } from '../common.type';
import { ITable } from './itable';

export namespace IEMenuQRItem {
	export interface ICreate {
		shop_id: number | string;
		branch_id: number | string;
		table_id: number | string;
	}
	export type IUpdate = Partial<ICreate>;

	export interface IResponse extends BaseResponse {
		uuid: string;
		shop_id: number | string;
		branch_id: number | string;
		table_id: number | string;
	}

	export interface IResponseWithTable extends IResponse {
		table: ITable.ITableResponse;
	}
}

/* eslint-disable @typescript-eslint/no-namespace */

import { BaseResponse } from '../common.type';
import { ITable } from './itable';

export namespace IRoom {
	export interface ICreate {
		branch_id: number;
		floor_plan_id: number;
		name: string;
		description?: string;
		active?: boolean;
	}
	export interface IUpdate extends Partial<ICreate> {}
	export interface IRoomResponse extends BaseResponse {
		shop_id: number | string;
		branch_id: number | string;
		floor_plan_id: number | string;
		name: string;
		description?: string | null;
		active: boolean;
		tables?: null | ITable.ITableResponse[];
	}
}

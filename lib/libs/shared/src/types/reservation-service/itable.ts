/* eslint-disable @typescript-eslint/no-namespace */

import { BaseResponse } from '../common.type';

export namespace ITable {
	export interface ICreate {
		branch_id: number;
		floor_plan_id?: number;
		room_id?: number;
		name: string;
		maxAdult?: number;
		maxChild?: number;
		description?: string;
		active?: boolean;
	}

	export interface IUpdate extends Partial<ICreate> {}
	export interface ITableResponse extends BaseResponse {
		shop_id: number | string;
		branch_id: number | string;
		floor_plan_id: number | string | null;
		room_id: number | string | null;
		name: string;
		maxAdult?: number | null;
		maxChild?: number | null;
		description?: string | null;
		active: boolean;
	}
}

/* eslint-disable @typescript-eslint/no-namespace */

import { BaseResponse } from '../common.type';
import { IRoom } from './iroom';
import { ITable } from './itable';

export namespace IFloorPlan {
	export interface ICreate {
		branch_id: number;
		name: string;
		description?: string;
		active?: boolean;
	}
	export interface IUpdate extends Partial<ICreate> {}
	export interface IFloorPlanResponse extends BaseResponse {
		shop_id: number | string;
		branch_id: number | string;
		name: string;
		description?: string | null;
		active: boolean;
		tables?: null | ITable.ITableResponse[];
		rooms?: null | IRoom.IRoomResponse[];
	}
}

import { BaseResponse } from '../../common.type';

/* eslint-disable @typescript-eslint/no-namespace */
export namespace IHolidayConfig {
	export interface ICreate {
		shop_id: number;
		name: string;
		description?: string;
		start_date: string;
		end_date: string;
		salary_multiplier?: number;
		active?: boolean;
		recurring?: boolean;
	}

	export type IUpdate = Omit<Partial<ICreate>, 'shop_id'>;

	export interface IResponse extends BaseResponse {
		shop_id: number | string;
		name: string;
		description?: string | null;
		start_date: string;
		end_date: string;
		salary_multiplier: number | string | null;
		active: boolean;
		recurring: boolean;
		created_by_id?: string | null;
		updated_by_id?: string | null;
	}
}

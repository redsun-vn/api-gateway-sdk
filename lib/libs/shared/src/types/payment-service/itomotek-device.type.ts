/* eslint-disable @typescript-eslint/no-namespace */
import { BaseResponse } from '../common.type';

export namespace ITomotekDevice {
	export interface ICreate {
		tomotek_config_id: number;
		branch_id: number;
		name: string;
		serialNumber: string;
	}

	export interface IUpdate {
		name?: string;
		active?: boolean;
	}

	export interface IResponse extends BaseResponse {
		shop_id: number | string;
		branch_id: number | string;
		tomotek_config_id: number | string;
		name: string;
		serialNumber: string;
		active: boolean;
	}
}

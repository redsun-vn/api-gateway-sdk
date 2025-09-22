import { BaseResponse } from '../../common.type';

/* eslint-disable @typescript-eslint/no-namespace */
export namespace IAttendanceQR {
	export interface IRequestCreate {
		branch_id: number;
		active: boolean;
		latitude: string;
		longitude: string;
		range: number;
	}

	export interface ICreate {
		shop_id: number;
		branch_id: number;
		active: boolean;
		latitude: string;
		longitude: string;
		range: number;
	}

	export interface IUpdate {
		active?: boolean;
		latitude?: string;
		longitude?: string;
		range?: number;
	}

	export interface IResponse extends BaseResponse {
		shop_id: number | string;
		branch_id: number | string;
		uuid: string;
		active: boolean;
		latitude: string | null;
		longitude: string | null;
		range: number | null;
	}
}

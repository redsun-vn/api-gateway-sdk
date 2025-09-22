/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';

import { BaseResponse } from './common.type';

export namespace IUserDevice {
	export interface ICreate {
		device_id: string;
		refresh_token: string;
		lastLoginAt: string & tags.Format<'date-time'>;
		device_info: string;
	}

	export interface IUpdate extends Partial<ICreate> {}
	export interface IUserDeviceResponse extends BaseResponse {
		device_id: string;
		refresh_token: string;
		lastLoginAt: string;
		staff_id: string;
		device_info: string;
		shop_id: string;
	}
}

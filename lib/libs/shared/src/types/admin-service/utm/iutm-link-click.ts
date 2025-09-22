/* eslint-disable @typescript-eslint/no-namespace */

import { BaseResponse } from '../../common.type';

export namespace IUtmLinkClick {
	export interface ICreate {
		utm_link_code?: string;
		ip?: string;
		country?: string;
		user_agent?: string;
	}
	export type IUpdate = Partial<ICreate>;
	export interface IResponse extends BaseResponse {
		utm_link_id: number | string;
		ip?: string | null;
		country?: string | null;
		user_agent?: string | null;
	}
}

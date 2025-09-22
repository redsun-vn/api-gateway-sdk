/* eslint-disable @typescript-eslint/no-namespace */

import { BaseResponse } from '../../common.type';

export namespace ICompany {
	export interface IResponse extends BaseResponse {
		name: string;
		code?: string | null;
		address?: string | null;
		phone?: string | null;
		email?: string | null;
		website?: string | null;
		description?: string | null;
		logo?: string | null;
		industry?: string | null;
		taxCode?: string | null;
	}
}

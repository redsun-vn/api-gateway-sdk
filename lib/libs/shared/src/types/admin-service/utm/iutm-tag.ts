/* eslint-disable @typescript-eslint/no-namespace */

import { AdminBaseResponse as BaseResponse } from '../../common.type';

export namespace IUtmTag {
	export interface ICreate {
		active?: boolean;
		name: string;
		color?: string;
		createdById?: number;
		companyId?: string;
	}
	export interface IUpdate extends Partial<ICreate> {
		updatedById?: number;
	}
	export interface IResponse extends BaseResponse {
		active: boolean;
		name: string;
		color?: string | null;
	}
}

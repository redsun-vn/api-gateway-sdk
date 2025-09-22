import { AdminBaseResponse as BaseResponse } from '../../common.type';

/* eslint-disable @typescript-eslint/no-namespace */
export namespace ITicketCategory {
	export interface ICreate {
		name: string;
		active: boolean;
		description?: string;
		companyId?: string;
	}

	export type IUpdate = Partial<ICreate>;

	export interface IResponse extends BaseResponse {
		name: string;
		active: boolean;
		description: string | null;
	}
}

import { AdminBaseResponse as BaseResponse } from '../../common.type';
import { IAdminUser } from '../iuser';

/* eslint-disable @typescript-eslint/no-namespace */
export namespace ITicketComment {
	export interface ICreate {
		content: string;
		ticketId: number;
		parentId?: number;
		authorId?: number;
		companyId?: string;
	}

	export type IUpdate = Partial<ICreate>;

	export interface IResponse extends BaseResponse {
		content: string;
		ticketId: number | string;
		parentId?: number | string | null;
		authorId?: number | string | null;
		author?: IAdminUser.IResponse;
		parent?: IResponse;
		children?: IResponse[];
		childCount: number;
	}
}

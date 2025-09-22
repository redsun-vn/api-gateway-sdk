/* eslint-disable @typescript-eslint/no-namespace */
import { BaseResponse } from '../common.type';

export namespace ITomotekConfig {
	export interface ICreate {
		active?: boolean;
		branch_id: number;
		fullName: string;
		phone: string;
		address: string;
		name: string;
		bankAccountName: string;
		bankAccount: string;
		bankNumber: string;
	}

	export interface IUpdate {
		active?: boolean;
		name?: string;
		fullName?: string;
		phone?: string;
	}

	export interface IResponse extends BaseResponse {
		shop_id: number | string;
		branch_id: number | string;
		workspaceId: number | string;
		partnerId: number | string;
		active?: boolean | null;
		name?: string;
		fullName?: string;
		phone?: string | null;
		address?: string | null;
		token: string;
		bankAccountName: string;
		bankAccount: string;
		bankNumber: string;
		currency: string;
	}
}

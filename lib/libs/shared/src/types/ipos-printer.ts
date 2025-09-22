/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { BaseResponse } from './common.type';
export namespace IPosPrinter {
	export interface ICreate {
		name: string;
		ip: string & tags.Format<'ipv4'>;
		branch_id: number & tags.Type<'uint64'>;
	}
	export interface IUpdate {
		name?: string;
		ip?: string;
	}
	export interface IPosPrinterResponse extends BaseResponse {
		name: string;
		ip: string;
		shop_id?: string | number | null;
		branch_id?: string | number | null;
	}
}

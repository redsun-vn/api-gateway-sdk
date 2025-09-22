/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { BaseResponse } from './common.type';
export namespace IDomain {
	export interface ICreate {
		host: string & tags.Format<'ipv4'>;
		sslEnabled?: boolean;
		url: string & tags.Format<'url'>;
		// shop_id: string;
	}
	export interface IUpdate extends Partial<ICreate> {}
	export interface IDomainResponse extends BaseResponse {
		host: string;
		sslEnabled?: boolean;
		url: string;
		shop_id: string;
	}
}

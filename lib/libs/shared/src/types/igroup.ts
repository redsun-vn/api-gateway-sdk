/* eslint-disable @typescript-eslint/no-namespace */

import { tags } from 'typia';
import { BaseResponse } from './common.type';

export namespace IGroup {
	export interface ICreate {
		name: string & tags.MinLength<3> & tags.MaxLength<50>;
		permission: string[];
	}

	export interface IUpdate extends Partial<ICreate> {}
	export interface IGroupResponse extends BaseResponse {
		shop_id: string;
		name: string;
		permission: string[];
	}
}

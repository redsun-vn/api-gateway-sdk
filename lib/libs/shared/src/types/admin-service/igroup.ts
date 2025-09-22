/* eslint-disable @typescript-eslint/no-namespace */

import { tags } from 'typia';
import { AdminBaseResponse as BaseResponse } from '../common.type';

export namespace IAdminGroup {
	export interface ICreate {
		name: string & tags.MinLength<3> & tags.MaxLength<50>;
		active?: boolean;
		permission: string[];
		parent_id?: number;
		companyId?: string;
	}

	export type IUpdate = Partial<ICreate>;

	export interface IResponse extends BaseResponse {
		name: string;
		active: boolean;
		permission: string[];
		parent_id?: number | string | null;
	}
}

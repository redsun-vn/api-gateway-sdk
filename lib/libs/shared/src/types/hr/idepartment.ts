/* eslint-disable @typescript-eslint/no-namespace */
import { BaseResponse } from '../common.type';

export namespace IDepartment {
	export interface ICreate {
		name: string;
		active: boolean;
		owner_id: string;
		parent_id?: string | number;
		description?: string;
		parent_flatten_ids?: string;
	}

	export type IUpdate = Omit<Partial<ICreate>, 'owner_id'>;

	export interface IResponse extends BaseResponse {
		name: string;
		active: boolean;
		owner_id: string | number | null;
		parent_id: string | number | null;
		description: string | null;
		parent_flatten_ids: string | null;
	}
}

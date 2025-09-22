/* eslint-disable @typescript-eslint/no-namespace */

import { AdminBaseResponse as BaseResponse } from '../../common.type';

export namespace ICRMTeam {
	export interface ICreate {
		name: string;
		sequence?: number | string;
		description?: string;
		active: boolean;
		team_leader_id?: number | string | null;
		team_members?: string[];
		companyId?: string;
		country?: string;
		province?: string;
		ward?: string;
		department_id?: number | string | null;
	}

	export interface IUpdate extends ICreate {
		id: number | string;
	}

	export interface IResponse extends BaseResponse {
		name: string;
		sequence?: number | string | null;
		description?: string | null;
		active: boolean;
		team_leader_id?: number | string | null;
		team_members?: string[] | null;
		country?: string | null;
		province?: string | null;
		ward?: string | null;
		department_id?: number | string | null;
	}
}

/* eslint-disable @typescript-eslint/no-namespace */

import { BaseResponse } from '../../common.type';

export namespace ICrmStage {
	export interface IResponse extends BaseResponse {
		name: string;
		sequence: number;
		isWon: boolean;
		teamId: string[];
		companyId: string | null;
		color?: string | null;
		icon?: string | null;
	}

	export interface ICreateRequest {
		name: string;
		sequence?: number;
		isWon?: boolean;
		teamId?: string[];
		companyId?: string;
		color?: string;
		icon?: string;
	}

	export interface IUpdateRequest extends Partial<ICreateRequest> {
		id: number;
	}

	export interface IFindByTeamRequest {
		teamId: string;
	}

	export interface IFindByCompanyRequest {
		company_id: string;
	}
}

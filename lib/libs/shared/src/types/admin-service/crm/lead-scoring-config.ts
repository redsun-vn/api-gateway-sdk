/* eslint-disable @typescript-eslint/no-namespace */

import { AdminBaseResponse as BaseResponse } from '../../common.type';
import { ICRMLeadScoringConfigRule } from './lead-scoring-config-rule';

export namespace ICRMLeadScoringConfig {
	export interface IRuleValue
		extends Partial<ICRMLeadScoringConfigRule.ICreate> {
		id: number | string | null;
		updatedBy?: number | null;
	}

	export interface ISetDefault {
		industry: string;
		configId: number;
	}

	export interface IActivate {
		configId: number;
	}

	export interface IDemographicScores {
		company_size: {
			small: number;
			medium: number;
			large: number;
			enterprise: number;
		};
		industry_match: {
			exact: number;
			related: number;
			none: number;
		};
		budget_range: {
			low: number;
			medium: number;
			high: number;
			enterprise: number;
		};
		decision_maker: {
			c_level: number;
			director: number;
			manager: number;
			staff: number;
		};
	}

	export interface IBehavioralScores {
		website_visits: {
			low: number;
			medium: number;
			high: number;
		};
		content_downloads: {
			none: number;
			low: number;
			high: number;
		};
		email_engagement: {
			none: number;
			low: number;
			medium: number;
			high: number;
		};
		demo_request: {
			none: number;
			requested: number;
		};
	}

	export interface IEngagementScores {
		phone_answered: {
			no: number;
			yes: number;
		};
		meeting_attended: {
			no: number;
			yes: number;
		};
		proposal_requested: {
			no: number;
			yes: number;
		};
	}

	export interface IClassificationThresholds {
		cold: number;
		warm: number;
		hot: number;
		sales_ready: number;
	}

	export interface IAssignmentWeights {
		location: number;
		industry_expertise: number;
		workload: number;
	}

	export interface ICreate {
		companyId?: string;
		industry: string;
		configName: string;
		description?: string;
		isActive: boolean;
		isDefault: boolean;
		demographicScores: IDemographicScores;
		behavioralScores: IBehavioralScores;
		engagementScores: IEngagementScores;
		classificationThresholds: IClassificationThresholds;
		assignmentWeights: IAssignmentWeights;
		version: number | string;
	}

	export interface IUpdate extends Partial<ICreate> {
		id: number | string;
		updatedBy?: number;
	}

	export interface IResponse extends BaseResponse {
		industry: string;
		configName: string;
		description?: string | null;
		isActive: boolean;
		isDefault: boolean;
		demographicScores: IDemographicScores;
		behavioralScores: IBehavioralScores;
		engagementScores: IEngagementScores;
		classificationThresholds: IClassificationThresholds;
		assignmentWeights: IAssignmentWeights;
		version: number;
		rules?: ICRMLeadScoringConfigRule.IResponse[];
	}

	export interface IGetActiveConfig {
		industry: string;
	}

	export interface ICloneConfig {
		sourceId: number;
		newConfigName: string;
		description?: string;
		createdBy: number;
	}

	export interface IValidateConfig {
		config: IResponse;
	}
}

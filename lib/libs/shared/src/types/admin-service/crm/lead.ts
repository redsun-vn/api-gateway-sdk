/* eslint-disable @typescript-eslint/no-namespace */

import { AdminBaseResponse as BaseResponse } from '../../common.type';
import { IAdminUser as IUser } from '../iuser';
import {
	DEAL_AVAILABLE_PRIORITIES,
	DEAL_CLASSIFICATION,
	DECISION_MAKER_LEVEL,
	LEAD_STATUS,
	ASSIGNMENT_RULES,
	NEED_SCORE,
	TIMELINE_SCORE,
} from '../../../enum';
import { ICRMTeam } from './team';
import { IAdminCustomer as ICustomer } from '../icustomer';
import { IUtmSource, IUtmMedium, IUtmCampaign } from '../utm';

export namespace ICRMLead {
	export interface IDemographicScore {
		company_size: number | string;
		industry_match: number | string;
		budget_range: number | string;
		decision_maker: number | string;
	}

	export interface IBehavioralScore {
		website_visits: number | string;
		content_downloads: number | string;
		email_engagement: number | string;
		demo_request: number | string;
	}

	export interface IEngagementScore {
		phone_answered: number | string;
		meeting_attended: number | string;
		proposal_requested: number | string;
	}

	export interface IScoringDetails {
		demographic_score: number | string;
		behavioral_score: number | string;
		engagement_score: number | string;
		config_version: number | string;
		config_id: number | string;
	}

	export interface IAssignmentDetails {
		location_score: number | string;
		industry_expertise_score: number | string;
		workload_score: number | string;
		total_assignment_score: number | string;
	}

	export interface ICreate {
		companyId?: string;
		name: string;
		company_name?: string;
		industry?: string; // FNB, RETAIL_WHOLESALE, SERVICE_HOSPITALITY
		business_type?: string; // Nhà hàng, Cafe, Khách sạn, etc.
		email?: string;
		phone?: string;
		address?: string;
		city?: string;
		province?: string;
		district?: string;
		website?: string;
		description?: string;
		status?: LEAD_STATUS; // new, contacted, qualified, disqualified, converted, lost
		source?: string; // website, referral, social_media, etc.
		company_size?: number;
		decision_maker_level?: DECISION_MAKER_LEVEL; // c_level, director, manager, staff
		score_classification?: DEAL_CLASSIFICATION;
		budget_range?: number;
		website_visits?: number;
		content_downloads?: number;
		email_engagement?: number;
		demo_requested?: boolean;
		phone_answered?: boolean;
		meeting_attended?: boolean;
		proposal_requested?: boolean;
		customer_id?: number;
		team_id?: number;
		assigned_user_id?: number;
		source_id?: number;
		medium_id?: number;
		campaign_id?: number;
		last_contact_date?: string;
		next_follow_up_date?: string;
		competitors?: string;
		priority?: DEAL_AVAILABLE_PRIORITIES;
		classification?: DEAL_CLASSIFICATION;
		description_detail?: string;
		assignment_rules?: ASSIGNMENT_RULES;
		need_score?: NEED_SCORE;
		timeline_score?: TIMELINE_SCORE;
		tags?: string[];
	}

	export interface IUpdate extends Partial<ICreate> {
		id: number | string;
		updatedBy?: number;
		total_score?: number;
		score_classification?: DEAL_CLASSIFICATION;
		scoring_details?: IScoringDetails;
		assignment_details?: IAssignmentDetails;
	}

	export interface IResponse extends BaseResponse {
		name: string;
		company_name?: string | null;
		industry?: string | null;
		business_type?: string | null;
		email?: string | null;
		phone?: string | null;
		address?: string | null;
		city?: string | null;
		province?: string | null;
		district?: string | null;
		website?: string | null;
		description?: string | null;
		status?: string | null;
		source?: string | null;
		score_classification?: string | null;
		total_score: number | string | null;
		priority?: string | null;
		company_size?: number | null;
		decision_maker_level?: string | null;
		budget_range?: number | string | null;
		website_visits: number | string | null;
		content_downloads: number | string | null;
		email_engagement: number | string | null;
		demo_requested: boolean;
		phone_answered: boolean;
		meeting_attended: boolean;
		proposal_requested: boolean;
		customer_id?: number | string | null;
		team_id?: number | string | null;
		assigned_user_id?: number | string | null;
		source_id?: number | string | null;
		medium_id?: number | string | null;
		campaign_id?: number | string | null;
		last_contact_date?: string | null;
		next_follow_up_date?: string | null;
		scoring_details?: IScoringDetails | null;
		assignment_details?: IAssignmentDetails | null;
		customer?: ICustomer.IResponse | null;
		team?: ICRMTeam.IResponse | null;
		assigned_user?: IUser.IResponse | null;
		source_utm?: IUtmSource.IResponse | null;
		medium_utm?: IUtmMedium.IResponse | null;
		campaign_utm?: IUtmCampaign.IResponse | null;
		deal_id?: number | string | null;
		competitors?: string | null;
		description_detail?: string | null;
		assignment_rules?: string | null;
		need_score?: string | null;
		timeline_score?: string | null;
		tags?: string[] | null;
	}

	export interface IFindByClassification {
		classification: string; // cold, warm, hot, sales_ready
		industry?: string;
		team_id?: number;
		limit?: number;
		offset?: number;
	}

	export interface IFindUnassigned {
		industry?: string;
		classification?: string;
		limit?: number;
		offset?: number;
	}

	export interface IAssignTeam {
		lead_id: number;
		team_id: number;
		assigned_by: number;
	}

	export interface IAssignUser {
		lead_id: number;
		user_id: number;
		assigned_by: number;
	}

	export interface IAutoAssign {
		lead_id: number;
		assigned_by: number;
	}

	export interface IUpdateScore {
		lead_id: number;
		updated_by: number;
		scoring_details?: IScoringDetails;
		total_score?: number;
		score_classification?: string;
	}

	export interface IFindFollowUpToday {
		team_id?: number;
		user_id?: number;
		limit?: number;
		offset?: number;
	}

	export interface IImport {
		leads: Array<{
			name: string;
			company_name?: string;
			industry?: string;
			business_type?: string;
			email?: string;
			phone?: string;
			address?: string;
			city?: string;
			province?: string;
			district?: string;
			website?: string;
			description?: string;
			status?: string;
			source?: string;
			company_size?: number;
			decision_maker_level?: string;
			budget_range?: number;
			website_visits?: number;
			content_downloads?: number;
			email_engagement?: number;
			demo_requested?: boolean;
			phone_answered?: boolean;
			meeting_attended?: boolean;
			proposal_requested?: boolean;
			customer_id?: number;
			team_id?: number;
			assigned_user_id?: number;
			source_id?: number;
			medium_id?: number;
			campaign_id?: number;
			last_contact_date?: string;
			next_follow_up_date?: string;
			competitors?: string;
			priority?: string;
			score_classification?: string;
			description_detail?: string;
			assignment_rules?: string;
			need_score?: string;
			timeline_score?: string;
			tags?: string[];
		}>;
		user_id: number;
		options?: {
			skip_duplicates?: boolean;
			update_existing?: boolean;
			default_team_id?: number;
			default_assigned_user_id?: number;
		};
	}

	export interface IImportResult {
		total_processed: number;
		total_created: number;
		total_updated: number;
		total_skipped: number;
		total_failed: number;
		errors: Array<{
			row: number;
			error: string;
			data: any;
		}>;
	}

	export interface IAutoAssignResult {
		team_id: number | string | null;
		user_id: number | string | null;
		assignment_details: IAssignmentDetails;
		scoring_details?: IScoringDetails;
	}

	export interface IAnalyticsScoringResult {
		total_leads: number | string;
		new_leads: number | string;
		qualified_leads: number | string;
		qualified_increase: number | string;
		conversion_rate: number | string;
		conversion_increase: number | string;
		average_score: number | string;
		average_score_normalized: number | string;
		score_change: number | string;
		score_distribution: {
			cold: number | string;
			warm: number | string;
			hot: number | string;
			sales_ready: number | string;
		};
		conversion_rates: {
			cold_to_warm: number | string;
			warm_to_hot: number | string;
			hot_to_sales_ready: number | string;
			overall_conversion: number | string;
		};
		average_scores: {
			demographic: number | string;
			behavioral: number | string;
			engagement: number | string;
			total: number | string;
		};
		quality_leads: {
			total_quality_leads: number | string;
			quality_score: number | string;
			quality_criteria: {
				high_score_leads: number | string;
				engaged_leads: number | string;
				qualified_leads: number | string;
				converted_leads: number | string;
			};
		};
	}

	export interface IAnalyticsAssignmentResult {
		assignment_success_rate: number | string;
		team_performance: Array<{
			team_id: number | string;
			team_name: string;
			total_leads: number | string;
			conversion_rate: number | string;
			average_score: number | string;
		}>;
		user_performance: Array<{
			user_id: number | string;
			user_name: string;
			total_leads: number | string;
			conversion_rate: number | string;
			average_score: number | string;
		}>;
	}

	// BANT Score Interfaces
	export interface IBANTScore {
		budget: IBANTBudgetScore;
		authority: IBANTAuthorityScore;
		need: IBANTNeedScore;
		timeline: IBANTTimelineScore;
		overall: IBANTOverallScore;
	}

	export interface IBANTBudgetScore {
		score: number;
		status: 'excellent' | 'good' | 'fair' | 'poor' | 'unknown';
		value: number;
		range: string;
		description: string;
	}

	export interface IBANTAuthorityScore {
		score: number;
		status: 'excellent' | 'good' | 'fair' | 'poor' | 'unknown';
		level: string;
		description: string;
	}

	export interface IBANTNeedScore {
		score: number;
		status: 'excellent' | 'good' | 'fair' | 'poor' | 'unknown';
		urgency: string;
		engagement_level: string;
		description: string;
	}

	export interface IBANTTimelineScore {
		score: number;
		status: 'excellent' | 'good' | 'fair' | 'poor' | 'unknown';
		urgency: string;
		days_until_follow_up: number;
		description: string;
	}

	export interface IBANTOverallScore {
		total_score: number;
		status: 'excellent' | 'good' | 'fair' | 'poor';
		classification: string;
		recommendation: string;
	}

	export interface IBANTQuickAction {
		type: string;
		title: string;
		description: string;
		priority: string;
	}

	export interface IBANTSummary {
		lead_id: number;
		lead_name: string;
		company_name?: string;
		bant_score: IBANTScore;
		quick_actions: IBANTQuickAction[];
		next_steps: string[];
	}

	export interface IBANTAnalytics {
		average_scores: {
			budget: number;
			authority: number;
			need: number;
			timeline: number;
			overall: number;
		};
		score_distribution: {
			excellent: number;
			good: number;
			fair: number;
			poor: number;
		};
		improvement_areas: string[];
		top_performers: IBANTScore[];
	}

	export interface IBANTFollowUpUrgentLead extends IBANTSummary {
		urgency_reason: string;
	}

	export interface IBANTFollowUpUrgentResult {
		total_urgent: number | string;
		leads: IBANTFollowUpUrgentLead[];
	}

	export interface IAnalyticsSourceResult {
		total_leads: number | string;
		source_distribution: Array<{
			source_id: number | string;
			source_name: string;
			total_leads: number | string;
			conversion_rate: number | string;
			average_score: number | string;
			qualified_leads: number | string;
			converted_leads: number | string;
		}>;
		top_sources: Array<{
			source_id: number | string;
			source_name: string;
			total_leads: number | string;
			conversion_rate: number | string;
			average_score: number | string;
		}>;
		source_performance: {
			best_performing_source: {
				source_id: number | string;
				source_name: string;
				conversion_rate: number | string;
				average_score: number | string;
			};
			worst_performing_source: {
				source_id: number | string;
				source_name: string;
				conversion_rate: number | string;
				average_score: number | string;
			};
		};
	}

	export interface IAnalyticsStatusResult {
		total_leads: number | string;
		status_distribution: {
			new: number | string;
			contacted: number | string;
			qualified: number | string;
			disqualified: number | string;
			converted: number | string;
			lost: number | string;
		};
		status_performance: {
			best_performing_status: {
				status: string;
				total_leads: number | string;
				conversion_rate: number | string;
				average_score: number | string;
			};
			worst_performing_status: {
				status: string;
				total_leads: number | string;
				conversion_rate: number | string;
				average_score: number | string;
			};
		};
		status_trends: {
			new_increase: number | string;
			contacted_increase: number | string;
			qualified_increase: number | string;
			disqualified_increase: number | string;
			converted_increase: number | string;
			lost_increase: number | string;
		};
		conversion_funnel: {
			new_to_contacted: number | string;
			contacted_to_qualified: number | string;
			qualified_to_converted: number | string;
			overall_conversion: number | string;
		};
	}

	export interface IConvertToDeal {
		lead_id: number;
		user_id: number;
	}
}

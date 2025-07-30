import { AdminBaseResponse as BaseResponse } from '../../common.type';
import { IAdminUser as IUser } from '../iuser';
import { DEAL_AVAILABLE_PRIORITIES, DEAL_CLASSIFICATION, DECISION_MAKER_LEVEL, LEAD_STATUS } from '../../../enum';
import { ICRMTeam } from './team';
import { IAdminCustomer as ICustomer } from '../icustomer';
import { IUtmSource, IUtmMedium, IUtmCampaign } from '../utm';
export declare namespace ICRMLead {
    interface IDemographicScore {
        company_size: number;
        industry_match: number;
        budget_range: number;
        decision_maker: number;
    }
    interface IBehavioralScore {
        website_visits: number;
        content_downloads: number;
        email_engagement: number;
        demo_request: number;
    }
    interface IEngagementScore {
        phone_answered: number;
        meeting_attended: number;
        proposal_requested: number;
    }
    interface IScoringDetails {
        demographic_score: number;
        behavioral_score: number;
        engagement_score: number;
        config_version: number;
        config_id: number;
    }
    interface IAssignmentDetails {
        location_score: number;
        industry_expertise_score: number;
        workload_score: number;
        total_assignment_score: number;
    }
    interface ICreate {
        companyId?: string;
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
        status?: LEAD_STATUS;
        source?: string;
        company_size?: number;
        decision_maker_level?: DECISION_MAKER_LEVEL;
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
        assignment_rules?: string;
        need_score?: string;
        timeline_score?: string;
    }
    interface IUpdate extends Partial<ICreate> {
        id: number | string;
        updatedBy?: number;
        total_score?: number;
        score_classification?: DEAL_CLASSIFICATION;
        scoring_details?: IScoringDetails;
        assignment_details?: IAssignmentDetails;
    }
    interface IResponse extends BaseResponse {
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
        score_classification?: DEAL_CLASSIFICATION | null;
        total_score: number | string | null;
        priority?: DEAL_AVAILABLE_PRIORITIES | string | null;
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
        createdBy?: number | string | null;
        updatedBy?: number | string | null;
        deal_id?: number | string | null;
        competitors?: string | null;
        description_detail?: string | null;
        assignment_rules?: string | null;
        need_score?: string | null;
        timeline_score?: string | null;
    }
    interface IFindByClassification {
        classification: string;
        industry?: string;
        team_id?: number;
        limit?: number;
        offset?: number;
    }
    interface IFindUnassigned {
        industry?: string;
        classification?: string;
        limit?: number;
        offset?: number;
    }
    interface IAssignTeam {
        lead_id: number;
        team_id: number;
        assigned_by: number;
    }
    interface IAssignUser {
        lead_id: number;
        user_id: number;
        assigned_by: number;
    }
    interface IAutoAssign {
        lead_id: number;
        assigned_by: number;
    }
    interface IUpdateScore {
        lead_id: number;
        updated_by: number;
        scoring_details?: IScoringDetails;
        total_score?: number;
        score_classification?: string;
    }
    interface IFindFollowUpToday {
        team_id?: number;
        user_id?: number;
        limit?: number;
        offset?: number;
    }
    interface IImport {
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
        }>;
        user_id: number;
        options?: {
            skip_duplicates?: boolean;
            update_existing?: boolean;
            default_team_id?: number;
            default_assigned_user_id?: number;
        };
    }
    interface IImportResult {
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
    interface IAutoAssignResult {
        team_id: number | string | null;
        user_id: number | string | null;
        assignment_details: IAssignmentDetails;
        scoring_details?: IScoringDetails;
    }
    interface IAnalyticsScoringResult {
        total_leads: number | string;
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
    }
    interface IAnalyticsAssignmentResult {
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
    interface IBANTScore {
        budget: IBANTBudgetScore;
        authority: IBANTAuthorityScore;
        need: IBANTNeedScore;
        timeline: IBANTTimelineScore;
        overall: IBANTOverallScore;
    }
    interface IBANTBudgetScore {
        score: number;
        status: 'excellent' | 'good' | 'fair' | 'poor' | 'unknown';
        value: number;
        range: string;
        description: string;
    }
    interface IBANTAuthorityScore {
        score: number;
        status: 'excellent' | 'good' | 'fair' | 'poor' | 'unknown';
        level: string;
        description: string;
    }
    interface IBANTNeedScore {
        score: number;
        status: 'excellent' | 'good' | 'fair' | 'poor' | 'unknown';
        urgency: string;
        engagement_level: string;
        description: string;
    }
    interface IBANTTimelineScore {
        score: number;
        status: 'excellent' | 'good' | 'fair' | 'poor' | 'unknown';
        urgency: string;
        days_until_follow_up: number;
        description: string;
    }
    interface IBANTOverallScore {
        total_score: number;
        status: 'excellent' | 'good' | 'fair' | 'poor';
        classification: string;
        recommendation: string;
    }
    interface IBANTQuickAction {
        type: string;
        title: string;
        description: string;
        priority: string;
    }
    interface IBANTSummary {
        lead_id: number;
        lead_name: string;
        company_name?: string;
        bant_score: IBANTScore;
        quick_actions: IBANTQuickAction[];
        next_steps: string[];
    }
    interface IBANTAnalytics {
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
    interface IBANTFollowUpUrgentLead extends IBANTSummary {
        urgency_reason: string;
    }
    interface IBANTFollowUpUrgentResult {
        total_urgent: number | string;
        leads: IBANTFollowUpUrgentLead[];
    }
}

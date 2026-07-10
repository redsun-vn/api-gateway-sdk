import { tags } from 'typia';
export declare namespace ICrmTeam {
    export interface ITeamQuery {
        id: string;
    }
    export interface ITeamResponse {
        id: number | string;
        shop_id: number | string;
        name: string;
        description: string | null;
        active: boolean;
        sequence: number;
        can_create_lead: boolean;
        team_leader_id: number | string | null;
        default_pipeline_id: number | string | null;
        member_ids?: Array<number | string>;
        created_at: Date | string;
        updated_at: Date | string;
    }
    export interface IListResponse {
        items: ITeamResponse[];
        total: number;
    }
    export interface IListQuery {
        active?: boolean;
        q?: string & tags.MaxLength<255>;
    }
    export interface IFindAllInput {
        shop_id: number | string;
        query?: IListQuery;
    }
    export interface IFindOneInput {
        id: number | string;
        shop_id: number | string;
    }
    export interface ICreateInput {
        shop_id: number | string;
        name: string & tags.MaxLength<255>;
        description?: string | null;
        active?: boolean;
        sequence?: number;
        can_create_lead?: boolean;
        team_leader_id?: number | string | null;
        default_pipeline_id?: number | string | null;
    }
    export type ICreateRequest = Omit<ICreateInput, 'shop_id'>;
    export interface IUpdateInput {
        id: number | string;
        shop_id: number | string;
        name?: string & tags.MaxLength<255>;
        description?: string | null;
        active?: boolean;
        sequence?: number;
        can_create_lead?: boolean;
        team_leader_id?: number | string | null;
        default_pipeline_id?: number | string | null;
    }
    export type IUpdateRequest = Omit<IUpdateInput, 'shop_id'>;
    export interface IDeleteInput {
        id: number | string;
        shop_id: number | string;
    }
    export interface IDeleteQuery {
        id: string;
    }
    export interface IDeleteResponse {
        id: number | string;
        deleted: boolean;
    }
    export interface IMembersUpdateInput {
        team_id: number | string;
        shop_id: number | string;
        staff_ids: Array<number | string>;
    }
    export type IMembersUpdateRequest = Omit<IMembersUpdateInput, 'shop_id'>;
    export interface IMembersResponse {
        team_id: number | string;
        staff_ids: Array<number | string>;
    }
    export interface IFindByStaffInput {
        shop_id: number | string;
        staff_id: number | string;
    }
    export interface IDashboardDateRange {
        from: string;
        to: string;
    }
    export interface IDashboardSummaryInput {
        shop_id: number | string;
        staff_id: number | string;
        date_range?: IDashboardDateRange;
        all_teams?: boolean;
    }
    export interface IWeeklyBucket {
        week_start: string;
        count: number;
    }
    export interface IDashboardCard {
        team_id: number | string;
        name: string;
        open_opportunity_count: number;
        expected_revenue_sum: number;
        weekly_new_opportunities: IWeeklyBucket[];
        default_pipeline_id: number | string | null;
        can_create_lead: boolean;
    }
    export interface IDashboardQuery {
        all_teams?: boolean;
        from?: string;
        to?: string;
    }
    export interface IDashboardSummaryResponse {
        cards: IDashboardCard[];
    }
    export interface ITeamAssignmentConfig {
        auto_reassign_enabled?: boolean;
        exclude_staff_ids?: number[];
        exclude_group_ids?: number[];
        allow_staff_ids?: number[];
        allow_group_ids?: number[];
        fallback_owner_id?: number | null;
        routing_strategy?: 'round_robin' | 'weighted';
        routing_weights?: {
            performance?: number;
            load?: number;
            quota_headroom?: number;
        };
        min_share_pct?: number;
    }
    export interface ISlaConfig {
        response_hours?: number;
        escalation_hours?: number;
        warning_pct?: number;
        priority_multipliers?: Record<string, number>;
    }
    export interface ITeamConfig {
        assignment?: ITeamAssignmentConfig;
        sla?: ISlaConfig;
    }
    type TMergePatch<T> = {
        [K in keyof T]?: T[K] | null;
    };
    export interface ITeamConfigPatch {
        assignment?: TMergePatch<ITeamAssignmentConfig> | null;
        sla?: TMergePatch<ISlaConfig> | null;
    }
    export interface IEffectiveTeamConfig {
        assignment: ITeamAssignmentConfig;
        sla: ISlaConfig;
    }
    export interface IEffectiveTeamConfigQuery {
        id: string;
    }
    export interface IEffectiveTeamConfigResponse {
        team_id: number | string;
        shop_id: number | string;
        effective: IEffectiveTeamConfig;
        team_delta: ITeamConfig | null;
    }
    export interface IConfigGetEffectiveInput {
        team_id: number | string;
        shop_id: number | string;
    }
    export interface IConfigUpdateInput {
        team_id: number | string;
        shop_id: number | string;
        patch: ITeamConfigPatch;
    }
    export interface IConfigUpdateRequest {
        team_id: number | string;
        patch: ITeamConfigPatch;
    }
    export {};
}

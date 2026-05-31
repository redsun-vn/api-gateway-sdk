export type KpiTargetAssigneeType = 'shop' | 'branch' | 'department' | 'staff';
export type KpiTargetStatus = 'draft' | 'active' | 'closed';
export type KpiTargetAllocationMode = 'equal' | 'weighted' | 'manual';
export interface IKpiTargetCreate {
    kpi_id: string;
    period: string;
    period_start: string;
    period_end: string;
    assignee_type: KpiTargetAssigneeType;
    assignee_id?: number | null;
    parent_id?: number | null;
    target_value: number;
    currency?: string;
}
export interface IKpiTargetUpdate {
    target_value?: number;
    status?: KpiTargetStatus;
    period_start?: string;
    period_end?: string;
}
export interface IKpiTargetCascadeChild {
    assignee_type: KpiTargetAssigneeType;
    assignee_id: number;
    pct?: number;
    value?: number;
    weight?: number;
}
export interface IKpiTargetCascadeApply {
    mode: KpiTargetAllocationMode;
    level: 'branch' | 'department' | 'staff';
    children: IKpiTargetCascadeChild[];
}
export interface IKpiTargetResponse {
    id: number;
    shop_id: number;
    kpi_id: string;
    period: string;
    period_start: string;
    period_end: string;
    assignee_type: KpiTargetAssigneeType;
    assignee_id: number | null;
    parent_id: number | null;
    target_value: string;
    currency: string;
    allocation_pct: string | null;
    status: KpiTargetStatus;
    resolved_staff_ids: number[] | null;
    resolved_at: string | null;
    created_at: string;
    updated_at: string;
}
export interface IKpiTargetProgress {
    target_id: number;
    kpi_id: string;
    target_value: string;
    actual_value: string;
    achievement_pct: number;
    staff_count: number;
    computed_at: string;
    cached: boolean;
}
export interface IKpiTargetLeaderboardRow {
    assignee_id: number;
    assignee_name?: string;
    actual_value: string;
    target_value: string;
    achievement_pct: number;
    rank: number;
}
export interface IKpiTargetDepartmentNode {
    id: number;
    name: string;
    parent_id: number | null;
    active: boolean;
    children: IKpiTargetDepartmentNode[];
}
export interface IKpiTargetHierarchyOptions {
    branches: Array<{
        id: number;
        name: string;
    }>;
    departments: IKpiTargetDepartmentNode[];
    staff: Array<{
        id: number;
        name: string;
        department_id: number | null;
        branch_ids: number[];
    }>;
}
export interface IKpiTargetFindAllQuery {
    kpi_id?: string;
    period?: string;
    assignee_type?: string;
    status?: string;
    page?: number;
    limit?: number;
}
export interface IKpiTargetLeaderboardQuery {
    kpi_id: string;
    period: string;
}
export interface IKpiTargetFindAllResponse {
    items: IKpiTargetResponse[];
    total: number;
}

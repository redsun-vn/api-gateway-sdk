import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { SaleOrderApprovalEventType, SaleOrderApprovalStatus, SaleOrderApprovalTierStatus } from '../../enum';
export declare namespace ISaleOrderApproval {
    type MatchedRule = 'discount_pct' | 'discount_amount' | 'order_amount';
    interface ITriggerConfig {
        scope: 'header';
        discount_pct?: (number & tags.Minimum<0> & tags.Maximum<100>) | null;
        discount_amount?: (number & tags.Minimum<0>) | null;
        order_amount?: (number & tags.Minimum<0>) | null;
    }
    interface ILevelConfig {
        sla_hours: number & tags.Minimum<0>;
    }
    interface IApproveBody {
        note?: string;
    }
    interface IRejectBody {
        reason?: string;
    }
    interface IInboxQuery {
        status?: SaleOrderApprovalStatus;
        page?: number & tags.Minimum<1>;
        limit?: number & tags.Minimum<1> & tags.Maximum<100>;
    }
    interface ISnapshot {
        total: number;
        discountTotal: number;
        subTotal: number;
        discountPct: number;
        matchedRules: MatchedRule[];
    }
    interface ITier {
        id: number | string;
        approval_id: number | string;
        shop_id: number | string;
        tier_index: number;
        approver_staff_id: number | string;
        sla_hours: number | string;
        status: SaleOrderApprovalTierStatus;
        approved_by: number | string | null;
        approved_at: Date | string | null;
    }
    interface IEvent {
        id: number | string;
        entity_id: number | string;
        shop_id: number | string;
        type: SaleOrderApprovalEventType;
        tier: number | null;
        threshold: string | null;
        actor_id: number | string | null;
        payload: Record<string, unknown> | null;
        createdAt?: Date | string;
    }
    interface IResponse extends BaseResponse {
        sale_order_id: number | string;
        shop_id: number | string;
        status: SaleOrderApprovalStatus;
        current_tier: number | string;
        total_tiers: number | string;
        snapshot: ISnapshot;
        submitted_by: number | string;
        submitted_at: Date | string;
        sla_deadline_at: Date | string | null;
        sla_priority: string | null;
        escalated_level: number | string;
        decided_at: Date | string | null;
        decided_by: number | string | null;
        tiers?: ITier[];
        events?: IEvent[];
        sale_order_code?: string | null;
        my_tier_index?: string;
        actionable?: boolean;
    }
    interface IListResponse {
        items: IResponse[];
        total: number;
        page: number;
        limit: number;
        actionable_total?: number;
    }
    interface IConfigResponse {
        id?: number | string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        shop_id: number | string;
        enabled: boolean;
        trigger: ITriggerConfig | null;
        levels: ILevelConfig[];
        max_levels: number | string;
        warning_pct: number | string;
        business_hours: Record<string, unknown> | null;
        feature_activated_at: Date | string | null;
    }
    interface IConfigUpsertBody {
        enabled: boolean;
        trigger?: ITriggerConfig | null;
        levels?: ILevelConfig[];
        max_levels?: number & tags.Minimum<1> & tags.Maximum<10>;
        warning_pct?: number & tags.ExclusiveMinimum<0> & tags.Maximum<1>;
        business_hours?: Record<string, unknown> | null;
    }
}

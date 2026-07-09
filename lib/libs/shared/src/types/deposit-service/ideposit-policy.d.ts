import { BaseResponse } from '../common.type';
export declare namespace IDepositPolicy {
    enum ScopeType {
        SHOP = "shop",
        RESOURCE_TYPE = "resource_type",
        RESOURCE = "resource",
        SERVICE_CATEGORY = "service_category",
        TIME_WINDOW = "time_window"
    }
    enum RequiredWhen {
        ALWAYS = "always",
        NEVER = "never",
        ADVANCE_ONLY = "advance_only",
        PEAK_ONLY = "peak_only",
        CUSTOMER_TIER = "customer_tier"
    }
    enum Basis {
        EXPECTED_REVENUE = "expected_revenue",
        FIRST_NIGHT = "first_night",
        PER_NIGHT = "per_night",
        FULL_STAY = "full_stay",
        FIXED = "fixed",
        PERCENTAGE = "percentage",
        PER_SEAT = "per_seat",
        TIERED = "tiered"
    }
    enum NoShowAction {
        FORFEIT_FULL = "forfeit_full",
        FORFEIT_PARTIAL = "forfeit_partial",
        REFUND_FULL = "refund_full",
        CHARGE_FIRST_NIGHT = "charge_first_night"
    }
    interface ForfeitTier {
        hours_before_start_gte: number;
        refund_pct: number;
    }
    interface ForfeitRules {
        tiers: ForfeitTier[];
        after_start_refund_pct?: number;
        allow_credit_instead?: boolean;
    }
    interface TieredRule {
        min: number;
        max: number | null;
        amount: number;
    }
    interface TieredRules {
        based_on?: string;
        tiers: TieredRule[];
    }
    interface ICreate {
        name: string;
        scope_type: ScopeType;
        scope_id?: string | number;
        priority?: number;
        required_when?: RequiredWhen;
        advance_threshold_hours?: number;
        customer_tier_min?: string;
        applies_to_kind?: 'booking' | 'security' | 'prepayment';
        basis?: Basis;
        fixed_amount?: number;
        percentage?: number;
        per_seat_amount?: number;
        per_night_amount?: number;
        tiered_rules?: TieredRules;
        min_amount?: number;
        max_amount?: number;
        rounding_unit?: number;
        payment_window_minutes?: number;
        forfeit_rules: ForfeitRules;
        no_show_grace_minutes?: number;
        no_show_action?: NoShowAction;
        no_show_forfeit_pct?: number;
        currency?: string;
        active?: boolean;
        effective_from?: string;
        effective_to?: string;
    }
    interface IUpdate extends Partial<ICreate> {
    }
    interface IResolve {
        kind?: 'booking' | 'security' | 'prepayment';
        policy_id?: string | number;
        expected_revenue?: number;
        nights?: number;
        first_night_rate?: number;
        party_size?: number;
        start_time?: string;
        end_time?: string;
        resource_id?: string | number;
        resource_type_id?: string | number;
        service_category_ids?: string | number[];
        customer_tier?: string;
    }
    interface IPolicyResponse extends BaseResponse {
        name: string;
        scope_type: ScopeType;
        scope_id: string | number | null;
        priority: number;
        required_when: RequiredWhen;
        advance_threshold_hours: number | null;
        customer_tier_min: string | null;
        applies_to_kind: string;
        basis: Basis;
        fixed_amount: string | number | null;
        percentage: string | number | null;
        per_seat_amount: string | number | null;
        per_night_amount: string | number | null;
        tiered_rules: TieredRules | null;
        min_amount: string | number | null;
        max_amount: string | number | null;
        rounding_unit: number;
        payment_window_minutes: number;
        forfeit_rules: ForfeitRules;
        no_show_grace_minutes: number;
        no_show_action: NoShowAction;
        no_show_forfeit_pct: string | number | null;
        currency: string;
        active: boolean;
        effective_from: string | null;
        effective_to: string | null;
        version: number;
    }
    interface IResolveResponse {
        policy: IPolicyResponse;
        required: boolean;
        amount: number;
        breakdown: Record<string, unknown> | null;
    }
}

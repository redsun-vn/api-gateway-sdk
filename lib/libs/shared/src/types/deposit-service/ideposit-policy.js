"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDepositPolicy = void 0;
var IDepositPolicy;
(function (IDepositPolicy) {
    let ScopeType;
    (function (ScopeType) {
        ScopeType["SHOP"] = "shop";
        ScopeType["ROOM_TYPE"] = "room_type";
        ScopeType["ROOM"] = "room";
        ScopeType["SERVICE_CATEGORY"] = "service_category";
        ScopeType["TIME_WINDOW"] = "time_window";
    })(ScopeType = IDepositPolicy.ScopeType || (IDepositPolicy.ScopeType = {}));
    let RequiredWhen;
    (function (RequiredWhen) {
        RequiredWhen["ALWAYS"] = "always";
        RequiredWhen["NEVER"] = "never";
        RequiredWhen["ADVANCE_ONLY"] = "advance_only";
        RequiredWhen["PEAK_ONLY"] = "peak_only";
        RequiredWhen["CUSTOMER_TIER"] = "customer_tier";
    })(RequiredWhen = IDepositPolicy.RequiredWhen || (IDepositPolicy.RequiredWhen = {}));
    let Basis;
    (function (Basis) {
        Basis["EXPECTED_REVENUE"] = "expected_revenue";
        Basis["FIRST_NIGHT"] = "first_night";
        Basis["PER_NIGHT"] = "per_night";
        Basis["FULL_STAY"] = "full_stay";
        Basis["FIXED"] = "fixed";
        Basis["PERCENTAGE"] = "percentage";
        Basis["PER_SEAT"] = "per_seat";
        Basis["TIERED"] = "tiered";
    })(Basis = IDepositPolicy.Basis || (IDepositPolicy.Basis = {}));
    let NoShowAction;
    (function (NoShowAction) {
        NoShowAction["FORFEIT_FULL"] = "forfeit_full";
        NoShowAction["FORFEIT_PARTIAL"] = "forfeit_partial";
        NoShowAction["REFUND_FULL"] = "refund_full";
        NoShowAction["CHARGE_FIRST_NIGHT"] = "charge_first_night";
    })(NoShowAction = IDepositPolicy.NoShowAction || (IDepositPolicy.NoShowAction = {}));
})(IDepositPolicy || (exports.IDepositPolicy = IDepositPolicy = {}));
//# sourceMappingURL=ideposit-policy.js.map
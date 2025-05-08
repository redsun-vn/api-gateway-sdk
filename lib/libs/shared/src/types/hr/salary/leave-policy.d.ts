import { BaseResponse } from '../../common.type';
export declare namespace ILeavePolicy {
    interface ILeavePolicyResponse extends BaseResponse {
        shop_id: number | string;
        active: boolean;
        standard_days_per_year: number | string;
        allow_carry_forward: boolean;
        max_carry_forward_days: number | string;
        carry_forward_expiry_months: number | string;
        progressive_leave: boolean;
        progressive_rules: ILeavePolicyProgressiveRule[] | null;
    }
    interface ILeavePolicyProgressiveRule {
        years_of_service: number | string;
        additional_days: number | string;
    }
    interface ICreateLeavePolicy {
        shop_id: number;
        active?: boolean;
        standard_days_per_year?: number;
        allow_carry_forward?: boolean;
        max_carry_forward_days?: number;
        carry_forward_expiry_months?: number;
        progressive_leave?: boolean;
        progressive_rules?: ILeavePolicyProgressiveRule[];
    }
    interface ICreateLeavePolicyRequest extends Omit<ICreateLeavePolicy, 'shop_id'> {
        active?: boolean;
    }
}

import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export declare namespace ILoyaltyRuleProduct {
    interface ILoyaltyRuleProductCreate {
        product_id: number & tags.Type<'uint32'>;
        variant_id: number & tags.Type<'uint32'>;
    }
    interface ILoyaltyRuleProductResponse extends BaseResponse {
        rule_id: string | number;
        product_id: string | number;
        variant_id: string | number;
    }
}

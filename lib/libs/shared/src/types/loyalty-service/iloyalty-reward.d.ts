import { tags } from 'typia';
import { ILoyaltyRewardProduct } from './iloyalty-reward-product';
import { BaseResponse } from '../common.type';
import { LOYALTY_REWARD_DISCOUNT_APPLICABILITY_ENUM, LOYALTY_REWARD_DISCOUNT_MODE_ENUM, LOYALTY_REWARD_TYPE_ENUM } from '../../enum/loyalty-service';
export declare namespace ILoyaltyReward {
    interface ILoyaltyRewardCreate {
        program_id?: number & tags.Type<'uint64'>;
        active?: boolean;
        description?: string;
        rewardType: string & LOYALTY_REWARD_TYPE_ENUM;
        discount?: number;
        discountMode?: string & LOYALTY_REWARD_DISCOUNT_MODE_ENUM;
        discountApplicability?: string & LOYALTY_REWARD_DISCOUNT_APPLICABILITY_ENUM;
        discount_product_category_id?: number & tags.Type<'uint64'>;
        discount_product_tag_id?: number & tags.Type<'uint64'>;
        discountMaxAmount?: number;
        discount_line_product_id?: number & tags.Type<'uint64'>;
        reward_product_id?: number & tags.Type<'uint64'>;
        reward_product_tag_id?: number & tags.Type<'uint64'>;
        rewardProductQty?: number;
        requiredPoints?: number;
        rewardProducts?: ILoyaltyRewardProduct.ILoyaltyRewardProductCreate[] | null;
    }
    interface ILoyaltyRewardUpdate extends Omit<Partial<ILoyaltyRewardCreate>, 'program_id' | 'rewardType' | 'rewardProducts'> {
    }
    interface ILoyaltyRewardResponse extends BaseResponse {
        shop_id: number | string | null;
        active: boolean;
        program_id: number | string;
        description: string;
        rewardType: string;
        discount: number;
        discountMode: string;
        discountApplicability?: string;
        discount_product_category_id: number | string | null;
        discount_product_tag_id: number | string | null;
        discountMaxAmount: number | string | null;
        discount_line_product_id: number | string | null;
        reward_product_id: number | string | null;
        reward_product_tag_id: number | string | null;
        rewardProductQty: number | string | null;
        requiredPoints: number | string | null;
        rewardProducts?: ILoyaltyRewardProduct.ILoyaltyRewardProductResponse[] | null;
    }
}

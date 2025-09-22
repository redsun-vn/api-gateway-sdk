/* eslint-disable @typescript-eslint/no-namespace */

import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { ILoyaltyRuleProduct } from './iloyalty-rule-product';
import {
	LOYALTY_RULE_MODE_ENUM,
	LOYALTY_RULE_REWARD_POINT_MODE_ENUM,
	LOYALTY_RULE_TAX_MODE_ENUM,
} from '../../enum/loyalty-service';

export namespace ILoyaltyRule {
	export interface ILoyaltyRuleCreate {
		program_id?: number & tags.Type<'uint64'>;
		active?: boolean;
		code?: string;
		product_category_id?: number & tags.Type<'uint64'>;
		product_tag_id?: number & tags.Type<'uint64'>;
		mode?: string & LOYALTY_RULE_MODE_ENUM;
		rewardPointMode?: string & LOYALTY_RULE_REWARD_POINT_MODE_ENUM;
		minimunAmountTaxMode?: string & LOYALTY_RULE_TAX_MODE_ENUM;
		minimumQty?: number;
		minimumAmount?: number;
		rewardPointAmount?: number;
		ruleProducts?: ILoyaltyRuleProduct.ILoyaltyRuleProductCreate[] | null;
	}

	export interface ILoyaltyRuleUpdate
		extends Omit<Partial<ILoyaltyRuleCreate>, 'program_id' | 'ruleProducts'> {}

	export interface ILoyaltyRuleResponse extends BaseResponse {
		active: boolean;
		code?: string | null;
		shop_id: number | string | null;
		program_id: number | string;
		product_category_id?: number | string | null;
		product_tag_id?: number | string | null;
		mode: string | null;
		rewardPointMode: string;
		minimunAmountTaxMode: string;
		minimumQty: number | string | null;
		minimumAmount: number | string | null;
		rewardPointAmount: number | string | null;
		ruleProducts?: ILoyaltyRuleProduct.ILoyaltyRuleProductResponse[] | null;
	}
}

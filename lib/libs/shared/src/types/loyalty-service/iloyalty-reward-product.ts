/* eslint-disable @typescript-eslint/no-namespace */

import { tags } from 'typia';
import { BaseResponse } from '../common.type';

export namespace ILoyaltyRewardProduct {
	export interface ILoyaltyRewardProductCreate {
		product_id: number & tags.Type<'uint64'>;
		variant_id: number & tags.Type<'uint64'>;
	}

	export interface ILoyaltyRewardProductResponse extends BaseResponse {
		reward_id: string | number;
		product_id: string | number;
		variant_id: string | number;
	}
}

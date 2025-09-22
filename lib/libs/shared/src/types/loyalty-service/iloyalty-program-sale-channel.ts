/* eslint-disable @typescript-eslint/no-namespace */

import { tags } from 'typia';
import { BaseResponse } from '../common.type';

export namespace ILoyaltyProgramSaleChannel {
	export interface ILoyaltyProgramSaleChannelCreate {
		sale_channel_id: number & tags.Type<'uint64'>;
		program_id: number & tags.Type<'uint64'>;
	}
	export interface ILoyaltyProgramSaleChannelResponse extends BaseResponse {
		sale_channel_id: number | string;
		program_id: number | string;
	}
}

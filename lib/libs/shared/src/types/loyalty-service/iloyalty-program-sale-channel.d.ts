import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export declare namespace ILoyaltyProgramSaleChannel {
    interface ILoyaltyProgramSaleChannelCreate {
        sale_channel_id: number & tags.Type<'uint64'>;
        program_id: number & tags.Type<'uint64'>;
    }
    interface ILoyaltyProgramSaleChannelResponse extends BaseResponse {
        sale_channel_id: number | string;
        program_id: number | string;
    }
}

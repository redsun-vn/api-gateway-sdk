import { ILoyaltyProgramSaleChannel } from './iloyalty-program-sale-channel';
import { ILoyaltyReward } from './iloyalty-reward';
import { ILoyaltyRule } from './iloyalty-rule';
import { BaseResponse } from '../common.type';
import { LOYALTY_PROGRAM_APPLY_ON_ENUM, LOYALTY_PROGRAM_TRIGGER_ENUM, LOYALTY_PROGRAM_TYPE_ENUM } from '../../enum/loyalty-service';
import { tags } from 'typia';
export declare namespace ILoyaltyProgram {
    interface ILoyaltyProgramCreate {
        name: string;
        description?: string;
        startDate?: string & tags.Format<'date-time'>;
        expireDate?: string & tags.Format<'date-time'>;
        limitUsage?: boolean;
        maxUsage?: number;
        programType: string & LOYALTY_PROGRAM_TYPE_ENUM;
        appliesOn?: string & LOYALTY_PROGRAM_APPLY_ON_ENUM;
        trigger: string & LOYALTY_PROGRAM_TRIGGER_ENUM;
        saleChannelIds?: number[] | null;
        rules?: ILoyaltyRule.ILoyaltyRuleCreate[] | null;
        rewards?: ILoyaltyReward.ILoyaltyRewardCreate[] | null;
    }
    interface ILoyaltyProgramUpdate extends Omit<Partial<ILoyaltyProgramCreate>, 'programType' | 'saleChannelIds' | 'rules' | 'rewards'> {
    }
    interface ILoyaltyProgramValidate {
        shop_id: number & tags.Type<'uint32'>;
        order_id: string & tags.Format<'uuid'>;
        couponCode?: string;
    }
    interface ILoyaltyProgramRewardResponse {
        rewards: ILoyaltyReward.ILoyaltyRewardResponse[];
    }
    interface ILoyaltyProgramResponse extends BaseResponse {
        active: boolean;
        shop_id: number | string;
        name: string;
        currencyCode: string;
        sequence: number | string | null;
        trigger: string | null;
        description?: string;
        startDate: string | null;
        expireDate: string | null;
        limitUsage: boolean | null;
        maxUsage: number | null;
        programType: string;
        appliesOn: string;
        saleChannels?: ILoyaltyProgramSaleChannel.ILoyaltyProgramSaleChannelResponse[] | null;
        rules?: ILoyaltyRule.ILoyaltyRuleResponse[] | null;
        rewards?: ILoyaltyReward.ILoyaltyRewardResponse[] | null;
    }
}

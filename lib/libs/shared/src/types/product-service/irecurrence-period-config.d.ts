import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { RecurrencePeriod } from '../../enum';
export declare namespace IRecurrencePeriodConfig {
    interface ICreateDefault {
        shop_id: number & tags.Type<'uint32'>;
    }
    interface IReqCreate {
        name: string;
        period: RecurrencePeriod;
        duration: number;
        active: boolean;
    }
    interface ICreate extends IReqCreate {
        shop_id: number & tags.Type<'uint64'>;
    }
    interface IUpdate {
        name?: string;
        period?: RecurrencePeriod;
        duration?: number;
        active?: boolean;
    }
    interface IResponse extends BaseResponse {
        shop_id: number | string;
        name: string;
        period: RecurrencePeriod | string;
        duration: number | string;
        active: boolean;
    }
}

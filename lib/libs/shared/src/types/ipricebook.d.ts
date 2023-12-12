import { tags } from 'typia';
import { BaseResponse } from './common.type';
export declare namespace IPricebook {
    interface IReqCreatePricebook {
        name: string;
        effectiveAt?: Date & tags.Format<'date-time'>;
        expiredAt?: Date & tags.Format<'date-time'>;
        active: boolean;
        userId?: string;
    }
    interface ICreatePricebook extends IReqCreatePricebook {
        shop_id: number & tags.Type<'uint32'>;
    }
    interface IUpdatePricebook {
        id?: string;
        name?: string;
        effectiveAt?: Date & tags.Format<'date-time'>;
        expiredAt?: Date & tags.Format<'date-time'>;
        active?: boolean;
        userId?: string;
    }
    interface IPricebookResponse extends BaseResponse {
        shop_id: string | number | null;
        name: string;
        active: boolean;
        effectiveAt?: string | null;
        expiredAt?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
    }
    interface IDeletePricebook {
        id: string;
    }
}

import { tags } from 'typia';
import { BaseResponse } from './common.type';
import { IPricebookItem } from './ipricebook-item.type';
import { IPricebookRule } from './ipricebook-rule.type';
export declare namespace IPricebook {
    interface IReqCreatePricebook {
        name: string;
        effectiveAt?: string & tags.Format<'date-time'>;
        expiredAt?: string & tags.Format<'date-time'>;
        active?: boolean;
        userId?: string;
    }
    interface ICreatePricebook extends IReqCreatePricebook {
        shop_id: number & tags.Type<'uint32'>;
    }
    interface IUpdatePricebook {
        id?: string;
        name?: string;
        effectiveAt?: string & tags.Format<'date-time'>;
        expiredAt?: string & tags.Format<'date-time'>;
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
        priceBookItems?: IPricebookItem.IPricebookItemResponse[] | null;
        priceBookRules?: IPricebookRule.IPricebookRuleResponse[] | null;
    }
    interface IDeletePricebook {
        id: string;
    }
}

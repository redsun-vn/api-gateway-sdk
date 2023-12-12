import { tags } from 'typia';
import { BaseResponse } from './common.type';
import { IPricebook } from './ipricebook';
export declare namespace IPricebookRule {
    interface IReqCreatePricebookRule {
        price_book_id: number & tags.Type<'uint32'>;
        referent_id: number & tags.Type<'uint32'>;
        referentType?: string;
        referentValue?: number;
        value?: number;
        effectiveHours?: string;
        daysOfTheWeek?: string;
        active?: boolean;
        type: string;
        stayOn?: string;
        effectiveAt?: Date & tags.Format<'date-time'>;
        expiredAt?: Date & tags.Format<'date-time'>;
        userId?: string;
    }
    interface ICreatePricebookRule extends IReqCreatePricebookRule {
        shop_id: number & tags.Type<'uint32'>;
    }
    interface IUpdatePricebookRule {
        id?: string;
        referentType?: string;
        referentValue?: number;
        value?: number;
        effectiveHours?: string;
        daysOfTheWeek?: string;
        active?: boolean;
        type?: string;
        stayOn?: string;
        effectiveAt?: Date & tags.Format<'date-time'>;
        expiredAt?: Date & tags.Format<'date-time'>;
        userId?: string;
    }
    interface IPricebookRuleResponse extends BaseResponse {
        shop_id: string | number | null;
        referent_id: string | number | null;
        price_book_id?: string | number | null;
        referentType: string;
        referentValue: number;
        value?: number;
        effectiveHours?: string;
        daysOfTheWeek?: string;
        active?: boolean;
        type: string;
        stayOn?: string;
        effectiveAt?: string;
        expiredAt?: string;
        priceBook?: IPricebook.IPricebookResponse;
    }
    interface IDeletePricebookRule {
        id: string;
    }
}

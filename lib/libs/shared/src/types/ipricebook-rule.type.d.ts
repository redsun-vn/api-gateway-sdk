import { tags } from 'typia';
import { BaseResponse } from './common.type';
import { IPricebook } from './ipricebook';
import { PriceBookRuleReferentType, PriceBookRuleStayOn, PriceBookRuleType } from '../enum';
export declare namespace IPricebookRule {
    interface IReqCreatePricebookRule {
        price_book_id: number & tags.Type<'uint32'>;
        referent_id?: number & tags.Type<'uint32'>;
        referentType?: PriceBookRuleReferentType;
        referentValue?: number;
        value?: number;
        effectiveHours?: string;
        daysOfTheWeek?: string;
        active?: boolean;
        type: PriceBookRuleType;
        stayOn?: PriceBookRuleStayOn;
        effectiveAt?: Date & tags.Format<'date-time'>;
        expiredAt?: Date & tags.Format<'date-time'>;
        userId?: string;
    }
    interface ICreatePricebookRule extends IReqCreatePricebookRule {
        shop_id: number & tags.Type<'uint32'>;
    }
    interface IUpdatePricebookRule {
        id?: string;
        referentType?: PriceBookRuleReferentType;
        referentValue?: number;
        value?: number;
        effectiveHours?: string;
        daysOfTheWeek?: string;
        active?: boolean;
        type?: PriceBookRuleType;
        stayOn?: PriceBookRuleStayOn;
        effectiveAt?: Date & tags.Format<'date-time'>;
        expiredAt?: Date & tags.Format<'date-time'>;
        userId?: string;
    }
    interface IPricebookRuleResponse extends BaseResponse {
        shop_id: string | number | null;
        referent_id?: string | number | null;
        price_book_id?: string | number | null;
        referentType: string;
        referentValue?: number | string;
        value?: number | string;
        effectiveHours?: string | null;
        daysOfTheWeek?: string | null;
        active?: boolean;
        type: string;
        stayOn?: string | null;
        effectiveAt?: string | null;
        expiredAt?: string | null;
        priceBook?: IPricebook.IPricebookResponse | null;
    }
    interface IDeletePricebookRule {
        id: string;
    }
}

/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IPricebook } from './ipricebook';
import {
	PriceBookRuleReferentType,
	PriceBookRuleStayOn,
	PriceBookRuleType,
} from '../../enum';

export namespace IPricebookRule {
	export interface IEffectiveHours {
		from: string;
		to: string | null;
	}
	export interface IReqCreatePricebookRule {
		price_book_id: number & tags.Type<'uint64'>;
		referent_id?: number & tags.Type<'uint64'>;
		referentType?: PriceBookRuleReferentType;
		referentValue?: number;
		value?: number;
		recipeFeePercent?: number | null;
		recipeFee?: number | null;
		effectiveHours?: IEffectiveHours[] | null;
		daysOfTheWeek?: string;
		active?: boolean;
		type: PriceBookRuleType;
		stayOn?: PriceBookRuleStayOn;
		effectiveAt?: string & tags.Format<'date-time'>;
		expiredAt?: string & tags.Format<'date-time'>;
		userId?: string;
	}

	export interface ICreatePricebookRule extends IReqCreatePricebookRule {
		shop_id: number & tags.Type<'uint64'>;
	}

	export interface IUpdatePricebookRule {
		id?: string;
		referentType?: PriceBookRuleReferentType;
		referentValue?: number;
		value?: number;
		recipeFeePercent?: number | null;
		recipeFee?: number | null;
		effectiveHours?: IEffectiveHours[] | null;
		daysOfTheWeek?: string;
		active?: boolean;
		type?: PriceBookRuleType;
		stayOn?: PriceBookRuleStayOn;
		effectiveAt?: string & tags.Format<'date-time'>;
		expiredAt?: string & tags.Format<'date-time'>;
		userId?: string;
	}

	export interface IPricebookRuleResponse extends BaseResponse {
		shop_id: string | number | null;
		referent_id?: string | number | null;
		price_book_id?: string | number | null;
		referentType: string;
		referentValue?: number | string;
		value?: number | string;
		recipeFeePercent?: number | string | null;
		recipeFee?: number | string | null;
		effectiveHours?: IEffectiveHours[] | string | null;
		daysOfTheWeek?: string | null;
		active?: boolean;
		type: string;
		stayOn?: string | null;
		effectiveAt?: string | null;
		expiredAt?: string | null;
		priceBook?: IPricebook.IPricebookResponse | null;
	}

	export interface IDeletePricebookRule {
		id: string;
	}
}

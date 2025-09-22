/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IPricebookItem } from './ipricebook-item.type';
import { IPricebookRule } from './ipricebook-rule.type';
import { IProduct } from './iproduct';

export namespace IPricebook {
	export interface IReqCreatePricebook {
		name: string;
		branch_id?: number & tags.Type<'uint64'>;
		department_id?: number & tags.Type<'uint64'>;
		salesChannel?: IProduct.ISalesChannel[];
		effectiveAt?: string & tags.Format<'date-time'>;
		expiredAt?: string & tags.Format<'date-time'>;
		active?: boolean;
		userId?: string;
	}

	export interface ICreatePricebook extends IReqCreatePricebook {
		shop_id: number & tags.Type<'uint64'>;
	}

	export interface IUpdatePricebook {
		id?: string;
		branch_id?: number & tags.Type<'uint64'>;
		department_id?: number & tags.Type<'uint64'>;
		salesChannel?: IProduct.ISalesChannel[];
		name?: string;
		effectiveAt?: string & tags.Format<'date-time'>;
		expiredAt?: string & tags.Format<'date-time'>;
		active?: boolean;
		userId?: string;
	}

	export interface IPricebookResponse extends BaseResponse {
		shop_id: string | number | null;
		branch_id?: string | number | null;
		department_id?: string | number | null;
		salesChannel?: IProduct.ISalesChannel[] | null;
		name: string;
		active: boolean;
		effectiveAt?: string | null;
		expiredAt?: string | null;
		createdBy?: string | null;
		updatedBy?: string | null;
		priceBookItems?: IPricebookItem.IPricebookItemResponse[] | null;
		priceBookRules?: IPricebookRule.IPricebookRuleResponse[] | null;
	}

	export interface IDeletePricebook {
		id: string;
	}
}

/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IProduct } from './iproduct';
import { ICondition } from './icondition';

export namespace ICollection {
	export interface IInputCondition {
		referentType: string;
		referent_id: number & tags.Type<'uint64'>;
		value: string;
	}
	export interface IResponseCondition {
		id: string;
		referentType: string;
		referent_id: string | number | null;
		shop_id: string | number | null;
		value: string;
	}

	export interface IReqCreateCollection {
		image_id?: number & tags.Type<'uint64'>;
		name: string;
		icon?: string;
		active?: boolean;
		htmlContent?: string;
		description?: string;
		salesChannel?: IProduct.ISalesChannel[];
		type: string;
		allowAllConditions: boolean;
		conditions: IInputCondition[];
		userId?: string;
	}

	export interface ICreateCollection extends IReqCreateCollection {
		shop_id: number & tags.Type<'uint64'>;
	}

	export interface IUpdateCollection {
		image_id?: number & tags.Type<'uint64'>;
		icon?: string;
		name?: string;
		active?: boolean;
		htmlContent?: string;
		description?: string;
		salesChannel?: IProduct.ISalesChannel[];
		type?: string;
		allowAllConditions?: boolean;
		conditions?: IInputCondition[];
		userId?: string;
	}

	export interface IDetailCollectionResponse extends BaseResponse {
		name: string;
		shop_id?: string | number | null;
		image_id?: string | number | null;
		icon?: string | undefined | null;
		htmlContent?: string | undefined | null;
		description?: string | null | undefined;
		salesChannel?: IProduct.ISalesChannel[] | null;
		type?: string;
		active?: boolean;
		allowAllConditions?: boolean;
		conditions?: ICondition.IDetailConditionResponse[] | null;
		userId?: string | undefined | null;
		createdBy: string | undefined | null;
		updatedBy: string | undefined | null;
	}
}

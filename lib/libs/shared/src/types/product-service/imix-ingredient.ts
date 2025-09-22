/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { ISelection } from './iselection';
import { IIngredient } from './iingredient';

export namespace IMixIngredient {
	export interface IReqCreateMixIngredient {
		ingredient_id: number & tags.Type<'uint64'>;
		selection_id: number & tags.Type<'uint64'>;
		value?: number;
		userId?: string;
	}

	export interface ICreateMixIngredient extends IReqCreateMixIngredient {
		shop_id: number & tags.Type<'uint64'>;
	}

	export interface IUpdateMixIngredient {
		id?: string;
		value?: number;
		userId?: string;
	}

	export interface IMixIngredientResponse extends BaseResponse {
		shop_id: string | number | null;
		ingredient_id?: string | number | null;
		selection_id?: string | number | null;
		value: string | number | null;
		createdBy: string | undefined | null;
		updatedBy: string | undefined | null;
		selection?: ISelection.ISelectionResponse | null;
		ingredient?: IIngredient.IIngredientResponse | null;
	}
	export interface IDeleteMixIngredient {
		id: string;
	}
}

/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IUomUom } from './iuom-uom';

export namespace IIngredient {
	export interface IReqCreateIngredient {
		uom_uom_id: number & tags.Type<'uint64'>;
		name: string;
		totalInventory?: number | null;
		quantityAvailable?: number | null;
		unitPrice?: number | null;
		expiredAt?: (string & tags.Format<'date-time'>) | null;
		userId?: string;
	}

	export interface ICreateIngredient extends IReqCreateIngredient {
		shop_id: number & tags.Type<'uint64'>;
	}

	export interface IUpdateIngredient {
		id?: string;
		uom_uom_id?: number & tags.Type<'uint64'>;
		name?: string;
		totalInventory?: number | null;
		quantityAvailable?: number | null;
		unitPrice?: number | null;
		expiredAt?: (string & tags.Format<'date-time'>) | null;
		userId?: string;
	}

	export interface IIngredientResponse extends BaseResponse {
		shop_id: string | number | null;
		uom_uom_id?: string | number | null;
		name: string;
		totalInventory?: number | null;
		quantityAvailable?: number | null;
		unitPrice?: string | number | null;
		expiredAt?: string | null;
		createdBy?: string | null;
		updatedBy?: string | null;
		uomUom?: IUomUom.IDetailUomUomResponse | null;
	}

	export interface IDeleteIngredient {
		id: string;
	}
}

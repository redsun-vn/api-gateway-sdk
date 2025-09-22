/* eslint-disable @typescript-eslint/no-namespace */

import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IStockRule } from './istock-rule.type';
import { IWarehouse } from './iwarehouse.type';

export namespace IStockRouter {
	export interface ICreateStockRouter {
		shop_id?: number & tags.Type<'uint64'>;
		stock_rule_id: number & tags.Type<'uint64'>;
		warehouse_id: number & tags.Type<'uint64'>;
		referentType: string;
		referentAction: string;
		active?: boolean;
	}

	export interface IUpdateStockRouter {
		shop_id?: number & tags.Type<'uint64'>;
		referentType?: string;
		referentAction?: string;
		active?: boolean;
	}

	export interface IStockRouterResponse extends BaseResponse {
		shop_id: number | string | null;
		stock_rule_id?: number | string | null;
		warehouse_id?: number | string | null;
		referentType: string;
		referentAction: string;
		action?: boolean | string;
		stockRule?: IStockRule.IStockRuleResponse;
		warehouse?: IWarehouse.IWarehouseResponse;
	}
}

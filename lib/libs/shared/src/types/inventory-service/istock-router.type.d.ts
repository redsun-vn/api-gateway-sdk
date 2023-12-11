import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IStockRule } from './istock-rule.type';
import { IWarehouse } from './iwarehouse.type';
export declare namespace IStockRouter {
    interface ICreateStockRouter {
        shop_id?: number & tags.Type<'uint32'>;
        stock_rule_id: number & tags.Type<'uint32'>;
        warehouse_id: number & tags.Type<'uint32'>;
        referentType: string;
        referentAction: string;
        active?: boolean;
    }
    interface IUpdateStockRouter {
        shop_id?: number & tags.Type<'uint32'>;
        referentType?: string;
        referentAction?: string;
        active?: boolean;
    }
    interface IStockRouterResponse extends BaseResponse {
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

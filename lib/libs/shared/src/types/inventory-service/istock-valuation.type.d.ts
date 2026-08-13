import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { StockValuationReferenceType } from '../../enum/inventory.state';
export declare namespace IStockValuation {
    interface ICreateStockValuationLayer {
        shop_id?: number & tags.Type<'uint64'>;
        variant_id: number & tags.Type<'uint64'>;
        stock_location_id: number & tags.Type<'uint64'>;
        stock_move_id?: number & tags.Type<'uint64'>;
        referenceType: StockValuationReferenceType;
        referenceId?: number & tags.Type<'uint64'>;
        quantity: number;
        unitCost: number;
    }
    interface IStockValuationLayerResponse extends BaseResponse {
        shop_id: number | string | null;
        variant_id: number | string | null;
        stock_location_id: number | string | null;
        stock_move_id: number | string | null;
        referenceType: StockValuationReferenceType;
        referenceId: number | string | null;
        quantity: number | string;
        unitCost: number | string;
        value: number | string;
        remainingQuantity: number | string;
        remainingValue: number | string;
    }
    interface IStockValuationCreatedEvent {
        id: number | string;
        shop_id: number | string;
        variant_id: number | string;
        stock_location_id: number | string;
        referenceType: StockValuationReferenceType;
        referenceId: number | string | null;
        quantity: number | string;
        unitCost: number | string;
        value: number | string;
    }
    interface ISetStockPolicy {
        shop_id?: number & tags.Type<'uint64'>;
        variant_id: number & tags.Type<'uint64'>;
        stock_location_id: number & tags.Type<'uint64'>;
        reorderPoint?: number;
        minQuantity?: number;
        maxQuantity?: number;
    }
    interface ISetStockPolicyBulk {
        shop_id?: number & tags.Type<'uint64'>;
        items: ISetStockPolicy[];
    }
}

import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { StockDestroyState } from '../../enum/inventory.state';
import { IWarehouse } from './iwarehouse.type';
import { IStockLocation } from './istock-location.type';
export declare namespace IStockDestroy {
    interface ICreateStockDestroyLine {
        product_id: number & tags.Type<'uint64'>;
        variant_id: number & tags.Type<'uint64'>;
        uom_uom_id: number & tags.Type<'uint64'>;
        stock_lot_id?: number & tags.Type<'uint64'>;
        barcode?: string;
        quantity: number;
    }
    interface ICreateStockDestroy {
        shop_id?: number & tags.Type<'uint64'>;
        staff_id?: number & tags.Type<'uint64'>;
        warehouse_id: number & tags.Type<'uint64'>;
        stock_location_id: number & tags.Type<'uint64'>;
        code?: string;
        name: string;
        reason: string;
        note?: string;
        destroyDate: string;
        lines: ICreateStockDestroyLine[];
    }
    interface IUpdateStockDestroy {
        id: string;
        name?: string;
        reason?: string;
        note?: string;
        destroyDate?: string;
    }
    interface ISubmitStockDestroy {
        id: string;
        staff_id?: number & tags.Type<'uint64'>;
    }
    interface IApproveStockDestroy {
        id: string;
        approver_staff_id?: number & tags.Type<'uint64'>;
    }
    interface IRejectStockDestroy {
        id: string;
        approver_staff_id?: number & tags.Type<'uint64'>;
        rejectedReason: string;
    }
    interface IExecuteStockDestroy {
        id: string;
        staff_id?: number & tags.Type<'uint64'>;
    }
    interface IRejectStockDestroyBody {
        rejectedReason: string;
    }
    interface IStockDestroyLineResponse extends BaseResponse {
        shop_id: number | string | null;
        product_id: number | string | null;
        variant_id: number | string | null;
        uom_uom_id: number | string | null;
        stock_destroy_id: number | string | null;
        stock_lot_id: number | string | null;
        barcode: string;
        quantity: number | string;
        unitCost: number | string;
        amount: number | string;
    }
    interface IStockDestroyResponse extends BaseResponse {
        shop_id: number | string | null;
        staff_id: number | string | null;
        approver_staff_id: number | string | null;
        warehouse_id: number | string | null;
        stock_location_id: number | string | null;
        stock_picking_id: number | string | null;
        code: string;
        name: string;
        reason: string;
        rejectedReason: string | null;
        note: string;
        totalLine: number | string;
        totalAmount: number | string;
        state: StockDestroyState;
        destroyDate: Date | string;
        approvedAt: Date | string | null;
        warehouse?: IWarehouse.IWarehouseResponse | null;
        location?: IStockLocation.IStockLocationResponse | null;
        lines?: IStockDestroyLineResponse[];
    }
}

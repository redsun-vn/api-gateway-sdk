import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { GoodsReceiptState } from '../../enum/inventory.state';
import { IWarehouse } from './iwarehouse.type';
import { IStockLocation } from './istock-location.type';
export declare namespace IGoodsReceipt {
    interface ICreateGoodsReceiptLine {
        product_id: number & tags.Type<'uint64'>;
        variant_id: number & tags.Type<'uint64'>;
        uom_uom_id: number & tags.Type<'uint64'>;
        stock_lot_id?: number & tags.Type<'uint64'>;
        barcode?: string;
        quantity: number;
        unitCost: number;
        expiryDate?: string;
    }
    interface ICreateGoodsReceipt {
        shop_id?: number & tags.Type<'uint64'>;
        staff_id?: number & tags.Type<'uint64'>;
        supplier_id?: number & tags.Type<'uint64'>;
        warehouse_id: number & tags.Type<'uint64'>;
        stock_location_id: number & tags.Type<'uint64'>;
        code?: string;
        name: string;
        supplierInvoiceNo?: string;
        note?: string;
        receiptDate: string;
        lines: ICreateGoodsReceiptLine[];
    }
    interface IUpdateGoodsReceipt {
        id: string;
        name?: string;
        supplier_id?: number & tags.Type<'uint64'>;
        supplierInvoiceNo?: string;
        note?: string;
        receiptDate?: string;
    }
    interface IReceiveLine {
        id: string;
        receivedQuantity: number;
    }
    interface IReceiveGoodsReceipt {
        id: string;
        staff_id?: number & tags.Type<'uint64'>;
        lines: IReceiveLine[];
    }
    interface IGoodsReceiptLineResponse extends BaseResponse {
        shop_id: number | string | null;
        product_id: number | string | null;
        variant_id: number | string | null;
        uom_uom_id: number | string | null;
        goods_receipt_id: number | string | null;
        stock_lot_id: number | string | null;
        barcode: string;
        quantity: number | string;
        receivedQuantity: number | string;
        unitCost: number | string;
        amount: number | string;
    }
    interface IGoodsReceiptResponse extends BaseResponse {
        shop_id: number | string | null;
        staff_id: number | string | null;
        supplier_id: number | string | null;
        warehouse_id: number | string | null;
        stock_location_id: number | string | null;
        stock_picking_id: number | string | null;
        code: string;
        name: string;
        supplierInvoiceNo: string;
        note: string;
        totalLine: number | string;
        totalAmount: number | string;
        state: GoodsReceiptState;
        receiptDate: Date | string;
        warehouse?: IWarehouse.IWarehouseResponse | null;
        location?: IStockLocation.IStockLocationResponse | null;
        lines?: IGoodsReceiptLineResponse[];
    }
}

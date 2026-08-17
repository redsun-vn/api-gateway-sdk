import { tags } from 'typia';
export declare namespace IDailySnapshot {
    interface IDailySnapshotLine {
        variant_id: number | string;
        product_id: number | string | null;
        warehouse_id: number | string | null;
        stock_location_id: number | string;
        openingQuantity: number;
        inQuantity: number;
        outQuantity: number;
        closingQuantity: number;
        reservedQuantity: number;
        averageCost: number;
        closingValue: number;
        minQuantity: number;
        isBelowMinimum: boolean;
    }
    interface IWarehouseTotals {
        warehouse_id: number | null;
        skuCount: number;
        totalQuantity: number;
        totalValue: number;
        belowMinimumCount: number;
    }
    interface ISnapshotTotals {
        skuCount: number;
        totalQuantity: number;
        totalValue: number;
        belowMinimumCount: number;
        negativeCount: number;
    }
    interface IDailySnapshotResponse {
        snapshotDate: string;
        hasSnapshot: boolean;
        warehouses: IWarehouseTotals[];
        lines: IDailySnapshotLine[];
        totals: ISnapshotTotals;
    }
    interface ICompareResponse {
        from: IDailySnapshotResponse;
        to: IDailySnapshotResponse;
        quantityDelta: number;
        valueDelta: number;
    }
    interface IBuildResponse {
        snapshotDate: string;
        rowCount: number;
    }
    interface IDailySnapshotQuery {
        date?: string;
        warehouse_id?: number & tags.Type<'uint64'>;
        belowMinimumOnly?: boolean;
    }
    interface ICompareQuery {
        fromDate: string;
        toDate: string;
        warehouse_id?: number & tags.Type<'uint64'>;
    }
    interface IBuildBody {
        date?: string;
    }
}

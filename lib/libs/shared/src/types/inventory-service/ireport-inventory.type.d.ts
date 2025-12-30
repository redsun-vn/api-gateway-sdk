import { tags } from 'typia';
export declare namespace IReport {
    interface IReportFilterRequest {
        shop_id: number & tags.Type<'uint32'>;
        warehouse_id?: number & tags.Type<'uint32'>;
        stock_location_id?: number & tags.Type<'uint32'>;
        start_date?: string;
        end_date?: string;
        category_id?: number & tags.Type<'uint32'>;
        product_id?: number & tags.Type<'uint32'>;
        variant_id?: number & tags.Type<'uint32'>;
    }
    interface IInventoryOverviewRequest {
        shop_id: number & tags.Type<'uint32'>;
        warehouse_id?: number & tags.Type<'uint32'>;
    }
    interface IInventoryMovementRequest {
        shop_id: number & tags.Type<'uint32'>;
        warehouse_id?: number & tags.Type<'uint32'>;
        startDate: string;
        endDate: string;
        groupBy?: 'day' | 'week' | 'month';
    }
    interface IStockDetailRequest {
        shop_id: number & tags.Type<'uint32'>;
        warehouse_id?: number & tags.Type<'uint32'>;
        stock_location_id?: number & tags.Type<'uint32'>;
        category_id?: number & tags.Type<'uint32'>;
        status?: StockStatus;
        page?: number & tags.Type<'uint32'>;
        limit?: number & tags.Type<'uint32'>;
        search?: string;
    }
    interface IReorderRecommendationRequest {
        shop_id: number & tags.Type<'uint32'>;
        warehouse_id?: number & tags.Type<'uint32'>;
    }
    interface ICostAnalysisRequest {
        shop_id: number & tags.Type<'uint32'>;
        warehouse_id?: number & tags.Type<'uint32'>;
        start_date?: string;
        end_date?: string;
    }
    interface IInventoryTurnoverRequest {
        shop_id: number & tags.Type<'uint32'>;
        warehouse_id?: number & tags.Type<'uint32'>;
        start_date: string;
        end_date: string;
    }
    enum StockStatus {
        SUFFICIENT = "sufficient",
        LOW = "low",
        RUNNING_OUT = "running_out",
        OUT_OF_STOCK = "out_of_stock"
    }
    enum PriorityLevel {
        HIGH = "high",
        MEDIUM = "medium",
        LOW = "low"
    }
    interface IInventoryOverviewResponse {
        totalStock: {
            totalProducts: number;
            totalValue: number;
            currency: string;
        };
        lowStockAlert: {
            count: number;
            products: ILowStockProduct[];
        };
        pendingReceipts: {
            orderCount: number;
            totalValue: number;
            currency: string;
        };
        inventoryCycle: {
            averageDays: number;
            turnoverRate: number;
        };
    }
    interface ILowStockProduct {
        id: number | string;
        product_id: number | string;
        variant_id: number | string;
        currentQuantity: number;
        minQuantity: number;
        unit_id: number | string;
    }
    interface IStockStatusResponse {
        distribution: IStockStatusDistribution[];
        summary: {
            total: number;
            sufficient: number;
            low: number;
            runningOut: number;
            outOfStock: number;
        };
    }
    interface IStockStatusDistribution {
        status: StockStatus;
        label: string;
        count: number;
        percentage: number;
        color: string;
    }
    interface IInventoryMovementResponse {
        movements: IMovementData[];
        summary: {
            totalInbound: number;
            totalOutbound: number;
            netChange: number;
        };
    }
    interface IMovementData {
        period: string;
        inbound: number;
        outbound: number;
        netChange: number;
    }
    interface IStockDetailResponse {
        items: IStockDetailItem[];
        meta: {
            totalItems: number;
            itemCount: number;
            itemsPerPage: number;
            totalPages: number;
            currentPage: number;
        };
    }
    interface IStockDetailItem {
        id: number | string;
        product_id: number | string;
        variant_id: number | string;
        name: string;
        sku?: string;
        barcode?: string;
        category?: string;
        categoryId?: number | string;
        currentQuantity: number;
        minQuantity: number;
        maxQuantity?: number;
        uom_uom_id: number | string;
        status: StockStatus;
        statusLabel: string;
        value: number;
        currency: string;
        location?: {
            id: number | string;
            name: string;
            warehouseName?: string;
        };
        lastUpdated?: string;
        imageUrl?: string;
    }
    interface ICostAnalysisResponse {
        breakdown: ICostBreakdownItem[];
        total: number;
        currency: string;
    }
    interface ICostBreakdownItem {
        category: string;
        label: string;
        value: number;
        percentage: number;
        color: string;
    }
    interface IReorderRecommendationResponse {
        highPriority: IReorderItem[];
        mediumPriority: IReorderItem[];
        lowPriority: IReorderItem[];
        aiSuggestion?: string;
    }
    interface IReorderItem {
        id: number | string;
        product_id: number | string;
        variant_id: number | string;
        name: string;
        sku?: string;
        currentQuantity: number;
        suggestedQuantity: number;
        uom_uom_id: number | string;
        estimatedCost?: number;
        currency?: string;
        supplier?: {
            id: number | string;
            name: string;
        };
    }
    interface IInventoryTurnoverResponse {
        averageTurnoverDays: number;
        turnoverRate: number;
        details: ITurnoverDetail[];
    }
    interface ITurnoverDetail {
        product_id: number | string;
        variant_id: number | string;
        name: string;
        sku?: string;
        turnoverDays: number;
        turnoverRate: number;
        averageStock: number;
        totalSold: number;
    }
    interface IWarehouseSummaryResponse {
        warehouses: IWarehouseSummaryItem[];
    }
    interface IWarehouseSummaryItem {
        id: number | string;
        name: string;
        code: string;
        totalProducts: number;
        totalValue: number;
        currency: string;
        utilizationRate?: number;
        locations: ILocationSummaryItem[];
    }
    interface ILocationSummaryItem {
        id: number | string;
        name: string;
        code: string;
        totalProducts: number;
        totalValue: number;
    }
    interface IStockMovementHistoryResponse {
        movements: IStockMovementHistoryItem[];
        meta: {
            totalItems: number;
            itemCount: number;
            itemsPerPage: number;
            totalPages: number;
            currentPage: number;
        };
    }
    interface IStockMovementHistoryItem {
        id: number | string;
        date: string;
        type: 'inbound' | 'outbound' | 'transfer' | 'adjustment';
        typeLabel: string;
        product_id: number | string;
        variant_id: number | string;
        productName: string;
        sku?: string;
        quantity: number;
        unit: string;
        fromLocation?: string;
        toLocation?: string;
        reference?: string;
        note?: string;
        createdBy?: string;
    }
    interface IExpiringStockResponse {
        items: IExpiringStockItem[];
        summary: {
            expiredCount: number;
            expiringIn7Days: number;
            expiringIn30Days: number;
            expiringIn90Days: number;
        };
    }
    interface IExpiringStockItem {
        id: number | string;
        lotId: number | string;
        lotName: string;
        product_id: number | string;
        variant_id: number | string;
        productName: string;
        sku?: string;
        quantity: number;
        unit: string;
        expiryDate: string;
        daysUntilExpiry: number;
        value: number;
        currency: string;
        location?: string;
        warehouse?: string;
    }
    interface IDailyReportResponse {
        date: string;
        overview: IInventoryOverviewResponse;
        movements: {
            totalInbound: number;
            totalOutbound: number;
            inboundDetails: IMovementSummaryItem[];
            outboundDetails: IMovementSummaryItem[];
        };
        alerts: IAlertItem[];
    }
    interface IMovementSummaryItem {
        type: string;
        typeLabel: string;
        count: number;
        totalQuantity: number;
        totalValue: number;
    }
    interface IAlertItem {
        type: 'low_stock' | 'out_of_stock' | 'expiring' | 'expired';
        severity: 'warning' | 'critical' | 'info';
        message: string;
        count: number;
        items?: {
            id: number | string;
            name: string;
            details: string;
        }[];
    }
}

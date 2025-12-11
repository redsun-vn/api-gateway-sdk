import { PricingPolicyType, SyncDirection } from '../../enum';
import { BaseResponse } from '../common.type';
export declare namespace IOmnichannelShopConfig {
    interface ICreateRequest {
        shop_id: number;
        taxEnabled?: boolean;
        taxRate?: number;
        taxIncludedInPrice?: boolean;
        autoConfirmOrder?: boolean;
        autoConfirmMinutes?: number;
        autoCancelReturnOrder?: boolean;
        autoCancelReturnReasons?: string[];
        autoSyncProduct?: boolean;
        syncProductDirection?: SyncDirection;
        syncProductSchedule?: string;
        syncProductFields?: string[];
        autoSyncInventory?: boolean;
        syncInventoryDirection?: SyncDirection;
        inventoryBuffer?: number;
        autoSyncPrice?: boolean;
        syncPriceDirection?: SyncDirection;
        pricingPolicyEnabled?: boolean;
        pricingPolicyType?: PricingPolicyType;
        pricingAdjustment?: number;
        pricingRules?: Record<string, any>;
        autoSyncOrder?: boolean;
        syncOrderSchedule?: string;
        orderStatusMapping?: Record<string, string>;
        assignedStaffId?: number;
        assignedStaffName?: string;
        backupStaffIds?: number[];
        notifyNewOrder?: boolean;
        notifyLowStock?: boolean;
        lowStockThreshold?: number;
        notificationChannels?: string[];
        warehouseId?: number;
        priceListId?: number;
        customSettings?: Record<string, any>;
        notes?: string;
    }
    interface IUpdateRequest extends Partial<ICreateRequest> {
        id: number;
        shopId: number;
    }
    interface IFindRequest {
        shopId: number;
        provider?: string;
        isActive?: boolean;
        page?: number;
        limit?: number;
    }
    interface IToggleActiveRequest {
        id: number;
        shopId: number;
        isActive: boolean;
    }
    interface ISyncNowRequest {
        id: number;
        shopId: number;
        syncType: 'product' | 'inventory' | 'price' | 'order';
    }
    interface IResponse extends BaseResponse {
        shop_id: number | string;
        isActive: boolean;
        taxEnabled: boolean;
        taxRate: number | string;
        taxIncludedInPrice: boolean;
        autoConfirmOrder: boolean;
        autoConfirmMinutes: number | string;
        autoCancelReturnOrder: boolean;
        autoCancelReturnReasons: string[];
        autoSyncProduct: boolean;
        syncProductDirection: string;
        syncProductSchedule: string;
        syncProductFields: string[];
        autoSyncInventory: boolean;
        syncInventoryDirection: string;
        inventoryBuffer: number | string;
        autoSyncPrice: boolean;
        syncPriceDirection: string;
        pricingPolicyEnabled: boolean;
        pricingPolicyType: string;
        pricingAdjustment: number | string;
        pricingRules: Record<string, any>;
        autoSyncOrder: boolean;
        syncOrderSchedule: string | null;
        orderStatusMapping: Record<string, string>;
        assignedStaffId: number | string;
        assignedStaffName: string;
        backupStaffIds: number[];
        notifyNewOrder: boolean;
        notifyLowStock: boolean;
        lowStockThreshold: number | string;
        notificationChannels: string[];
        lastProductSyncAt: Date | null;
        lastOrderSyncAt: Date | null;
        lastInventorySyncAt: Date | null;
        lastPriceSyncAt: Date | null;
        warehouseId: number | string;
        priceListId: number | string;
        customSettings: Record<string, any>;
        notes: string | null;
    }
    interface IListResponse {
        items: IResponse[];
        total: number;
        page: number;
        limit: number;
    }
    interface ISyncResponse {
        success: boolean;
        syncType: string;
        syncedAt: Date;
        message: string;
        details?: {
            total: number;
            success: number;
            failed: number;
            errors?: string[];
        };
    }
    interface IToggleActiveRequest {
        isActive: boolean;
    }
    interface IPricingRule {
        id: string;
        name: string;
        enabled: boolean;
        priority: number;
        conditions: IPricingCondition[];
        adjustment: IPricingAdjustment;
    }
    interface IPricingCondition {
        field: 'category' | 'brand' | 'price_range' | 'product_id' | 'custom';
        operator: 'equals' | 'in' | 'between' | 'greater_than' | 'less_than';
        value: any;
    }
    interface IPricingAdjustment {
        type: 'fixed' | 'percentage' | 'formula';
        value: number;
        roundTo?: number;
        minPrice?: number;
        maxPrice?: number;
    }
    interface ISyncStatus {
        configId: number;
        provider: string;
        lastSyncTimes: {
            product: Date;
            inventory: Date;
            price: Date;
            order: Date;
        };
        syncStats: {
            product: ISyncStat;
            inventory: ISyncStat;
            price: ISyncStat;
            order: ISyncStat;
        };
    }
    interface ISyncStat {
        totalSyncs: number;
        successfulSyncs: number;
        failedSyncs: number;
        lastSuccessAt: Date;
        lastFailureAt: Date;
        lastError: string;
    }
    interface IValidationResult {
        isValid: boolean;
        errors: string[];
        warnings: string[];
    }
    interface IBulkUpdateRequest {
        shopId: number;
        configIds: number[];
        updates: Partial<IUpdateRequest>;
    }
    interface IBulkUpdateResponse {
        success: number;
        failed: number;
        errors: Array<{
            configId: number;
            error: string;
        }>;
    }
}

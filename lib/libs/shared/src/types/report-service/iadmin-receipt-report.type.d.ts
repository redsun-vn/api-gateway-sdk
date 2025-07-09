export declare namespace IAdminReceipt {
    interface IReceiptReportResponse {
        shop_id: number;
        package_id: number;
        subscription_id?: number;
        refCode?: string;
        code?: string;
        status: string;
        source?: string;
        sourceType?: string;
        totalRevenue: number;
        totalDiscount: number;
        originalTotal: number;
        totalReceipts: number;
        averageOrderValue: number;
        date?: string;
        day?: number;
        week?: number;
        month?: number;
        quarter?: number;
        year?: number;
    }
    interface IReceiptSummary {
        totalRevenue: number;
        totalDiscount: number;
        originalTotal: number;
        totalReceipts: number;
        averageOrderValue: number;
        completedReceipts: number;
        pendingReceipts: number;
        cancelledReceipts: number;
    }
    interface IPackageReport {
        package_id: number;
        totalRevenue: number;
        totalReceipts: number;
        averageOrderValue: number;
        mostPopularType: {
            type: string;
            count: number;
        };
    }
}

export declare namespace IReportOrderItem {
    interface IProductBestSelling {
        total_quantity: number;
        revenue: number;
        count: number;
        variant_id: number | string;
        shop_id: number | string;
        branch_id: number | string;
        from_date?: string;
        to_date?: string;
    }
    interface IStaffBestSelling {
        _id: string;
        staff_id: number | string;
        branch_id: number | string;
        shop_id: number | string;
        sale_channel_id: number | string;
        totalRevenue: number;
        totalProfit: number;
        totalOrder: number;
        day?: number;
        week?: number;
        month?: number;
        quarter?: number;
        year?: number;
    }
}

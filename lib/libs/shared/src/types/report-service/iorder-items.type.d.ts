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
        total_order: number;
        total_revenue: number;
        month: number;
        year: number;
        staff_id: number | string;
        branch_id: number | string;
    }
}

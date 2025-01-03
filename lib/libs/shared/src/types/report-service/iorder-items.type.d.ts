export declare namespace IReportOrderItem {
    interface IProductBestSelling {
        variant_id: number | string;
        totalQuantity: number;
        totalRevenue: number;
        totalOrder: number;
        totalProfit: number;
        branch_id: number | string;
        shop_id: number | string;
        shift_id?: number | string;
        sale_channel_id: number | string;
        day?: number;
        week?: number;
        month?: number;
        quarter?: number;
        year?: number;
        date?: string;
    }
    interface IStaffBestSelling {
        staff_id: number | string;
        branch_id: number | string;
        shop_id: number | string;
        sale_channel_id: number | string;
        shift_id?: number | string;
        totalRevenue: number;
        totalProfit: number;
        totalOrder: number;
        day?: number;
        week?: number;
        month?: number;
        quarter?: number;
        year?: number;
        date?: string;
    }
    interface IOrderPromotionReport {
        shop_id?: number | string;
        branch_id?: number | string;
        staff_id?: number | string;
        shift_id?: number | string;
        program_id?: number | string;
        paymentName?: string;
        type?: string;
        totalOrderApply: number;
        totalDiscountAmount: number;
        date?: string;
        day?: number;
        week?: number;
        month?: number;
        quarter?: number;
        year?: number;
    }
    interface ITableReservationReport {
        shop_id?: number | string;
        branch_id?: number | string;
        table_id?: number | string;
        total: number;
        totalOrder: number;
        totalDiscount: number;
        date?: string;
        day?: number;
        week?: number;
        month?: number;
        quarter?: number;
        year?: number;
    }
    interface IStaffOrderReport {
        staff_id?: number;
        shop_id?: number;
        sale_channel_id?: number;
        branch_id?: number;
        shift_id?: number;
        payment_name?: number;
        totalItemQuantity: number;
        totalOrder: number;
        totalItem: number;
        totalRevenue: number;
        totalProfit: number;
        date?: string;
        day?: number;
        week?: number;
        month?: number;
        quarter?: number;
        year?: number;
    }
}

export declare namespace ILineItemReport {
    interface ICategoryItem {
        category_id: number;
        category_name: string;
        total_quantity: number;
        total_revenue: number;
        total_cost?: number;
        total_profit?: number;
        total_discount?: number;
        total_tax?: number;
        order_count?: number;
        product_count?: number;
    }
    interface IProductItem {
        product_id: number;
        product_name: string;
        product_type?: string;
        variant_id?: number;
        variant_name?: string;
        date?: string;
        sku?: string;
        barcode?: string;
        categories?: Array<{
            id: number;
            name: string;
        }>;
        total_quantity: number;
        total_revenue: number;
        total_cost?: number;
        total_profit?: number;
        total_discount?: number;
        total_tax?: number;
        total_refunded?: number;
        order_count?: number;
        avg_unit_price?: number;
    }
    interface ITimePeriodItem {
        time_period: any;
        total_items: number;
        total_quantity: number;
        total_revenue: number;
        total_cost?: number;
        total_profit?: number;
        total_discount?: number;
        total_tax?: number;
        total_refunded?: number;
        order_count?: number;
        product_count?: number;
    }
    interface ITopSellingItem {
        product_id: number;
        product_name: string;
        sku?: string;
        categories?: Array<{
            id: number;
            name: string;
        }>;
        total_quantity: number;
        total_revenue: number;
        total_profit?: number;
        order_count?: number;
    }
    interface IKitchenPerformanceItem {
        product_id?: number;
        product_name?: string;
        kds_area_id?: number;
        date?: string;
        hour?: number;
        total_items: number;
        total_quantity: number;
        avg_processing_time_seconds?: number;
        max_processing_time_seconds?: number;
        min_processing_time_seconds?: number;
        completed_count?: number;
        pending_count?: number;
        processing_count?: number;
    }
    interface IHourlyRevenueItem {
        hour: number;
        date?: string;
        total_revenue: number;
        total_quantity: number;
        total_profit?: number;
        total_discount?: number;
        order_count: number;
        product_count?: number;
        avg_revenue_per_day?: number;
        avg_order_value?: number;
        days_count?: number;
    }
    interface ISaleChannelItem {
        sale_channel_id: number;
        total_items: number;
        total_quantity: number;
        total_revenue: number;
        total_cost?: number;
        total_profit?: number;
        total_discount?: number;
        order_count?: number;
    }
    interface IReportMeta {
        totalItems: number;
        itemCount: number;
        itemsPerPage: number;
        currentPage: number;
        totalPages: number;
    }
}

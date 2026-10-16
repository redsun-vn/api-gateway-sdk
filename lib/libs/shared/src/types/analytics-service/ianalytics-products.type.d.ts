import { IAnalyticsGroupKeys } from './ianalytics-common.type';
export declare namespace IAnalyticsProducts {
    interface IBestSellingVariantItem extends IAnalyticsGroupKeys {
        variant_id: number | string;
        totalQuantity: number | string;
        totalRevenue: number | string;
        totalProfit: number | string;
        totalOrder: number | string;
    }
    interface ICategoryRef {
        id: number | string;
        name: string;
    }
    interface ITopSellingProductItem extends IAnalyticsGroupKeys {
        product_id: number | string;
        product_name: string;
        sku: string | null;
        categories: ICategoryRef[];
        total_quantity: number | string;
        total_revenue: number | string;
        total_profit: number | string;
        total_refunded: number | string;
        order_count: number | string;
    }
    interface ICategorySalesItem extends IAnalyticsGroupKeys {
        category_id: number | string;
        category_name: string;
        total_quantity: number | string;
        total_revenue: number | string;
        total_cost: number | string;
        total_profit: number | string;
        total_discount: number | string;
        total_tax: number | string;
        order_count: number | string;
        product_count: number | string;
    }
}

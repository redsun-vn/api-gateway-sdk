import { IAnalyticsGroupKeys } from './ianalytics-common.type';
export declare namespace IAnalyticsSales {
    interface IRevenueMetrics extends IAnalyticsGroupKeys {
        orderStatus: string;
        revenue: number | string;
        originTotal: number | string;
        taxTotal: number | string;
        discountTotal: number | string;
        shippingTotal: number | string;
        totalWeight: number | string;
        total: number | string;
        totalPrice: number | string;
        refundedTotal: number | string;
        orderCount: number | string;
        partnerCount: number | string;
    }
    interface IRevenueByPeriodItem extends IRevenueMetrics {
        profit: number | string;
    }
    type IRevenueSummaryItem = IRevenueMetrics;
    interface IRevenueBySalesChannelItem extends IAnalyticsGroupKeys {
        total_revenue: number | string;
        total_cost: number | string;
        total_profit: number | string;
        total_discount: number | string;
        order_count: number | string;
        total_items: number | string;
        total_quantity: number | string;
    }
    interface IRevenueByHourItem extends IAnalyticsGroupKeys {
        total_revenue: number | string;
        total_profit: number | string;
        total_discount: number | string;
        order_count: number | string;
        days_count: number | string;
        avg_revenue_per_day: number | string;
        avg_order_value: number | string;
    }
}

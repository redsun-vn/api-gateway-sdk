import { IAnalyticsGroupKeys } from './ianalytics-common.type';
export declare namespace IAnalyticsStaff {
    interface IStaffSellingItem extends IAnalyticsGroupKeys {
        staff_id: number | string;
        totalRevenue: number | string;
        totalProfit: number | string;
        totalOrder: number | string;
    }
    interface IStaffOrderByShiftItem extends IAnalyticsGroupKeys {
        staff_id: number | string;
        payment_name: string | null;
        totalItemQuantity: number | string;
        totalOrder: number | string;
        totalItem: number | string;
        totalRevenue: number | string;
        totalProfit: number | string;
    }
}

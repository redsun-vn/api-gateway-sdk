import { IAnalyticsPeriod } from './ianalytics-common.type';
export declare namespace IAnalyticsAdmin {
    interface IShopCreatedCountItem extends IAnalyticsPeriod {
        active?: boolean;
        totalShop: number | string;
    }
}

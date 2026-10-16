import { IPage } from '../common.type';
export interface IAnalyticsPage<T> {
    items: T[];
    meta?: IPage.IMeta;
    dataAsOf: string | null;
}
export interface IAnalyticsPeriod {
    date?: string;
    year?: number | string;
    quarter?: number | string;
    month?: number | string;
    week?: number | string;
    day?: number | string;
    hour?: number | string;
}
export interface IAnalyticsGroupKeys extends IAnalyticsPeriod {
    branch_id?: number | string;
    sale_channel_id?: number | string;
    shift_id?: number | string;
}

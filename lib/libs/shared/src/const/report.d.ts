import { IQuery } from '../types';
export declare const REPORT_HEADER_REVENUE_PROFIT_MAPPING: {
    [key: string]: string;
};
export declare const reportHeaderByField: any;
export declare const REPORT_EXPORT_LIMIT_TURN = 500;
export declare const idFieldDataReportMapping: {
    key: string;
    set: Set<string>;
    index: string;
    isShopId: boolean;
}[];
export interface IQueryReportExport extends IQuery {
    fieldExport?: string;
}

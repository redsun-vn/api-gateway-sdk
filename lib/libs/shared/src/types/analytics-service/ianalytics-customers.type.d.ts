import { IAnalyticsGroupKeys } from './ianalytics-common.type';
export declare namespace IAnalyticsCustomers {
    interface IOrderHistoryProduct {
        quantity: number | string;
        product_id: number | string;
        variant_id: number | string;
    }
    interface IOrderHistory {
        partner_id: number | string;
        partner_uuid: string | null;
        totalOrder: number | string;
        totalPayment: number | string;
        lastDateOrder: string | null;
        products: IOrderHistoryProduct[];
        dataAsOf: string | null;
    }
    interface INewCustomerCountItem extends IAnalyticsGroupKeys {
        province?: string | null;
        totalPartner: number | string;
    }
}

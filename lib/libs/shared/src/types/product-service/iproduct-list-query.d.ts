import { IQuery } from '../common.type';
export declare namespace IProductListQuery {
    type StockStatus = 'in_stock' | 'out_of_stock' | 'below_min' | 'unmanaged';
    interface IShopQuery extends IQuery {
        stockStatus?: StockStatus;
        withStockFlags?: boolean;
        searchScope?: 'extended';
    }
}

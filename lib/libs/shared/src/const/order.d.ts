export declare const ORDER_HEADER_DATA_EXPORT: string[];
export declare const ORDER_HEADER_EXPORT_LINE_ITEM: string[];
export declare const HEADER_ORDER_EXPORT: string[];
export declare const ORDER_HEADER_MAPPING_KEY: {
    [key: string]: string;
};
export declare const statusOrderMapping: {
    archived: string;
    open: string;
    canceled: string;
    completed: string;
};
export declare const statusFulfillmentOrderMapping: {
    open: string;
    progressing: string;
    cancelled: string;
    closed: string;
    error: string;
    failure: string;
    pending: string;
    success: string;
};
export declare const statusFinancialOrderMapping: {
    canceled: string;
    not_paid: string;
    paid: string;
    partially_paid: string;
    partially_refunded: string;
    pending: string;
    refunded: string;
};
export declare const idFieldDataMapping: ({
    key: string;
    set: Set<string>;
    index: string;
    isShopId: boolean;
    fieldFilter?: undefined;
} | {
    key: string;
    set: Set<string>;
    index: string;
    fieldFilter: string;
    isShopId: boolean;
} | {
    key: string;
    set: Set<string>;
    index: string;
    isShopId?: undefined;
    fieldFilter?: undefined;
})[];

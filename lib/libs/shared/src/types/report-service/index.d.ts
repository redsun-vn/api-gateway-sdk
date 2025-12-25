export * from './iorder-revenue.type';
export * from './ischedule.type';
export * from './iorder-items.type';
export * from './ipartner-report.type';
export * from './iattendance-report.type';
export * from './iadmin-receipt-report.type';
export * from './iloyalty-report.type';
export * from './line-item-report.type';
export interface IReportShopInActive {
    [key: number]: number[];
}
export interface AdminSYncReport {
    event: ReportCrawlerEvent;
    startDate: string;
    endDate: string;
}
declare enum ReportCrawlerEvent {
    ORDER_REVENUE = "shop.report.order_revenue.crawler.event",
    ORDER_STAFF_SELLING = "shop.report.order_staff_selling.crawler.event",
    ORDER_PRODUCT_SELLING = "shop.report.order_product_selling.crawler.event",
    SHOP_ORDER_PROMOTION_REPORT = "shop.order.promotion.report.crawler",
    SHOP_TABLE_RESERVATION_REPORT = "shop.order.table_reservation.report.crawler",
    SHOP_STAFF_ORDER_REPORT = "shop.staff-order.report.crawler",
    SHOP_PARTNER_REPORT = "shop.partner.report.crawler",
    SHOP_ORDER_OVERVIEW_CRAWLER_EVENT = "shop.report.order_overview.crawler.event"
}

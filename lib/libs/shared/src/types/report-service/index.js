"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./iorder-revenue.type"), exports);
__exportStar(require("./ischedule.type"), exports);
__exportStar(require("./iorder-items.type"), exports);
__exportStar(require("./ipartner-report.type"), exports);
__exportStar(require("./iattendance-report.type"), exports);
__exportStar(require("./iadmin-receipt-report.type"), exports);
var ReportCrawlerEvent;
(function (ReportCrawlerEvent) {
    ReportCrawlerEvent["ORDER_REVENUE"] = "shop.report.order_revenue.crawler.event";
    ReportCrawlerEvent["ORDER_STAFF_SELLING"] = "shop.report.order_staff_selling.crawler.event";
    ReportCrawlerEvent["ORDER_PRODUCT_SELLING"] = "shop.report.order_product_selling.crawler.event";
    ReportCrawlerEvent["SHOP_ORDER_PROMOTION_REPORT"] = "shop.order.promotion.report.crawler";
    ReportCrawlerEvent["SHOP_TABLE_RESERVATION_REPORT"] = "shop.order.table_reservation.report.crawler";
    ReportCrawlerEvent["SHOP_STAFF_ORDER_REPORT"] = "shop.staff-order.report.crawler";
    ReportCrawlerEvent["SHOP_PARTNER_REPORT"] = "shop.partner.report.crawler";
    ReportCrawlerEvent["SHOP_ORDER_OVERVIEW_CRAWLER_EVENT"] = "shop.report.order_overview.crawler.event";
})(ReportCrawlerEvent || (ReportCrawlerEvent = {}));
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REPORT_CACHE_TIME = exports.fieldDataReportMapping = exports.REPORT_EXPORT_LIMIT_TURN = exports.reportHeaderByField = exports.REPORT_HEADER_REVENUE_PROFIT_MAPPING = void 0;
const elastic_index_1 = require("./elastic-index");
exports.REPORT_HEADER_REVENUE_PROFIT_MAPPING = {
    Ngày: 'date',
    'Chi nhánh': 'branchName',
    'Kênh bán hàng': 'saleChannelName',
    'Số khách hàng': 'partnerCount',
    'Số đơn hàng': 'orderCount',
    'Doanh thu': 'revenue',
    'Lợi nhuận': 'profit',
    'Sản phẩm': 'variantName',
    'Nhân viên': 'staffName',
    'Tổng số lượng': 'totalQuantity',
    'Tổng lợi nhuận': 'totalProfit',
    'Tổng doanh thu': 'totalRevenue',
    'Tổng đơn hàng': 'totalOrder',
    'Tổng thuế': 'taxTotal',
    'Tổng khối lượng': 'totalWeight',
    Tổng: 'total',
    'Tổng hoàn trả': 'refundedTotal',
    'Tổng giảm giá': 'discountTotal',
    'Tổng giá gốc': 'originTotal',
    Năm: 'year',
    'Trạng thái đơn hàng': 'orderStatus',
    Tháng: 'month',
    Quý: 'quarter',
    Tuần: 'week',
    'Tổng phí vận chuyển': 'shippingTotal',
    'Tổng tiền': 'totalAmount',
};
exports.reportHeaderByField = Object.fromEntries(Object.entries(exports.REPORT_HEADER_REVENUE_PROFIT_MAPPING).map((a) => a.reverse()));
exports.REPORT_EXPORT_LIMIT_TURN = 500;
exports.fieldDataReportMapping = [
    {
        key: 'branch_id',
        set: new Set(),
        index: elastic_index_1.ELASTIC_INDEX.BRANCH,
        isShopId: true,
    },
    {
        key: 'sale_channel_id',
        set: new Set(),
        index: elastic_index_1.ELASTIC_INDEX.SALES_CHANNEL,
        isShopId: false,
    },
    {
        key: 'variant_id',
        set: new Set(),
        index: elastic_index_1.ELASTIC_INDEX.VARIANT,
        isShopId: true,
    },
    {
        key: 'staff_id',
        set: new Set(),
        index: elastic_index_1.ELASTIC_INDEX.STAFF,
        isShopId: true,
    },
];
exports.REPORT_CACHE_TIME = 2 * 60 * 1000;
//# sourceMappingURL=report.js.map
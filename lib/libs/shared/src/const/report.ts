import { IQuery } from '../types';
import { ELASTIC_INDEX } from './elastic-index';

export const REPORT_HEADER_REVENUE_PROFIT_MAPPING: { [key: string]: string } = {
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

export const reportHeaderByField = Object.fromEntries(
	Object.entries(REPORT_HEADER_REVENUE_PROFIT_MAPPING).map((a) => a.reverse()),
);

export const REPORT_EXPORT_LIMIT_TURN = 500;

export interface FieldMappingExternalType {
	key: string; // key of data in report need find => map data by key => set into field `set` below here
	set: Set<string>; // list data uniqe data need find
	index: string; // index name elastic of data
	isShopId: boolean; // filed have need with shopId
	fieldFilter?: string; // OPTIONAL :  customer field filter : default note have is "id"
}

export const fieldDataReportMapping: FieldMappingExternalType[] = [
	{
		key: 'branch_id',
		set: new Set<string>(),
		index: ELASTIC_INDEX.BRANCH,
		isShopId: true,
	},
	{
		key: 'sale_channel_id',
		set: new Set<string>(),
		index: ELASTIC_INDEX.SALES_CHANNEL,
		isShopId: false,
	},
	{
		key: 'variant_id',
		set: new Set<string>(),
		index: ELASTIC_INDEX.VARIANT,
		isShopId: true,
	},
	{
		key: 'staff_id',
		set: new Set<string>(),
		index: ELASTIC_INDEX.STAFF,
		isShopId: true,
	},
];

export interface IQueryReportExport extends IQuery {
	fieldExport?: string;
}

export const REPORT_CACHE_TIME = 2 * 60 * 1000; // 2 minutes

import {
	OrderFinancialStatus,
	OrderFulfillmentStatus,
	OrderStatus,
} from '../enum';
import { ELASTIC_INDEX } from './elastic-index';

export const ORDER_HEADER_DATA_EXPORT: string[] = [
	// info order
	'Mã đơn hàng',
	'Chi nhánh',
	'Khách hàng',
	'Kho hàng',
	'Trang thái đơn hàng',
	'Trạng thái giao hàng',
	'Trạng thái thanh toán',
	'Kênh bán hàng',
	'Phương thức thanh toán',
	'Tổng Giảm giá',
	'Giảm giá CTKM',
	'Mã giảm giá',
	'Đơn vị tiền tệ',
	'Phí vận chuyển',
	'Phí phát sinh',
	'Tổng thuế',
	'Tông tiền',
	'Tổng tiền khách trả',
	'Ngày lên đơn',
	// 'Ngày hoàn thành',

	// other
	'Phương thức giao hàng',
	'Địa chỉ giao hàng',
	'Địa chỉ thanh toán',
	'Bảng giá',
	'Nhân viên',
	'Thẻ',
	'Mô tả',
];

export const ORDER_HEADER_EXPORT_LINE_ITEM = [
	// infor line item
	'Tên mặt hàng',
	'Số lượng',
	'Giá bán', // unit price - 1
	'Giảm giá mặt hàng', // discount total - 1
	'Khối lượng',
	'Có thuế', // boolean
	'Phần thưởng', // boolean
	'Hoàn trả', // boolean,
	'Tổng thuế mặt hàng', // line tax total - sum array tax
	'Tông tiền lựa chọn', // total price selection group - sum array slection
];

export const HEADER_ORDER_EXPORT = [
	...ORDER_HEADER_DATA_EXPORT,
	...ORDER_HEADER_EXPORT_LINE_ITEM,
];

export const ORDER_HEADER_MAPPING_KEY: { [key: string]: string } = {
	// info order
	'Mã đơn hàng': 'code',
	'Chi nhánh': 'branchName',
	'Khách hàng': 'customerName',
	'Kho hàng': 'warehouseName',
	'Trang thái đơn hàng': 'statusName',
	'Trạng thái giao hàng': 'fulfillmentStatusName',
	'Trạng thái thanh toán': 'financialStatusName',
	'Kênh bán hàng': 'saleChannelName',
	'Phương thức thanh toán': 'paymentGatewayName',
	'Tổng Giảm giá': 'discountOrder',
	'Giảm giá CTKM': 'discountPromotion',
	'Mã giảm giá': 'discountCode',
	'Đơn vị tiền tệ': 'currencyCode',
	'Phí vận chuyển': 'addtionalShippingFee',
	'Phí phát sinh': 'incidentalFee',
	'Tổng thuế': 'taxTotal',
	'Tông tiền': 'total',
	'Tổng tiền khách trả': 'paidTotal',
	'Ngày lên đơn': 'createdAtFormat',
	// 'Ngày hoàn thành': 'completedAtFormat',

	// other
	'Phương thức giao hàng': 'shippingMethod',
	'Địa chỉ giao hàng': 'addressShipping',
	'Địa chỉ thanh toán': 'addressBilling',
	'Bảng giá': 'priceBookName',
	'Nhân viên': 'staffName',
	Thẻ: 'tags',
	'Mô tả': 'description',

	// info line item
	'Số lượng': 'lineQuantity',
	'Tên mặt hàng': 'lineName',
	'Giá bán': 'lineUnitPrice', // unit price - 1
	'Giảm giá mặt hàng': 'lineDiscount', // discount total - 1
	'Khối lượng': 'lineWeight',
	'Có thuế': 'lineTaxable', // boolean
	'Phần thưởng': 'lineIsGift', // boolean
	'Hoàn trả': 'lineRefundable', // boolean,
	'Tổng thuế mặt hàng': 'lineTaxTotalPirce', // line tax total
	'Tông tiền lựa chọn': 'lineSelectGroupPrice', // total price selection group - sum array slection
};

export const statusOrderMapping = {
	[OrderStatus.ARCHIVED]: 'Đã lưu trữ',
	[OrderStatus.OPEN]: 'Đang xử lý',
	[OrderStatus.CANCELED]: 'Đã hủy',
	[OrderStatus.COMPLETED]: 'Đã hoàn thành',
};

export const statusFulfillmentOrderMapping = {
	[OrderFulfillmentStatus.OPEN]: 'Chưa thực hiện',
	[OrderFulfillmentStatus.PROGRESSING]: 'Đang tiến hành',
	[OrderFulfillmentStatus.CANCELLED]: 'Đã hủy',
	[OrderFulfillmentStatus.CLOSED]: 'Đã đóng',
	[OrderFulfillmentStatus.ERROR]: 'Có lỗi xảy ra',
	[OrderFulfillmentStatus.FAILURE]: 'Thất bại',
	[OrderFulfillmentStatus.PENDING]: 'Chờ xử lý',
	[OrderFulfillmentStatus.SUCCESS]: 'Thành công',
};

export const paymentGatewayNameMapping = {
	bank: 'Chuyển khoản',
	cash: 'Tiền mặt',
	vietqr: 'Vietqr',
	cod: 'Thu hộ',
	card: 'Thanh toán thẻ',
	vnpayqr: 'VNPay QR',
	point: 'Điểm',
	vnpay: 'VNPay',
};

export const statusFinancialOrderMapping = {
	[OrderFinancialStatus.CANCELED]: 'Đã hủy',
	[OrderFinancialStatus.NOT_PAID]: 'Chưa thanh toán',
	[OrderFinancialStatus.PAID]: 'Đã thanh toán',
	[OrderFinancialStatus.PARTIALLY_PAID]: 'Thanh toán một phần',
	[OrderFinancialStatus.PARTIALLY_REFUNDED]: 'Hoàn tiền một phần',
	[OrderFinancialStatus.PENDING]: 'Chờ xử lý',
	[OrderFinancialStatus.REFUNDED]: 'Đã hoàn tiền',
};

export const idFieldDataMapping = [
	{
		key: 'address_id',
		set: new Set<string>(),
		index: ELASTIC_INDEX.PARTNER_ADDRESS,
		isShopId: true,
	},
	{
		key: 'shipping_method_id',
		set: new Set<string>(),
		index: ELASTIC_INDEX.SHIPPING_METHOD,
		isShopId: false,
	},
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
		key: 'price_book_id',
		set: new Set<string>(),
		index: ELASTIC_INDEX.PRICEBOOK,
		isShopId: true,
	},
	{
		key: 'partner_id',
		set: new Set<string>(),
		index: ELASTIC_INDEX.PARTNER,
		fieldFilter: 'uuid',
		isShopId: true,
	},
	{
		key: 'warehouse_id',
		set: new Set<string>(),
		index: ELASTIC_INDEX.WAREHOUSE,
		isShopId: true,
	},
	{ key: 'staff_id', set: new Set<string>(), index: ELASTIC_INDEX.STAFF },
];

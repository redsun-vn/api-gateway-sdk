/* eslint-disable @typescript-eslint/no-namespace */

import { OrderStatus } from '../../enum';

export namespace IOrderRevenue {
	export interface IOrderRevenueResponse {
		_id: string;
		shop_id: number | string;
		branch_id: number | string;
		sale_channel_id?: number | string;
		shift_id?: number | string;
		orderStatus: OrderStatus;
		hour?: string;
		date?: string;
		week?: string;
		month?: string;
		quarter?: string;
		year: string;
		revenue: number | string;
		profit?: number | string;
		originTotal: number | string;
		taxTotal: number | string;
		discountTotal: number | string;
		shippingTotal: number | string;
		totalWeight: number | string;
		total: number | string;
		totalPrice: number | string;
		refundedTotal: number | string;
		orderCount: number | string;
		partnerCount: number | string;
		__v?: number | string | null;
		createdAt?: number | string | null;
		updatedAt?: number | string | null;
	}

	export interface IOrderRevenueSummary {
		_id: string | object; // Type depends on the field used in `filterBy`
		revenue: number; // Tổng doanh thu
		originTotal: number; // tổng giá vốn
		taxTotal: number; // Tổng tiền thuế đơn hàng
		discountTotal: number; // Tổng tiền giảm giá
		shippingTotal: number; // Tổng phí ship đơn hàng
		totalWeight: number; // Tổng khối lượng đơn hàng
		total: number; // Tổng tiền hàng hóa sau thuế và đã áp dụng khuyến mãi  [ totalPrice + taxTotal - discountTotal ]
		totalPrice: number; // Tổng tiền hàng hóa trước thuế
		refundedTotal: number; // Tổng tiền refund
		orderCount: number; // Tổng số lượng đơn hàng
		partnerCount: number; // Tổng số lượng khách hàng
	}

	export interface IOrderRevenueStats {
		totalRevenue: number;
		totalPartner: number;
		totalOrder: number;
	}

	export interface IOrderReturnReport {
		pos_session_id: number | string | null;
		branch_id: number | string;
		staff_id: number | string;
		totalRevenue: number;
		totalPartner: number;
		totalRefunded: number;
		totalOrder: number;
		itemRefundedQuantity: number | 0;
	}
}

import { OrderStatus } from '../../enum';
export declare namespace IOrderRevenue {
    interface IOrderRevenueResponse {
        _id: string;
        shop_id: number | string;
        branch_id: number | string;
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
    interface IOrderRevenueSummary {
        _id: string | object;
        revenue: number;
        originTotal: number;
        taxTotal: number;
        discountTotal: number;
        shippingTotal: number;
        totalWeight: number;
        total: number;
        totalPrice: number;
        refundedTotal: number;
        orderCount: number;
        partnerCount: number;
    }
}

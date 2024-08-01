import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { ILineItem } from './iline-item.type';
import { CODStatus, OrderStatus, OrderFinancialStatus, OrderFulfillmentStatus, OrderProcessingStatus } from '../../enum';
import { IDrafOrder } from './idraf-order.type';
import { ITableReservation } from './itable-reservation.type';
import { ICombiningPromotion } from './icombining-promotion.type';
import { IAdditionalFee } from './iadditional-fee.type';
export declare namespace IOrder {
    interface ICreateOrder {
        branch_id: number & tags.Type<'uint64'>;
        staff_id: number & tags.Type<'uint64'>;
        pos_session_id: string & tags.Format<'uuid'>;
        sale_channel_id?: number & tags.Type<'uint64'>;
        price_book_id?: number & tags.Type<'uint64'>;
        billing_address_id?: number & tags.Type<'uint64'>;
        shipping_address_id?: number & tags.Type<'uint64'>;
        shipping_method_id?: number & tags.Type<'uint64'>;
        draf_order_id?: number & tags.Type<'uint64'>;
        partner_id?: string & tags.Format<'uuid'>;
        warehouse_id: number & tags.Type<'uint64'>;
        currencyCode?: string | null;
        email?: string | null;
        phone?: string | null;
        code?: string | null;
        note?: string | null;
        uuid: (string & tags.Format<'uuid'>) | null;
        description?: string | null;
        tags?: string | null;
        total?: number;
        totalPrice?: number;
        totalWeight?: number;
        subTotal?: number;
        shippingTotal?: number;
        discountOrder?: number;
        discountTotal?: number;
        rawDiscountTotal?: number;
        taxTotal?: number;
        originTotal?: number;
        paidTotal?: number;
        refundedAmount?: number;
        refundedTotal?: number;
        returnedTotal?: number;
        totalGuests?: number;
        customerAcceptMarketing?: boolean;
        taxesIncluded?: boolean;
        refundable?: boolean;
        completedAt?: (string & tags.Format<'date-time'>) | null;
        confirmedAt?: (string & tags.Format<'date-time'>) | null;
        processedAt?: (string & tags.Format<'date-time'>) | null;
        canceledAt?: (string & tags.Format<'date-time'>) | null;
        cancelReason?: string | null;
        returnReason?: string | null;
        isReturn?: boolean;
        confirmationCode?: string | null;
        paymentGatewayName?: string | null;
        clientIp?: string | null;
        discountCode?: string | null;
        sourceIdentifier?: string | null;
        status?: OrderStatus;
        codStatus?: CODStatus;
        orderProcessingStatus?: OrderProcessingStatus;
        fulfillmentStatus?: OrderFulfillmentStatus;
        financialStatus?: OrderFinancialStatus;
        lineItems: ILineItem.IInputLineItem[];
        tableReservations?: ITableReservation.ICreateTableReservation[];
        userId?: string;
    }
    interface ICreateOrderKafka extends ICreateOrder {
        shop_id: number & tags.Type<'uint64'>;
    }
    interface IUpdateOrder extends Omit<Partial<ICreateOrder>, 'branch_id' | 'staff_id' | 'pos_session_id' | 'sale_channel_id'> {
        uuid?: string & tags.Format<'uuid'>;
    }
    interface IDetailOrderResponse extends BaseResponse {
        shop_id: number | string;
        branch_id: number | string | null;
        staff_id: number | string | null;
        pos_session_id?: string | null;
        sale_channel_id?: number | string | null;
        price_book_id?: number | string | null;
        billing_address_id?: number | string | null;
        shipping_address_id?: number | string | null;
        shipping_method_id?: string | number | null;
        draf_order_id?: number | string | null;
        partner_id?: null | number | string;
        warehouse_id?: null | number | string;
        idempotency_key: string | number;
        code?: string | null;
        uuid?: string;
        currencyCode?: string | null;
        email?: string | null;
        phone?: string | null;
        note?: string | null;
        description?: string | null;
        tags?: string | null;
        totalGuests?: string | number;
        refundable?: boolean;
        refundedTotal?: string | number;
        returnedTotal?: number | string;
        shippingTotal?: string | number;
        discountTotal?: number | string;
        discountOrder?: number | string;
        totalWeight?: string | number;
        subTotal?: string | number;
        taxTotal?: string | number;
        originTotal?: string | number;
        totalPrice?: string | number;
        total?: string | number;
        paidTotal?: string | number;
        customerAcceptMarketing?: boolean;
        taxesIncluded?: boolean;
        cancelReason?: string | null;
        returnReason?: string | null;
        isReturn?: boolean | string;
        confirmationCode?: string | null;
        paymentGatewayName?: string | null;
        clientIp?: string | null;
        discountCode?: string | null;
        sourceIdentifier?: string | null;
        status: string;
        codStatus?: string;
        orderProcessingStatus?: string;
        fulfillmentStatus?: string;
        financialStatus?: string;
        completedAt?: string | null;
        confirmedAt?: string | null;
        processedAt?: string | null;
        canceledAt?: string | null;
        lineItems?: ILineItem.IDetailLineItemResponse[] | null;
        drafOrder?: IDrafOrder.IDetailDrafOrderResponse | null;
        tableReservations?: ITableReservation.IDetailTableReservationResponse[] | null;
        combiningPromotions?: ICombiningPromotion.IDetailCombiningPromotionResponse[] | null;
        additionalFees?: IAdditionalFee.IDetailAdditionalFeeResponse[] | null;
    }
}

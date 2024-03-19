import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { ILineItem } from './iline-item.type';
import { DrafOrderStatus } from '../../enum';
import { IOrder } from './iorder.type';
import { ICombiningPromotion } from './icombining-promotion.type';
import { IAdditionalFee } from './iadditional-fee.type';
export declare namespace IDrafOrder {
    interface ICreateDrafOrder {
        branch_id: number & tags.Type<'uint64'>;
        staff_id: number & tags.Type<'uint64'>;
        sale_channel_id?: number & tags.Type<'uint64'>;
        price_book_id?: number & tags.Type<'uint64'>;
        billing_address_id?: number & tags.Type<'uint64'>;
        shipping_address_id?: number & tags.Type<'uint64'>;
        order_id?: (number & tags.Type<'uint64'>) | null;
        partner_id?: string & tags.Format<'uuid'>;
        currencyCode?: string;
        discountCode?: string;
        code?: string;
        email?: string;
        phone?: string;
        note?: string;
        description?: string;
        tags?: string;
        discountOrder?: number;
        shippingTotal?: number;
        status: DrafOrderStatus;
        completedAt?: (string & tags.Format<'date-time'>) | null;
        canceledAt?: (string & tags.Format<'date-time'>) | null;
        lineItems: ILineItem.IInputLineItem[];
    }
    interface ICreateDrafOrderKafka extends ICreateDrafOrder {
        shop_id: number & tags.Type<'uint64'>;
    }
    interface IUpdateDrafOrder extends Omit<Partial<ICreateDrafOrder>, 'branch_id' | 'staff_id' | 'sale_channel_id'> {
    }
    interface IConfirmDrafOrder {
        warehouse_id: number & tags.Type<'uint64'>;
        price_book_id?: number & tags.Type<'uint64'>;
    }
    interface IDetailDrafOrderResponse extends BaseResponse {
        shop_id: string | number;
        branch_id: string | number;
        staff_id: string | number;
        sale_channel_id?: string | number | null;
        price_book_id?: string | number | null;
        billing_address_id?: string | number | null;
        shipping_address_id?: string | number | null;
        partner_id?: string | null;
        order_id?: string | number | null;
        uuid?: string | number | null;
        idempotency_key: string | number;
        code?: string;
        email?: string | null;
        currencyCode: string;
        discountCode?: string | null;
        phone?: string | null;
        note?: string | null;
        description?: string | null;
        tags?: string | null;
        total: string | number;
        totalPrice: string | number;
        originTotal: string | number;
        subTotal?: string | number;
        taxTotal?: string | number;
        discountOrder?: string | number;
        discountTotal?: string | number;
        shippingTotal?: string | number;
        totalWeight?: string | number;
        status: string;
        completedAt?: string | null;
        canceledAt?: string | null;
        order?: IOrder.IDetailOrderResponse | null;
        lineItems?: ILineItem.IDetailLineItemResponse[] | null;
        combiningPromotions?: ICombiningPromotion.IDetailCombiningPromotionResponse[] | null;
        additionalFees?: IAdditionalFee.IDetailAdditionalFeeResponse[] | null;
    }
}

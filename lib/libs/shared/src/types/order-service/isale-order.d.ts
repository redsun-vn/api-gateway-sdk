import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { ILineItem } from './iline-item.type';
import { IOrder } from './iorder.type';
import { SaleOrderStatus } from '../../enum';
import { ICombiningPromotion } from './icombining-promotion.type';
import { IAdditionalFee } from './iadditional-fee.type';
export declare namespace ISaleOrder {
    interface ICreate {
        branch_id: number & tags.Type<'uint64'>;
        created_by: number & tags.Type<'uint64'>;
        responsible_by?: number & tags.Type<'uint64'>;
        shipping_method_id?: number & tags.Type<'uint64'>;
        payment_term_id?: number & tags.Type<'uint64'>;
        price_book_id?: number & tags.Type<'uint64'>;
        partner_uuid?: string & tags.Format<'uuid'>;
        billing_address_uuid?: string & tags.Format<'uuid'>;
        shipping_address_uuid?: string & tags.Format<'uuid'>;
        currencyCode?: string;
        email?: string;
        phone?: string;
        note?: string;
        discountCode?: string | null;
        discountOrder?: number;
        shippingTotal?: number;
        totalWeight?: number;
        completedAt?: (string & tags.Format<'date-time'>) | null;
        canceledAt?: (string & tags.Format<'date-time'>) | null;
        expectedDate?: (string & tags.Format<'date-time'>) | null;
        dateOrder?: (string & tags.Format<'date-time'>) | null;
        lineItems: ILineItem.IInputLineItem[];
    }
    interface IDuplicate {
        created_by: number & tags.Type<'uint64'>;
        duplicateId: (number & tags.Type<'uint64'>) | (string & tags.Format<'uuid'>);
    }
    interface IUpdate extends Omit<Partial<ICreate>, 'branch_id' | 'created_by'> {
        id: string;
        updated_by: number & tags.Type<'uint64'>;
    }
    interface IConfirmSaleOrder {
        id: string;
        warehouse_id: number & tags.Type<'uint64'>;
        price_book_id?: number & tags.Type<'uint64'>;
    }
    interface IResponse extends BaseResponse {
        shop_id: string | number;
        branch_id: string | number | null;
        created_by: number | string | null;
        updated_by: number | string | null;
        responsible_by: number | string | null;
        shipping_method_id: string | number | null;
        payment_term_id: string | number | null;
        price_book_id: string | number | null;
        partner_uuid: string | null;
        billing_address_uuid: string | null;
        shipping_address_uuid: string | null;
        order_id: string | number | null;
        idempotency_key: string | number;
        uuid: string;
        code: string;
        email: string;
        currencyCode: string;
        phone: string;
        note: string | null;
        discountCode: string | null;
        total: string | number;
        totalPrice: string | number;
        originTotal: string | number;
        subTotal: string | number | null;
        taxTotal: string | number | null;
        discountOrder: string | number;
        discountTotal: string | number | null;
        shippingTotal: string | number;
        totalWeight: string | number;
        status: SaleOrderStatus;
        completedAt: string | null;
        canceledAt: string | null;
        expectedDate: string | null;
        dateOrder: string | null;
        isExpired: boolean;
        order: IOrder.IDetailOrderResponse | null;
        lineItems: ILineItem.IDetailLineItemResponse[] | null;
        combiningPromotions: ICombiningPromotion.IDetailCombiningPromotionResponse[] | null;
        additionalFees?: IAdditionalFee.IDetailAdditionalFeeResponse[] | null;
    }
}

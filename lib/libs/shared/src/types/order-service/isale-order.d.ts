import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { ILineItem } from './iline-item.type';
import { IOrder } from './iorder.type';
import { ICombiningPromotion } from './icombining-promotion.type';
import { IAdditionalFee } from './iadditional-fee.type';
import { ISaleOrderApproval } from './isale-order-approval';
import { ISaleOrderTemplate } from './isale-order-template';
import { ILoyaltyProgram } from '../loyalty-service/iloyalty-program';
import { OrderCombiningPromotionType } from '../../enum';
export declare namespace ISaleOrder {
    interface ICombiningInput {
        type: OrderCombiningPromotionType;
        value: number;
        amount: number;
        program_id?: (number & tags.Type<'uint64'>) | null;
        coupon_id?: (number & tags.Type<'uint64'>) | null;
        discount_code?: string | null;
        line_item_uuid?: (string & tags.Format<'uuid'>) | null;
    }
    interface ICreate {
        branch_id: number & tags.Type<'uint64'>;
        created_by: number & tags.Type<'uint64'>;
        opportunity_id?: number & tags.Type<'uint64'>;
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
        template_id?: (number & tags.Type<'uint64'>) | null;
        terms?: string | null;
        discountCode?: string | null;
        discountOrder?: number;
        shippingTotal?: number;
        totalWeight?: number;
        completedAt?: (string & tags.Format<'date-time'>) | null;
        canceledAt?: (string & tags.Format<'date-time'>) | null;
        expectedDate?: (string & tags.Format<'date-time'>) | null;
        dateOrder?: (string & tags.Format<'date-time'>) | null;
        lineItems: ILineItem.IInputLineItem[];
        combiningPromotions?: ICombiningInput[];
        bank_account_id?: (number & tags.Type<'uint64'>) | null;
        contact_address_uuid?: (string & tags.Format<'uuid'>) | null;
    }
    interface IDuplicate {
        shop_id: number & tags.Type<'uint64'>;
        created_by: number & tags.Type<'uint64'>;
        duplicateId: (number & tags.Type<'uint64'>) | (string & tags.Format<'uuid'>);
    }
    interface IShopScopedById {
        id: string;
        shop_id: number & tags.Type<'uint64'>;
    }
    interface IShopScopedAction extends IShopScopedById {
        updated_by: number & tags.Type<'uint64'>;
    }
    interface ISendToPartnerQuery {
        notify?: boolean;
    }
    interface ISendToPartner extends IShopScopedAction, ISendToPartnerQuery {
    }
    type IUpdateBody = Omit<Partial<ICreate>, 'branch_id' | 'created_by'>;
    interface IUpdate extends IUpdateBody, IShopScopedAction {
    }
    interface IConfirmBody {
        warehouse_id: number & tags.Type<'uint64'>;
        price_book_id?: number & tags.Type<'uint64'>;
    }
    interface IConfirmSaleOrder extends IConfirmBody, IShopScopedAction {
    }
    interface ISendEmailBody {
        to: (string & tags.Format<'email'>)[] & tags.MinItems<1> & tags.MaxItems<20>;
        cc_staff_ids?: (number & tags.Type<'uint64'>)[] & tags.MaxItems<20>;
        message?: string & tags.MaxLength<2000>;
        attachment_ids?: (number & tags.Type<'uint64'>)[] & tags.MaxItems<10>;
    }
    interface ISendEmailInput extends ISendEmailBody {
        id: string;
        shop_id: number & tags.Type<'uint64'>;
        staff_id: number & tags.Type<'uint64'>;
    }
    interface IEmailCapabilityInput {
        shop_id: number & tags.Type<'uint64'>;
    }
    interface IEmailCapabilityResponse {
        can_send: boolean;
        supports_message: boolean;
        reason?: 'CHANNEL_UNAVAILABLE' | 'TEMPLATE_UNAVAILABLE' | 'UNREACHABLE';
    }
    interface ILoyaltyValidateLineItem {
        product_id: number & tags.Type<'uint64'>;
        variant_id: number & tags.Type<'uint64'>;
        quantity: number;
        price: number;
        isGift?: boolean;
        uuid?: string;
    }
    interface ILoyaltyValidateBody {
        lineItems: ILoyaltyValidateLineItem[];
        total: number;
        totalPrice: number;
        discountCode?: string | null;
    }
    interface ILoyaltyValidateInput extends ILoyaltyValidateBody {
        shop_id: number & tags.Type<'uint64'>;
    }
    type ILoyaltyValidateResponse = ILoyaltyProgram.ILoyaltyProgramResponse[];
    interface IQuerySaleOrder {
        phone?: string;
        email?: string;
    }
    interface IBankAccountSnapshot {
        id: number | string;
        bank_name: string | null;
        bank_full_name: string | null;
        bank_code: string | null;
        account_name: string | null;
        account_number: string | null;
        bank_address: string | null;
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
        uuid: string | null;
        code: string | null;
        email: string | null;
        currencyCode: string | null;
        phone: string | null;
        note: string | null;
        template_id?: number | string | null;
        terms?: string | null;
        template?: ISaleOrderTemplate.IResponse | null;
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
        status: string;
        completedAt: string | null;
        canceledAt: string | null;
        expectedDate: string | null;
        dateOrder: string | null;
        isExpired: boolean;
        opportunity_id: number | string | null;
        bank_account_id?: number | string | null;
        bank_account?: IBankAccountSnapshot | null;
        contact_address_uuid?: string | null;
        approval_status?: 'none' | 'pending' | 'approved' | 'rejected' | 'cancelled';
        last_sent_at?: string | null;
        email_sent_count?: number;
        order?: IOrder.IDetailOrderResponse | null;
        lineItems?: ILineItem.IDetailLineItemResponse[] | null;
        combiningPromotions?: ICombiningPromotion.IDetailCombiningPromotionResponse[] | null;
        additionalFees?: IAdditionalFee.IDetailAdditionalFeeResponse[] | null;
        approval?: ISaleOrderApproval.IResponse | null;
    }
    type IPublicLineItem = Omit<ILineItem.IDetailLineItemResponse, 'originPrice'>;
    interface IPublicResponse extends Omit<IResponse, 'originTotal' | 'created_by' | 'lineItems' | 'order' | 'approval' | 'template' | 'template_id' | 'terms'> {
        lineItems?: IPublicLineItem[] | null;
        order?: Omit<IOrder.IDetailOrderResponse, 'originTotal'> | null;
        template: ISaleOrderTemplate.IPublicTemplate | null;
        terms: string | null;
    }
    interface IPublicContact {
        phone?: string;
        email?: string;
    }
    interface IFindOnePublicInput {
        uuid: string;
        contact: IPublicContact;
    }
}

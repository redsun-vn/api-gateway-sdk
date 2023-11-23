import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export declare namespace ILineItem {
    interface IInputLineItem {
        product_id: number & tags.Type<'uint32'>;
        variant_id: number & tags.Type<'uint32'>;
        stock_take_id: number & tags.Type<'uint32'>;
        kds_area_id: number & tags.Type<'uint32'>;
        fulfillment_provider_id: number & tags.Type<'uint32'>;
        reward_id?: number & tags.Type<'uint32'>;
        imgae_id?: number & tags.Type<'uint32'>;
        kitchenProcessingStatus?: string;
        fulfillmentStatus?: string;
        isGiftcard: boolean;
        isReturn: boolean;
        isRequiredShipping: boolean;
        isPrioritize: boolean;
        refundable: boolean;
        taxable: boolean;
        variantTitle: string;
        title: string;
        sku: string;
        description?: string;
        note?: string;
        quantity: number;
        uomRatio: number;
        unitPrice: number;
        price: number;
        originPrice: number;
        gram: number;
        giftCardQuantity?: number;
        sequenece: number;
        taxCodes?: string[];
    }
    interface ICreateLineItem extends IInputLineItem {
        order_id?: number & tags.Type<'uint32'>;
        draf_order_id: number & tags.Type<'uint32'>;
    }
    interface ICreateLineItemKafka extends ICreateLineItem {
        shop_id: number & tags.Type<'uint32'>;
    }
    interface IUpdateLineItem {
        reward_id?: number;
        kitchenProcessingStatus?: string;
        fulfillmentStatus?: string;
        isGiftcard?: boolean;
        isReturn?: boolean;
        isRequiredShipping?: boolean;
        isPrioritize?: boolean;
        refundable?: boolean;
        taxable?: boolean;
        variantTitle?: string;
        title?: string;
        sku?: string;
        image?: string;
        description?: string;
        note?: string;
        quantity?: number;
        price?: number;
        gram?: number;
        fulfillableQuantity?: number;
        returnedQuantity?: number;
        shippedQuantity?: number;
        subTotal?: number;
        taxTotal?: number;
        originalTotal?: number;
        discountTotal?: number;
        paidTotal?: number;
        giftCardQuantity?: number;
        processedAt?: Date;
        completedAt?: Date;
        sequenece?: number;
        userId?: string;
    }
    interface IDetailLineItemResponse extends BaseResponse {
        shop_id: number | string | null;
        product_id: number | string | null;
        variant_id: number | string | null;
        stock_take_id: number | string | null;
        kds_area_id: number | string | null;
        fulfillment_provider_id: number | string | null;
        reward_id: number | string | null;
        order_id: number | string | null;
        draf_order_id: number | string | null;
        isGiftcard: boolean;
        isReturn: boolean;
        isRequiredShipping: boolean;
        isPrioritize: boolean;
        refundable: boolean;
        taxable: boolean;
        variantTitle: string;
        sku: string;
        title: string;
        description: string;
        note: string;
        kitchenProcessingStatus: string;
        fulfillmentStatus: string;
        image_id: string | number | null;
        quantity: number | string;
        price: number | string;
        originPrice: number | string;
        unitPrice: number | string;
        gram: number | string;
        fulfillableQuantity: number | string;
        returnedQuantity: number | string;
        shippedQuantity: number | string;
        subTotal: number | string;
        taxTotal: number | string;
        originalTotal: number | string;
        discountTotal: number | string;
        paidTotal: number | string;
        giftCardQuantity: number | string;
        processedAt: Date | string | null;
        completedAt: Date | string | null;
        sequenece: number | string;
    }
}

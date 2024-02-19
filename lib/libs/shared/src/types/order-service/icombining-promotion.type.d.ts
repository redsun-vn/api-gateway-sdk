import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IOrder } from './iorder.type';
import { IDrafOrder } from './idraf-order.type';
import { CombiningPromotionStatus, OrderCombiningPromotionType } from '../../enum';
export declare namespace ICombiningPromotion {
    interface ICreateCombiningPromotion {
        shop_id?: number & tags.Type<'uint32'>;
        program_id?: number & tags.Type<'uint32'>;
        order_id?: number & tags.Type<'uint32'>;
        draf_order_id?: number & tags.Type<'uint32'>;
        line_item_id?: number & tags.Type<'uint32'>;
        variant_x_id?: number & tags.Type<'uint32'>;
        variant_y_id?: number & tags.Type<'uint32'>;
        uuid?: string & tags.Format<'uuid'>;
        description?: string;
        discountCode?: string;
        value: number;
        amount: number;
        status?: CombiningPromotionStatus;
        type?: OrderCombiningPromotionType;
    }
    interface IUpdateCombiningPromotion extends Omit<Partial<ICreateCombiningPromotion>, 'shop_id' | 'uuid'> {
    }
    interface IDetailCombiningPromotionResponse extends BaseResponse {
        shop_id: number | string | null;
        order_id?: number | string | null;
        program_id?: number | string | null;
        draf_order_id?: number | string | null;
        line_item_id?: number | string | null;
        uuid?: string;
        description?: string;
        discountCode?: string;
        value: number | string;
        amount: number | string;
        status: CombiningPromotionStatus;
        type: OrderCombiningPromotionType;
        order?: IOrder.IDetailOrderResponse;
        drafOrder?: IDrafOrder.IDetailDrafOrderResponse;
    }
}

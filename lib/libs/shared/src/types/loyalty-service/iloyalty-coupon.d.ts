import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export declare namespace ILoyaltyCoupon {
    interface ILoyaltyCouponCreate {
        code?: string;
        program_id: number & tags.Type<'uint32'>;
        currencyCode?: string;
        points?: number;
        expirationDate?: string & tags.Format<'date-time'>;
        order_uuid?: string & tags.Format<'uuid'>;
        partner_uuid?: (string & tags.Format<'uuid'>) | null;
    }
    interface ILoyaltyCouponUpdate extends Omit<Partial<ILoyaltyCouponCreate>, 'program_id'> {
    }
    interface ILoyaltyCouponResponse extends BaseResponse {
        shop_id: number | string;
        program_id: number | string;
        currencyCode: string;
        points: number | null;
        code: string | null;
        expirationDate?: string | null;
        order_uuid: string | null;
        partner_uuid?: string | null;
    }
}

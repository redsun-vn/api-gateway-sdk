import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { CARD_TYPE, PAYMENT_CARD_STATUS } from '../../enum';
export declare namespace IPaymentCard {
    interface ICreate {
        branch_id?: number & tags.Type<'uint64'>;
        category_card_id: number & tags.Type<'uint64'>;
        payment_method_id: number & tags.Type<'uint64'>;
        partner_id?: number & tags.Type<'uint64'>;
        target?: string;
        target_id?: number & tags.Type<'uint64'>;
        type: string & CARD_TYPE;
        code?: string;
        referenceCode?: string;
        status?: string & PAYMENT_CARD_STATUS;
        name: string;
        note?: string;
        amount: number;
        currency?: string;
        taxNumber?: number;
    }
    interface IUpdate {
        status?: string & PAYMENT_CARD_STATUS;
        amount?: number;
        taxNumber?: number;
        note?: string;
        referenceCode?: string;
    }
    interface IResponse extends BaseResponse {
        active: boolean;
        shop_id: number | string;
        branch_id?: number | string | null;
        category_card_id?: number | string | null;
        payment_method_id: number | string;
        staff_id: number | string;
        partner_id?: number | string | null;
        target?: string | null;
        target_id?: number | string | null;
        referenceCode?: string | null;
        type: string;
        code: string;
        status: string;
        name: string | null;
        note: string | null;
        amount: number | string;
        currency: string;
        taxNumber: number | string;
        taxCode?: string | null;
        archivedDate?: string | null;
    }
}

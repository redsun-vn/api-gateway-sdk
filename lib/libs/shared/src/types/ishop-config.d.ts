import { tags } from 'typia';
import { BaseResponse } from './common.type';
export declare namespace IShopConfig {
    interface ICreate {
        supportEmail?: string & tags.Format<'email'>;
        technicalEmail?: string & tags.Format<'email'>;
        technicalPhone?: string & tags.Pattern<'^(0[0-9]{2})?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$'>;
        moneyFormat?: string;
        orderPrefix?: string;
        weightUnit?: string;
        timeZone?: string;
        termsOfService?: string;
        refundPolicy?: string;
        shippingPolicy?: string;
        privacyPolicy?: string;
        taxesIncluded?: boolean;
        available_price_book_ids?: string[];
        default_price_book_id?: number & tags.Type<'uint32'>;
        table_id?: number | string;
        room_id?: number & tags.Type<'uint32'>;
        branch_id: number & tags.Type<'uint32'>;
        staff_id?: number & tags.Type<'uint32'>;
        timeOpen?: string & tags.Pattern<'^(?:[01]?[0-9]|2[0-3]):[0-5]?[0-9](?::[0-5]?[0-9])?$'>;
        timeClose?: string & tags.Pattern<'^(?:[01]?[0-9]|2[0-3]):[0-5]?[0-9](?::[0-5]?[0-9])?$'>;
        dateStart?: string & tags.Format<'date'>;
        dateEnd?: string & tags.Format<'date'>;
    }
    interface IUpdate extends Partial<ICreate> {
    }
    interface IShopConfigResponse extends BaseResponse {
        shop_id: string;
        supportEmail?: string | null;
        technicalEmail?: string | null;
        technicalPhone?: string | null;
        moneyFormat?: string | null;
        orderPrefix?: string | null;
        weightUnit?: string | null;
        timeZone?: string | null;
        termsOfService?: string | null;
        refundPolicy?: string | null;
        shippingPolicy?: string | null;
        privacyPolicy?: string | null;
        taxesIncluded: boolean;
        table_id?: number | string | null;
        room_id?: number | string | null;
        branch_id?: number | string | null;
        staff_id?: number | string | null;
        timeOpen?: string | null;
        timeClose?: string | null;
        dateStart?: string | null;
        dateEnd?: string | null;
        available_price_book_ids?: string[] | null;
        default_price_book_id?: number | string | null;
    }
}

import { BaseResponse } from './common.type';
import { tags } from 'typia';
export declare namespace IPartnerAddress {
    enum PartnerAddressType {
        CONTACT = "contact",
        INVOICE = "invoice",
        DELIVERY = "delivery",
        PRIVATE = "private",
        OTHER = "other"
    }
    interface ICreate {
        partner_id: number;
        type: PartnerAddressType;
        function?: string;
        country?: string;
        first_name?: string;
        last_name?: string;
        phone?: string & tags.Pattern<'^(0[0-9]{2})?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$'>;
        province?: string;
        city?: string;
        state?: string;
        zipcode?: string;
        address1?: string;
        address2?: string;
        company?: string;
        note?: string;
    }
    type IUpdate = Partial<ICreate>;
    interface IPartnerAddressResponse extends BaseResponse {
        partner_id: number | string;
        type: string;
        function?: string | null;
        country?: string | null;
        first_name?: string | null;
        last_name?: string | null;
        phone?: string | null;
        province?: string | null;
        city?: string | null;
        state?: string | null;
        zipcode?: string | null;
        address1?: string | null;
        address2?: string | null;
        company?: string | null;
        note?: string | null;
    }
}

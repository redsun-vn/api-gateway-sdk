import { BaseResponse } from '../common.type';
export declare namespace IPartnerAddress {
    enum PartnerAddressType {
        CONTACT = "contact",
        INVOICE = "invoice",
        DELIVERY = "delivery",
        PRIVATE = "private",
        OTHER = "other"
    }
    interface ICreate {
        partner_id: string | number;
        type: PartnerAddressType;
        function?: string;
        uuid?: string;
        country?: string;
        first_name?: string;
        last_name?: string;
        phone?: string;
        province?: string;
        city?: string;
        state?: string;
        zipcode?: string;
        address1?: string;
        address2?: string;
        company?: string;
        note?: string;
        ward?: string;
        district?: string;
    }
    type IUpdate = Omit<Partial<ICreate>, 'partner_id'>;
    interface IPartnerAddressResponse extends BaseResponse {
        partner_id: number | string;
        type: string;
        uuid?: string | null;
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
        ward?: null | string;
        district?: null | string;
    }
    interface ICreateFromWebsite {
        type: PartnerAddressType;
        function?: string;
        uuid?: string;
        country?: string;
        first_name?: string;
        last_name?: string;
        phone?: string;
        province?: string;
        city?: string;
        state?: string;
        zipcode?: string;
        address1?: string;
        address2?: string;
        company?: string;
        note?: string;
        ward?: string;
        district?: string;
    }
    type IUpdateFromWebsite = Omit<Partial<ICreateFromWebsite>, 'uuid'>;
}

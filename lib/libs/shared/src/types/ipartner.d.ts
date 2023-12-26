import { tags } from 'typia';
import { BaseResponse } from './common.type';
import { IPartnerTag } from './ipartner-tag';
import { IPartnerAddress } from './ipartner-address';
export declare namespace IPartner {
    interface ICreate {
        branch_id?: number & tags.Type<'int32'>;
        user_id?: string;
        attachment_id?: number & tags.Type<'int32'>;
        uuid?: string;
        first_name?: string;
        last_name?: string;
        display_name?: string;
        email?: string & tags.Format<'email'>;
        phone?: string & tags.Pattern<'^(0[0-9]{2})?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$'>;
        company_name?: string;
        day_of_birth?: string & tags.Format<'date-time'>;
        code?: string;
        active?: boolean;
        orders_count?: number;
        accepts_marketing?: boolean;
        is_employee?: boolean;
        is_company?: boolean;
        is_customer?: boolean;
        is_supplier?: boolean;
        tax_code?: string;
        website?: string;
        note?: string;
        gender?: number & tags.Maximum<1>;
        tagIds?: string[];
    }
    type IUpdate = Partial<ICreate>;
    interface IPartnerResponse extends BaseResponse {
        shop_id: number | string;
        uuid?: string | null;
        branch_id?: number | string | null;
        created_by_id?: string | null;
        user_id?: number | string | null;
        attachment_id?: number | string | null;
        first_name?: string | null;
        last_name?: string | null;
        display_name?: string | null;
        email?: string | null;
        phone?: string | null;
        company_name?: string | null;
        day_of_birth?: string | null;
        code?: string | null;
        active: boolean;
        orders_count?: number | null;
        accepts_marketing: boolean;
        is_employee: boolean;
        is_company: boolean;
        is_customer: boolean;
        is_supplier: boolean;
        tax_code?: string | null;
        website?: string | null;
        note?: string | null;
        gender?: number | null;
        tags?: null | IPartnerTag.IPartnerTagResponse[];
        addresses?: null | IPartnerAddress.IPartnerAddressResponse;
    }
}

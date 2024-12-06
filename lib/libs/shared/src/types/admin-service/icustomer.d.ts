import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export declare namespace IAdminCustomer {
    interface ICreate {
        email?: (string & tags.Format<'email'>) | null;
        name?: string | null;
        phone?: string | null;
        country?: string | null;
        address1?: string | null;
        province?: string | null;
        district?: string | null;
        ward?: string | null;
        city?: string | null;
        zipcode?: string | null;
        socials?: Record<string, unknown>[] | null;
        note?: string | null;
        user_uuid?: (string & tags.Format<'uuid'>) | null;
        day_of_birth?: (string & tags.Format<'date-time'>) | null;
        avatar_id?: (number & tags.Type<'uint64'>) | null;
        responsible_id?: (number & tags.Type<'uint64'>) | null;
        gender?: (number & tags.Maximum<1>) | null;
    }
    interface IUpdate extends Partial<ICreate> {
    }
    interface IResponse extends BaseResponse {
        email?: string | null;
        name?: string | null;
        phone?: string | null;
        country?: string | null;
        address1?: string | null;
        province?: string | null;
        district?: string | null;
        ward?: string | null;
        city?: string | null;
        zipcode?: string | null;
        socials?: Record<string, unknown>[] | null;
        note?: string | null;
        user_uuid?: string | null;
        day_of_birth?: string | null;
        avatar_id?: number | string | null;
        responsible_id?: number | string | null;
        gender?: number | string | null;
    }
}

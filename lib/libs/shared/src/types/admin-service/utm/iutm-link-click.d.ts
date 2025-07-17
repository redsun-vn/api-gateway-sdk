import { BaseResponse } from '../../common.type';
export declare namespace IUtmLinkClick {
    interface ICreate {
        utm_link_code?: string;
        ip?: string;
        country?: string;
        user_agent?: string;
    }
    type IUpdate = Partial<ICreate>;
    interface IResponse extends BaseResponse {
        utm_link_id: number | string;
        ip?: string | null;
        country?: string | null;
        user_agent?: string | null;
    }
}

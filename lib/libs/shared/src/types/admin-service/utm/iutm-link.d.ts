import { tags } from 'typia';
import { AdminBaseResponse as BaseResponse } from '../../common.type';
export declare namespace IUtmLink {
    interface ICreate {
        origin_url: string & tags.Format<'url'>;
        tracking_base_url: string & tags.Format<'url'>;
        utm_medium_id: number & tags.Type<'uint64'>;
        utm_source_id: number & tags.Type<'uint64'>;
        utm_campaign_id: number & tags.Type<'uint64'>;
        active?: boolean;
        ref_code?: string;
        utm_term?: string;
        utm_content?: string;
        description?: string;
        name?: string;
        createdById?: number;
        companyId?: string;
    }
    interface IUpdate extends Partial<ICreate> {
        updatedById?: number;
    }
    interface IResponse extends BaseResponse {
        active: boolean;
        name?: string | null;
        code: string;
        click_count: number | string;
        description?: string | null;
        origin_url: string;
        redirect_url: string;
        tracking_url: string;
        utm_medium_id: number | string;
        utm_source_id: number | string;
        utm_campaign_id: number | string;
        utm_term?: string | null;
        utm_content?: string | null;
        ref_code?: string | null;
    }
}

import { tags } from 'typia';
import { CMSBaseResponse, SEOBase } from '../common.type';
import { IWebsite } from './iwebsite';
export declare namespace ICMSPage {
    interface ICreateReq extends SEOBase {
        isPublished: boolean;
        title: string;
        description?: string | null;
        content?: string | null;
        attachment_id?: number & tags.Type<'uint64'>;
        website_ids?: string[] | null;
        themeId?: string | null;
        isHome?: boolean;
        isIndex?: boolean;
        type?: string | null;
        template?: string | null;
    }
    interface ICreate extends ICreateReq {
        shop_id?: (number & tags.Type<'uint64'>) | null;
        author_id?: number & tags.Type<'uint64'>;
        updated_by_id?: number & tags.Type<'uint64'>;
    }
    interface IUpdateReq extends Partial<ICreateReq> {
    }
    interface IUpdate extends IUpdateReq {
        id: string;
        updated_by_id?: number & tags.Type<'uint64'>;
    }
    interface IResponse extends CMSBaseResponse {
        type?: string | null;
        themeId?: string | null;
        isHome?: boolean;
        template?: string | null;
        websites?: IWebsite.IResponse[] | null;
    }
}

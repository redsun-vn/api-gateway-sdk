import { tags } from 'typia';
import { CMSBaseResponse, SEOBase } from '../common.type';
import { ICMSCategory, ICMSTag } from './cms.icategory';
import { IWebsite } from './iwebsite';
export declare namespace ICMSPost {
    interface ICreateReq extends SEOBase {
        title: string;
        description?: string | null;
        content?: string | null;
        attachment_id?: number & tags.Type<'uint64'>;
        category_ids?: number[] | string[];
        tag_ids?: number[] | string[];
        slug?: string;
        website_ids?: string[] | null;
        isIndex?: boolean;
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
        categories?: ICMSCategory.IResponse[] | null;
        tags?: ICMSTag.IResponse[] | null;
        websites?: IWebsite.IResponse[] | null;
    }
}

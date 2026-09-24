import { tags } from 'typia';
import { SEOBaseResponse, SEOBase } from '../common.type';
import { IWebsite } from './iwebsite';
export declare namespace ICMSCategory {
    interface ICreateReq extends SEOBase {
        name: string;
        isActive: boolean;
        description?: string | null;
        attachment_id?: (number & tags.Type<'uint64'>) | null;
        parent_uuid?: string | null;
        website_ids?: string[] | null;
        slug?: string;
        featuredOrder?: (number & tags.Type<'int32'>) | null;
    }
    interface ICreate extends ICreateReq {
        shop_id?: (number & tags.Type<'uint64'>) | null;
    }
    interface IUpdateReq extends Partial<ICreateReq> {
    }
    interface IUpdate extends IUpdateReq {
        id: string;
    }
    interface IResponse extends SEOBaseResponse {
        shop_id?: number | string | null;
        name: string;
        slug: string;
        isActive: boolean;
        description?: string | null;
        parent_uuid?: string | null;
        attachment_id?: number | string | null;
        websites?: IWebsite.IResponse[] | null;
        parent?: IResponse;
        featuredOrder?: number | null;
    }
}
export declare namespace ICMSTag {
    interface ICreateReq extends SEOBase {
        name: string;
        isActive: boolean;
        description?: string | null;
        attachment_id?: (number & tags.Type<'uint64'>) | null;
        website_ids?: string[] | null;
        slug?: string;
    }
    interface ICreate extends ICreateReq {
        shop_id?: (number & tags.Type<'uint64'>) | null;
    }
    interface IUpdateReq extends Partial<ICreateReq> {
    }
    interface IUpdate extends IUpdateReq {
        id: string;
    }
    interface IResponse extends SEOBaseResponse {
        shop_id?: number | string | null;
        name: string;
        slug: string;
        isActive: boolean;
        description?: string | null;
        attachment_id?: number | string | null;
        websites?: IWebsite.IResponse[] | null;
    }
}

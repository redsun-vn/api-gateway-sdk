import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export declare namespace ICMSMenu {
    type TItemType = 'home' | 'page' | 'post' | 'blog_category' | 'blog_tag' | 'product' | 'product_category' | 'product_tag' | 'system' | 'custom' | 'heading' | 'divider';
    type TUrlStatus = 'none' | 'resolved' | 'broken' | 'advisory';
    type TDisplayMode = 'dropdown' | 'mega';
    interface IMegaConfig {
        columns: number & tags.Type<'uint32'> & tags.Minimum<2> & tags.Maximum<4>;
        imagePosition: 'top' | 'left' | 'none';
        showDescription: boolean;
    }
    interface IItemSettings {
        icon?: string | null;
        badge?: string | null;
        cssClass?: string | null;
    }
    interface ICreateItem {
        id?: string & tags.Format<'uuid'>;
        name: string;
        type: TItemType;
        refId?: string | null;
        refSlug?: string | null;
        url?: string | null;
        urlStatus?: TUrlStatus;
        sequence: number;
        newWindow: boolean;
        parentUuid?: (string & tags.Format<'uuid'>) | null;
        imageId?: number | string | null;
        description?: string | null;
        displayMode?: TDisplayMode;
        megaConfig?: IMegaConfig | null;
        settings?: IItemSettings | null;
        isMegaMenu?: boolean;
        megaMenuContent?: string | null;
        megaMenuClasses?: string | null;
    }
    interface IItemResponse extends BaseResponse {
        id: string;
        name: string;
        type: TItemType;
        refId?: string | null;
        refSlug?: string | null;
        url?: string | null;
        urlStatus: TUrlStatus;
        sequence: number;
        newWindow: boolean;
        parentUuid?: string | null;
        imageId?: number | string | null;
        description?: string | null;
        displayMode: TDisplayMode;
        megaConfig?: IMegaConfig | null;
        settings?: IItemSettings | null;
        isMegaMenu?: boolean;
        megaMenuContent?: string | null;
        megaMenuClasses?: string | null;
    }
    interface ICreateReq {
        name: string;
        description?: string | null;
        website_uuid: string;
        menuClasses?: string | null;
        menuWrapId?: string | null;
        items?: ICreateItem[];
    }
    interface ICreate extends ICreateReq {
        shop_id?: (number & tags.Type<'uint64'>) | null;
    }
    interface IUpdateReq extends Omit<Partial<ICreateReq>, 'website_uuid'> {
    }
    interface IUpdate extends IUpdateReq {
        id: string;
        shop_id?: (number & tags.Type<'uint64'>) | null;
    }
    interface IDelete {
        id: string;
        shop_id?: (number & tags.Type<'uint64'>) | null;
    }
    interface IFindOne {
        id: string;
    }
    interface IEnsureDefaultReq {
        website_uuid: string;
    }
    interface IEnsureDefault extends IEnsureDefaultReq {
        shop_id?: (number & tags.Type<'uint64'>) | null;
    }
    interface IEnsureDefaultResponse {
        created: boolean;
        menu: IResponse;
    }
    interface IFindByHandleQuery {
        website_uuid: string;
        handle: string;
    }
    interface IResponse extends BaseResponse {
        shop_id?: number | string | null;
        name: string;
        handle: string;
        description?: string | null;
        website_uuid: string;
        menuClasses?: string | null;
        menuWrapId?: string | null;
        items?: IItemResponse[] | null;
    }
    interface IPublicItem {
        id: string;
        name: string;
        type: TItemType;
        refId: string | null;
        refSlug: string | null;
        url: string | null;
        urlStatus: TUrlStatus;
        sequence: number;
        newWindow: boolean;
        parentUuid: string | null;
        imageId: string | null;
        description: string | null;
        displayMode: TDisplayMode;
        megaConfig: IMegaConfig | null;
        settings: IItemSettings | null;
        children: IPublicItem[];
    }
    interface IPublicResponse {
        id: string;
        createdAt: Date | string;
        updatedAt: Date | string;
        shop_id: number | string | null;
        website_uuid: string;
        name: string;
        handle: string;
        description: string | null;
        menuClasses: string | null;
        menuWrapId: string | null;
        schemaVersion: number;
        maxDepth: number;
        items: IPublicItem[];
    }
}

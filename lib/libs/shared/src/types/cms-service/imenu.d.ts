import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export declare namespace ICMSMenu {
    interface ICreateItem {
        id?: string & tags.Format<'uuid'>;
        name: string;
        url: string;
        sequence: number;
        newWindow: boolean;
        parentUuid?: string & tags.Format<'uuid'>;
        isMegaMenu: boolean;
        megaMenuContent?: string | null;
        megaMenuClasses?: string | null;
    }
    interface IItemResponse extends BaseResponse {
        id: string;
        name: string;
        url: string;
        sequence: number;
        newWindow: boolean;
        parentUuid?: string | null;
        isMegaMenu: boolean;
        megaMenuContent?: string | null;
        megaMenuClasses?: string | null;
    }
    interface ICreateReq {
        name: string;
        website_uuid: string;
        menuClasses?: string | null;
        menuWrapId?: string | null;
        items?: ICreateItem[];
    }
    interface ICreate extends ICreateReq {
        shop_id?: (number & tags.Type<'uint64'>) | null;
    }
    interface IUpdateReq extends Omit<Partial<ICreate>, 'shop_id' | 'website_uuid'> {
    }
    interface IUpdate extends IUpdateReq {
        id: string;
    }
    interface IResponse extends BaseResponse {
        shop_id?: number | string | null;
        name: string;
        website_uuid: string;
        menuClasses?: string | null;
        menuWrapId?: string | null;
        items?: IItemResponse[] | null;
    }
}

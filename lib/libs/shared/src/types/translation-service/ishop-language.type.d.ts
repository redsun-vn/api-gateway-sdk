import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export declare namespace IShopLanguage {
    interface ICreate {
        shop_id: number & tags.Type<'uint64'>;
        locale: string & tags.MaxLength<10>;
        code: string & tags.MaxLength<5>;
        isDefault?: boolean;
        isActive?: boolean;
    }
    interface ICreateReq extends ICreate {
    }
    interface IUpdate extends Omit<Partial<ICreate>, 'shop_id'> {
        id: string & tags.Format<'uuid'>;
    }
    interface IUpdateReq extends ICreateReq {
    }
    interface IResponse extends Omit<BaseResponse, 'deletedAt' | 'createdById' | 'updatedById'> {
        shop_id: number | string;
        locale: string;
        code: string;
        isDefault: boolean;
        isActive: boolean;
    }
}

import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export declare namespace ITranslation {
    interface ICreate {
        shop_id: number & tags.Type<'uint64'>;
        translatableType: string & tags.MaxLength<32>;
        translatableId: number & tags.Type<'uint64'>;
        locale: string & tags.MaxLength<10>;
        content: Record<string, unknown>;
    }
    interface ICreateReq extends Omit<ICreate, 'shop_id'> {
    }
    interface IUpdate extends Partial<ICreate> {
        id?: string & tags.Format<'uuid'>;
    }
    interface IUpdateReq extends Omit<IUpdate, 'id'> {
    }
    interface IResponse extends BaseResponse {
        shop_id: number | string;
        translatableType: string;
        translatableId: number | string;
        locale: string;
        content: Record<string, unknown>;
    }
}

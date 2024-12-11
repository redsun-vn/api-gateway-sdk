import { tags } from 'typia';
import { BaseResponse } from '../../common.type';
export declare namespace IApplicationController {
    interface ICreate {
        name: string;
        path: string;
        description?: string;
        isActive?: boolean;
        appId?: number;
        categoryControllerId?: number & tags.Type<'uint64'>;
    }
    interface IUpdate extends Partial<ICreate> {
    }
    interface IResponse extends BaseResponse {
        name: string;
        path: string;
        description?: string | null;
        appId?: number | string | null;
        isActive: boolean;
        categoryControllerId?: number | string | null;
    }
}

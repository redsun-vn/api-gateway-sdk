import { tags } from 'typia';
import { BaseResponse } from '../../common.type';
import { IApplication } from './application';
import { IApplicationCategory } from './category';
export declare namespace IApplicationMain {
    interface ICreate {
        name: string;
        description?: string;
        content?: string;
        icon?: string;
        previewId?: (number & tags.Type<'uint64'>) | null;
        appCategoryId?: (number & tags.Type<'uint64'>) | null;
        appIds?: number[] | [];
        code?: string;
        color?: string;
        sequence?: number & tags.Type<'uint64'>;
        fullName?: string;
        isSystem?: boolean;
        isActive?: boolean;
    }
    interface IUpdate extends Partial<ICreate> {
    }
    interface IResponse extends BaseResponse {
        name: string;
        description?: string | null;
        content?: string | null;
        icon?: string | null;
        previewId?: number | string | null;
        appCategoryId?: number | string | null;
        category?: IApplicationCategory.IResponse | null;
        applications?: IApplication.IResponse[] | null;
        code?: string | null;
        color?: string | null;
        sequence?: number | string | null;
        fullName?: string | null;
        isSystem?: boolean | null;
        isActive?: boolean | null;
    }
}

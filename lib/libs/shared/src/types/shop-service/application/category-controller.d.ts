import { BaseResponse } from '../../common.type';
import { IApplicationController } from './controller';
export declare namespace IApplicationCategoryController {
    interface ICreate {
        name: string;
        description?: string;
        icon?: string;
        isActive?: boolean;
    }
    interface IUpdate extends Partial<ICreate> {
    }
    interface IResponse extends BaseResponse {
        name: string;
        description?: string | null;
        isActive?: boolean;
        icon?: string | null;
        controllers?: IApplicationController.IResponse[] | null;
    }
}

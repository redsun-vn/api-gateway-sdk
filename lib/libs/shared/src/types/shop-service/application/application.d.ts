import { tags } from 'typia';
import { IApplicationMain } from './main';
import { IApplicationController } from './controller';
import { IApplicationPlan } from './application-plan';
import { BaseResponse } from '../../common.type';
export declare namespace IApplication {
    interface ICreate {
        name: string;
        slug: string;
        version?: string;
        description?: string;
        content?: string;
        isActive?: boolean;
        isInMaintenance?: boolean;
        price?: number;
        salePrice?: number;
        icon?: string;
        previewId?: number & tags.Type<'uint64'>;
        appDependencies?: number[] | null;
        mainId: number & tags.Type<'uint64'>;
        controllerIds?: number[] | null;
        code?: string;
        color?: string;
        sequence?: number;
        isFeatured?: boolean;
        isPopular?: boolean;
        rating?: number;
        totalRating?: number;
    }
    interface IUpdate extends Partial<ICreate> {
    }
    interface IResponse extends BaseResponse {
        name: string;
        slug: string;
        version?: string | null;
        description?: string | null;
        content?: string | null;
        isActive: boolean;
        isInMaintenance: boolean;
        price?: number | string | null;
        salePrice?: number | string | null;
        icon?: string | null;
        previewId?: number | string | null;
        appDependencies?: string[] | null;
        mainId?: number | string | null;
        main?: IApplicationMain.IResponse | null;
        controllers?: IApplicationController.IResponse[] | null;
        appPlans?: IApplicationPlan.IResponse[] | null;
        code?: string | null;
        color?: string | null;
        sequence?: number | string | null;
        isFeatured?: boolean | null;
        isPopular?: boolean | null;
        rating?: number | string | null;
        totalRating?: number | string | null;
    }
}

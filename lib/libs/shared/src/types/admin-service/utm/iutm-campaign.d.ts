import { BaseResponse } from '../../common.type';
import { IUtmTag } from './iutm-tag';
export declare namespace IUtmCampaign {
    interface ICreate {
        active?: boolean;
        title: string;
        description?: string;
        createdById?: number;
        tagIds?: number[] | null;
    }
    interface IUpdate extends Partial<ICreate> {
        updatedById?: number;
    }
    interface IResponse extends BaseResponse {
        active: boolean;
        title: string;
        description?: string | null;
        slug: string;
        tags?: IUtmTag.IResponse[] | null;
    }
}

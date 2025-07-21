import { AdminBaseResponse as BaseResponse } from '../../common.type';
export declare namespace IUtmMedium {
    interface ICreate {
        active?: boolean;
        name: string;
        description?: string;
        createdById?: number;
        companyId?: string;
    }
    interface IUpdate extends Partial<ICreate> {
        updatedById?: number;
    }
    interface IResponse extends BaseResponse {
        active: boolean;
        name: string;
        slug: string;
        description?: string | null;
    }
}

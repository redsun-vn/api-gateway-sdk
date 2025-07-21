import { AdminBaseResponse as BaseResponse } from '../../common.type';
export declare namespace IUtmTag {
    interface ICreate {
        active?: boolean;
        name: string;
        color?: string;
        createdById?: number;
        companyId?: string;
    }
    interface IUpdate extends Partial<ICreate> {
        updatedById?: number;
    }
    interface IResponse extends BaseResponse {
        active: boolean;
        name: string;
        color?: string | null;
    }
}

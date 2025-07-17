import { BaseResponse } from '../../common.type';
export declare namespace IUtmTag {
    interface ICreate {
        active?: boolean;
        name: string;
        color?: string;
        createdById?: number;
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

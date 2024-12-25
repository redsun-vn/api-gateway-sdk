import { BaseResponse } from '../../common.type';
export declare namespace ITicketCategory {
    interface ICreate {
        name: string;
        active: boolean;
        description?: string;
    }
    type IUpdate = Partial<ICreate>;
    interface IResponse extends BaseResponse {
        name: string;
        active: boolean;
        description: string | null;
    }
}

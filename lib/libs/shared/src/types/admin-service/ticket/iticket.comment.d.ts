import { AdminBaseResponse as BaseResponse } from '../../common.type';
import { IAdminUser } from '../iuser';
export declare namespace ITicketComment {
    interface ICreate {
        content: string;
        ticketId: number;
        parentId?: number;
        authorId?: number;
        companyId?: string;
    }
    type IUpdate = Partial<ICreate>;
    interface IResponse extends BaseResponse {
        content: string;
        ticketId: number | string;
        parentId?: number | string | null;
        authorId?: number | string | null;
        author?: IAdminUser.IResponse;
        parent?: IResponse;
        children?: IResponse[];
        childCount: number;
    }
}

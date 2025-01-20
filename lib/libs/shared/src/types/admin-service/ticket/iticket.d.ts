import { BaseResponse } from '../../common.type';
import { IAdminCustomer } from '../icustomer';
import { IAdminUser } from '../iuser';
import { ITicketCategory } from './iticket.category';
export declare namespace ITicket {
    interface ICreate {
        title: string;
        description?: string;
        categoryId: number;
        departmentId?: number;
        assigneeId?: number;
        priority?: string & ('low' | 'medium' | 'high');
        createdBy: number;
        customerId?: number;
        creatorId?: number;
        assigneesIds?: number[];
        shopAssignId?: number;
    }
    interface IUpdate extends Partial<ICreate> {
        status?: string;
    }
    interface IResponse extends BaseResponse {
        title: string;
        description: string | null;
        firstResponseTime: string | null;
        lastResponseTime: string | null;
        closedAt: string | null;
        shopAssignId?: number | string | null;
        categoryId?: number | string | null;
        customerId?: number | string | null;
        creatorId?: number | string | null;
        closedById?: number | string | null;
        creator?: IAdminUser.IResponse | null;
        closedBy?: IAdminUser.IResponse | null;
        assignees?: IAdminUser.IResponse[];
        departmentId?: number | string | null;
        status: string;
        priority: string;
        category?: ITicketCategory.IResponse | null;
        customer?: IAdminCustomer.IResponse | null;
    }
}

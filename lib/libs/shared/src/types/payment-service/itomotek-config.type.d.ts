import { BaseResponse } from '../common.type';
export declare namespace ITomotekConfig {
    interface ICreate {
        branch_id: number;
        fullName: string;
        phone: string;
        address: string;
        name: string;
        bankAccountName: string;
        bankAccount: string;
        bankNumber: string;
    }
    interface IUpdate {
        partnerId?: number;
        token?: string;
        bankAccountName?: string;
        bankAccount?: string;
        bankNumber?: string;
    }
    interface IResponse extends BaseResponse {
        shop_id: number | string;
        branch_id: number | string;
        workspaceId: number | string;
        partnerId: number | string;
        token: string;
        bankAccountName: string;
        bankAccount: string;
        bankNumber: string;
        currency: string;
    }
}

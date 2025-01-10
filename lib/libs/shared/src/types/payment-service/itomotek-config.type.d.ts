import { BaseResponse } from '../common.type';
export declare namespace ITomotekConfig {
    interface ICreate {
        active?: boolean;
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
        active?: boolean;
        name?: string;
        fullName?: string;
        phone?: string;
    }
    interface IResponse extends BaseResponse {
        shop_id: number | string;
        branch_id: number | string;
        workspaceId: number | string;
        partnerId: number | string;
        active?: boolean | null;
        name?: string;
        fullName?: string;
        phone?: string | null;
        address?: string | null;
        token: string;
        bankAccountName: string;
        bankAccount: string;
        bankNumber: string;
        currency: string;
    }
}

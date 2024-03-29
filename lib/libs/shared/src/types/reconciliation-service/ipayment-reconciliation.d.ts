import { BaseResponse } from '../common.type';
export declare namespace IPaymentReconciliation {
    interface IResponse extends BaseResponse {
        code: string;
        shop_id: number | string;
        staff_id: number | string;
        reconciliation_id: number | string;
        name?: string | null;
        description?: string | null;
        type: string;
        method: string;
        accountBankNumber: string;
        accountBankName: string;
        accountBankCode: string;
        status: string;
        amount: number | string;
        succeedAtt?: string | null;
        failedAt?: string | null;
    }
}

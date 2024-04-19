import { tags } from 'typia';
import { PAYMENT_RECONCILIATION_STATUS } from '../../enum';
import { BaseResponse } from '../common.type';
export declare namespace IPaymentReconciliation {
    interface IAdminUpdate {
        status?: string & (PAYMENT_RECONCILIATION_STATUS.PROCESSING | PAYMENT_RECONCILIATION_STATUS.PROCEED);
    }
    interface IAdminCancel {
        cancelReason: string;
    }
    interface IShopUpdate {
        bank_account_id?: number & tags.Type<'uint64'>;
    }
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
        bankBin?: string | null;
        status: string;
        amount: number | string;
        succeedAtt?: string | null;
        failedAt?: string | null;
    }
}

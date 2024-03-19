import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { RECONCILIATION_STATUS_ENUM } from '../../enum';
import { ITransactionReconciliation } from './itransaction-reconciliation';
export declare namespace IReconciliation {
    interface ICreate {
        shipping_method_id: number & tags.Type<'uint64'>;
        note?: string;
    }
    interface IUpdate {
        status?: string & RECONCILIATION_STATUS_ENUM.CHECKING;
        note?: string;
    }
    interface ICancel {
        cancelReason: string;
    }
    interface IRelease {
        accountBankNumber: string;
        accountBankName: string;
        accountBankCode: string;
    }
    interface IResponse extends BaseResponse {
        code: string;
        status: string;
        shop_id: number | string;
        staff_id: number | string;
        shipping_method_id: number | string;
        note?: string | null;
        cancelReason?: string | null;
        cancelled_by?: string | number | null;
        cancelledAt?: string | null;
        transactionReconciliations?: ITransactionReconciliation.IResponse[];
    }
}

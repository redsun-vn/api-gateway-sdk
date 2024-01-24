import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IAdminReconciliationItem } from './iadmin-reconciliation-item';
import { ADMIN_RECONCILIATION_STATUS_ENUM } from '../../enum';
export declare namespace IAdminReconciliation {
    interface ICreate {
        shipping_method_id: number & tags.Type<'uint32'>;
        note?: string;
        items: IFulfillmentReconciliation[];
    }
    interface IFulfillmentReconciliation {
        fulfillment_id: number & tags.Type<'uint32'>;
    }
    interface IUpdate {
        status?: string & ADMIN_RECONCILIATION_STATUS_ENUM.CHECKING;
        note?: string;
    }
    interface ICancel {
        cancelReason: string;
    }
    interface IResponse extends BaseResponse {
        staff_id: number | string;
        shipping_method_id: number | string;
        status: string;
        note?: string | null;
        code: string;
        release_by?: string | number | null;
        cancelReason?: string | null;
        cancelled_by?: string | number | null;
        cancelledAt?: string | null;
        items?: IAdminReconciliationItem.IResponse[];
    }
}

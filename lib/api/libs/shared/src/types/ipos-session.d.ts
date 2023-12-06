import { tags } from 'typia';
import { BaseResponse } from './common.type';
export declare namespace IPosSession {
    enum POSSessionState {
        OPENING = "opening",
        OPENED = "opened",
        CLOSING = "closing",
        CLOSED = "closed"
    }
    interface ICreate {
        staff_id: number & tags.Type<'int32'>;
        name?: string & tags.Format<'uuid'>;
        pos_config_id: number & tags.Type<'int32'>;
        branch_id: number & tags.Type<'int32'>;
        currencyCode?: string;
        state?: POSSessionState;
        starAt: string & tags.Format<'date-time'>;
        stopAt: string & tags.Format<'date-time'>;
        openingNotes?: string;
        hasCashControl?: boolean;
        orderCount?: number;
        cashRegisterBalanceEndReal?: number;
        cashRegisterBalanceStart?: number;
        cashRegisterTotalEntryEncoding?: number;
        cashRegisterBalanceEnd?: number;
        cashRegisterDifference?: number;
        cashRealTransaction?: number;
        totalPaymentsAmount?: number;
        rescue?: boolean;
    }
    interface IUpdate extends Omit<Partial<ICreate>, 'pos_config_id'> {
    }
    interface IPosSessionResponse extends BaseResponse {
        staff_id: string | number;
        pos_config_id: string | number;
        name?: string | null;
        shop_id: number | string;
        branch_id: number | string;
        currencyCode?: string;
        state: POSSessionState;
        starAt: string;
        stopAt: string;
        openingNotes?: null | string;
        hasCashControl?: null | boolean;
        orderCount?: null | number;
        cashRegisterBalanceEndReal?: null | number;
        cashRegisterBalanceStart?: null | number;
        cashRegisterTotalEntryEncoding?: null | number;
        cashRegisterBalanceEnd?: null | number;
        cashRegisterDifference?: null | number;
        cashRealTransaction?: null | number;
        totalPaymentsAmount?: null | number;
        rescue?: null | boolean;
    }
}

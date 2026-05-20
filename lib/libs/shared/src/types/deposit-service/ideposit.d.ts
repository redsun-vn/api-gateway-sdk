import { BaseResponse } from '../common.type';
export declare namespace IDeposit {
    enum DepositKind {
        BOOKING = "booking",
        SECURITY = "security",
        PREPAYMENT = "prepayment"
    }
    enum DepositStatus {
        PENDING = "pending",
        PARTIALLY_RECEIVED = "partially_received",
        RECEIVED = "received",
        IN_USE = "in_use",
        CONSUMED = "consumed",
        REFUNDED = "refunded",
        FORFEITED = "forfeited",
        EXPIRED = "expired",
        CANCELLED = "cancelled"
    }
    enum DepositPaymentMethod {
        CASH = "cash",
        BANK_TRANSFER = "bank_transfer",
        VNPAY = "vnpay",
        MOMO = "momo",
        ZALOPAY = "zalopay",
        CARD = "card",
        CHANNEL_COLLECTED = "channel_collected"
    }
    type DepositTransactionType = 'receive' | 'apply' | 'refund' | 'forfeit' | 'adjust' | 'reverse';
    type DepositTransactionTxStatus = 'pending' | 'committed' | 'reversed';
    interface ICreate {
        target_type: string;
        target_id: string | number;
        amount?: number;
        kind?: DepositKind;
        payment_method: DepositPaymentMethod;
        expected_revenue?: number;
        nights?: number;
        first_night_rate?: number;
        party_size?: number;
        policy_id?: string | number;
        start_time?: string;
        expires_at?: string;
        note?: string;
        stage_sequence?: number;
        parent_deposit_id?: string | number;
        idempotency_key?: string;
    }
    interface IConfirmReceived {
        amount?: number;
        received_at?: string;
        reference?: string;
        idempotency_key?: string;
    }
    interface IApplySelection {
        deposit_id: string | number;
        amount: number;
    }
    interface IApplyToOrder {
        order_id: string | number;
        order_outstanding: number;
        target_type: string;
        target_id: string | number;
        mode: 'auto' | 'manual';
        selections?: IApplySelection[];
        idempotency_key?: string;
    }
    interface IRefund {
        amount?: number;
        method: DepositPaymentMethod;
        reason?: string;
        idempotency_key?: string;
    }
    interface IForfeit {
        amount?: number;
        reason: string;
    }
    interface ICancel {
        reason?: string;
    }
    interface IFindByTarget {
        target_type: string;
        target_id: string;
    }
    interface IDepositResponse extends BaseResponse {
        code: string;
        target_type: string;
        target_id: string | number;
        kind: DepositKind;
        parent_deposit_id: string | number | null;
        stage_sequence: number | null;
        amount: string | number;
        currency: string;
        remaining_amount: string | number;
        payment_method: DepositPaymentMethod;
        payment_request_id: string | number | null;
        status: DepositStatus;
        received_at: string | null;
        expires_at: string | null;
        policy_id: string | number | null;
        policy_snapshot: Record<string, unknown>;
        note: string | null;
    }
    interface IDepositTransactionResponse extends BaseResponse {
        deposit_id: string | number;
        type: DepositTransactionType;
        amount: string | number;
        tx_status: DepositTransactionTxStatus;
        order_id: string | number | null;
        refund_method: DepositPaymentMethod | null;
        payment_request_id: string | number | null;
        reason: string | null;
        idempotency_key: string | null;
        performed_by: string | number | null;
        performed_at: string;
        committed_at: string | null;
        resulting_remaining_amount: string | number;
        resulting_status: DepositStatus;
    }
    interface IDepositSummary {
        total_amount: number;
        total_remaining: number;
        total_applied: number;
        total_refunded: number;
        total_forfeited: number;
        deposits: IDepositResponse[];
    }
    interface IApplyResult {
        applied: Array<{
            deposit_id: string | number;
            amount: number;
            transaction_id: string | number;
        }>;
        order_outstanding_after: number;
    }
}

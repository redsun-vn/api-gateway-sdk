import { tags } from 'typia';
export declare namespace ILeaveLedger {
    interface ILedgerEntryResponse {
        id: number | string;
        shop_id: number | string;
        staff_id: number | string;
        employment_episode: number;
        quota_key: number | string;
        period_year: number;
        period_month: number;
        leave_type_id?: number | string | null;
        entry_type: string;
        days: number | string;
        effective_date: string;
        source_type: string;
        source_id?: number | string | null;
        reversal_of_id?: number | string | null;
        note?: string | null;
        created_by_id?: string | null;
        createdAt: string;
    }
    interface IListQuery {
        staffId: string;
        page?: number;
        limit?: number;
        periodYear?: number;
        quotaKey?: string;
    }
    interface IListResponse {
        items: ILedgerEntryResponse[];
        total: number;
        page: number;
        limit: number;
    }
    interface IBalanceQuery {
        staffId: string;
        quotaKey?: string;
        periodYears?: number[];
    }
    interface IMyLedgerQuery {
        page?: number;
        limit?: number;
        periodYear?: number;
        quotaKey?: string;
    }
    interface IMyBalanceQuery {
        quotaKey?: string;
        periodYears?: number[];
    }
    interface IBalanceRow {
        staff_id: number | string;
        employment_episode: number;
        quota_key: number | string;
        period_year: number;
        accrual: number;
        usage: number;
        adjustment: number;
        expiry: number;
        balance: number;
        is_open: boolean;
    }
    interface IBalanceResponse {
        items: IBalanceRow[];
    }
    interface IBalanceBulkBody {
        staff_ids: (number | string)[] & tags.MaxItems<100>;
        quota_key?: string;
        period_years?: number[];
    }
    interface IAdjustmentBody {
        staff_id: string;
        period_year: number & tags.Type<'int32'>;
        days: number;
        quota_key?: string;
        note: string & tags.MinLength<1> & tags.MaxLength<500>;
        effective_date?: string;
        idempotency_key: string & tags.MinLength<8> & tags.MaxLength<100>;
    }
    interface IAdjustmentResult {
        created: boolean;
        staff_id: number | string;
        period_year: number;
        quota_key: number | string;
        balance: number;
    }
    interface INegativeBalanceQuery {
        period_year?: number;
        page?: number;
        limit?: number;
    }
    interface INegativeBalanceRow {
        staff_id: number | string;
        employment_episode: number;
        quota_key: number | string;
        period_year: number;
        balance: number;
    }
    interface INegativeBalanceResponse {
        items: INegativeBalanceRow[];
        total: number;
        page: number;
        limit: number;
    }
}

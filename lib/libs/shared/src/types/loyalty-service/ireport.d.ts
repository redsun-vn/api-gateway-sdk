import { BaseResponse } from '../common.type';
export declare namespace IReportLoyalty {
    interface IDateRangeFilter {
        start_date?: string;
        end_date?: string;
    }
    interface IReportFilter extends IDateRangeFilter {
        shop_id: string;
        partner_id?: string;
        program_id?: string;
        program_type?: string;
        transaction_type?: string;
        level_id?: string;
        page?: string;
        limit?: string;
    }
    interface ISummaryStatistics {
        total_partners: number;
        total_programs: number;
        total_coupons: number;
        total_transactions: number;
        total_points_earned: number;
        total_points_redeemed: number;
        total_wallet_amount: number;
    }
    interface IPointTransactionReport extends BaseResponse {
        partner_id: string;
        partner_name?: string;
        partner_phone?: string;
        points: number;
        transaction_type: 'EARN' | 'REDEEM';
        program_name?: string;
        reward_name?: string;
        description?: string;
    }
    interface IPartnerPointReport extends BaseResponse {
        partner_id: string;
        partner_name?: string;
        partner_phone?: string;
        total_points: number;
        available_points: number;
        level_name?: string;
        level_code?: string;
        last_transaction_date?: string | null;
    }
    interface IProgramPerformanceReport extends BaseResponse {
        program_name: string;
        program_type: string;
        total_usage: number;
        max_usage?: number;
        start_date?: string;
        expire_date?: string;
        status: 'active' | 'inactive' | 'expired';
        total_discount_amount?: number;
        total_points_given?: number;
    }
    interface ICouponUsageReport extends BaseResponse {
        coupon_code: string;
        program_name?: string;
        partner_id?: string;
        partner_name?: string;
        discount_amount?: number;
        used_at?: string;
        order_uuid?: string;
        status: 'used' | 'unused' | 'expired';
    }
    interface IWalletTransactionReport extends BaseResponse {
        wallet_uuid: string;
        partner_id: string;
        partner_name?: string;
        amount: number;
        transaction_type: 'EARN' | 'REDEEM';
        description?: string;
    }
    interface ILevelDistributionReport {
        level_id: number | string;
        level_name: string;
        level_code: string;
        partner_count: number;
        percentage: number;
    }
    interface IReportResponse<T> {
        items: T[];
        summary?: ISummaryStatistics;
        meta: {
            total_items: number;
            item_count: number;
            items_per_page: number;
            total_pages: number;
            current_page: number;
        };
        generated_at: string;
    }
    interface IExportRequest extends IReportFilter {
        report_type: 'point_transactions' | 'partner_points' | 'program_performance' | 'coupon_usage' | 'wallet_transactions' | 'level_distribution' | 'summary';
        format?: 'json' | 'html';
    }
    interface IPointTransactionMonthly {
        month: string;
        label: string;
        earned: number;
        redeemed: number;
        net: number;
    }
}

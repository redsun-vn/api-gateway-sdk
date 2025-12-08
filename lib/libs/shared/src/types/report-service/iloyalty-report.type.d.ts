import { IResponsePagination } from '../common.type';
export declare namespace ILoyaltyReport {
    interface MemberLevelReportDto {
        shop_id: number;
        loyalty_level_id: number;
        loyalty_level_name: string;
        total_members: number;
        new_members: number;
        active_members: number;
        total_points: number;
        avg_points_per_member: number;
        day?: number;
        week?: number;
        month?: number;
        quarter?: number;
        year?: number;
        date?: string;
    }
    interface PointActivityReportDto {
        shop_id: number;
        partner_id?: string;
        loyalty_level_id?: number | null;
        loyalty_level_name?: string | null;
        total_points_earned: number;
        earn_transaction_count: number;
        total_points_redeemed: number;
        redeem_transaction_count: number;
        net_points: number;
        program_id?: number | null;
        reward_id?: number | null;
        day?: number;
        week?: number;
        month?: number;
        quarter?: number;
        year?: number;
        date?: string;
    }
    interface MemberOrderReportDto {
        shop_id: number;
        branch_id: number;
        partner_id: string;
        loyalty_level_id: number | null;
        loyalty_level_name: string | null;
        total_orders: number;
        completed_orders: number;
        cancelled_orders: number;
        total_revenue: number;
        total_discount: number;
        total_promotion_discount: number;
        avg_order_value: number;
        total_points_earned: number;
        total_points_used: number;
        day?: number;
        week?: number;
        month?: number;
        quarter?: number;
        year?: number;
        date?: string;
    }
    interface MemberDetailReportSummaryDto {
        shop_id: number;
        partner_id: string;
        loyalty_level_name?: string;
        total_orders: number;
        total_revenue: number;
        total_points_earned: number;
        total_points_redeemed: number;
        net_points: number;
        avg_order_value: number;
    }
    interface MemberDetailReportGroupedDto {
        shop_id: number;
        partner_id: string;
        loyalty_level_name: string;
        total_orders: number;
        total_revenue: number;
        total_discount: number;
        total_promotion_discount: number;
        avg_order_value: number;
        total_points_earned: number;
        total_points_redeemed: number;
        net_points: number;
        day?: number;
        week?: number;
        month?: number;
        quarter?: number;
        year?: number;
    }
    type MemberDetailReportDto = MemberDetailReportSummaryDto | MemberDetailReportGroupedDto[];
    interface LoyaltyReportResponses {
        memberLevel: IResponsePagination<MemberLevelReportDto>;
        pointActivity: IResponsePagination<PointActivityReportDto>;
        memberOrder: IResponsePagination<MemberOrderReportDto>;
        memberDetail: MemberDetailReportDto;
    }
    interface LoyaltySummaryReportDto {
        total_customers: number;
        new_customers: number;
        members_with_loyalty_level: number;
        multiple_order_rate: number;
    }
}

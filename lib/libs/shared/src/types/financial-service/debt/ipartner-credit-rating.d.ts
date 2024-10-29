import { BaseResponse } from '../../common.type';
export declare namespace IPartnerCreditRating {
    interface IResponse extends BaseResponse {
        partner_uuid: string;
        total_debt: number | string;
        overdue_debt: number | string;
        total_paid: number | string;
        late_payments_count: number | string;
        credit_score: number | string;
        rating: 'good' | 'normal' | 'bad';
    }
}
export declare namespace IPartnerCreditRatingHistory {
    interface IResponse extends BaseResponse {
        credit_rating_id: number | string;
        credit_score_before: number | string | null;
        credit_score_after: number | string | null;
        rating_before: string | null;
        rating_after: string | null;
        reason: string | null;
        debt_date: string | null;
        payment_date: string | null;
        days_late: number | string | null;
        accounting_debt_id: number | string | null;
    }
}

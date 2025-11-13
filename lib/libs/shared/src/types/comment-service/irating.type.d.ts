import { BaseResponse } from '../common.type';
export declare namespace IRating {
    interface IRatingCriteria {
        template_id?: number | null;
        score: number;
        criteriaCode?: string & 'other';
        criteriaName?: string;
        weight?: number;
    }
    interface ICreate {
        shop_id: number | string;
        object_id: string;
        object_type: string;
        customer_id?: number | null;
        customer_name?: string | null;
        customer_phone?: string | null;
        is_guest?: boolean;
        staff_id?: number | null;
        comment_id?: number | null;
        business_type: string;
        comment?: string | null;
        criteria: IRatingCriteria[];
        metadata?: Record<string, any> | null;
    }
    interface IUpdate {
        comment?: string | null;
        is_active?: boolean;
        is_public?: boolean;
        criteria?: IRatingCriteria[];
    }
    interface ICreateShop extends Omit<IRating.ICreate, 'shop_id'> {
    }
    interface IShopResponse {
        shop_response: string;
        shop_response_by: number;
    }
    interface IToggleVisibility {
        isPublic: boolean;
    }
    interface IVerify {
        isVerified: boolean;
    }
    interface IRatingCriteriaResponse {
        rating_id: number | string;
        template_id: number | string | null;
        criteriaCode: string;
        criteriaName: string;
        score: number | string;
        weight: number | string;
    }
    interface IRatingResponse extends BaseResponse {
        shop_id: number | string;
        object_id: string;
        objectType: string;
        customer_id: number | null;
        customerName?: string | null;
        customerPhone?: string | null;
        isGuest: boolean;
        staff_id: number | null;
        comment_id: number | null;
        businessType: string;
        overallRating: number | string;
        comment: string | null;
        shopResponse: string | null;
        shopResponseAt: Date | null;
        shopResponseBy: number | null;
        isActive: boolean;
        isVerified: boolean;
        isPublic: boolean;
        metadata: Record<string, any> | null;
        criteria: IRatingCriteriaResponse[];
    }
    interface IQueryMyRating {
        shopId: number;
        customerId: number;
        objectId?: number;
        objectType?: string;
    }
    interface IQueryStatistics {
        shopId: number;
        staff_id?: number;
        object_id?: string;
        objectType?: string;
        businessType?: string;
    }
    interface IQueryShop extends Omit<IRating.IQueryStatistics, 'shopId'> {
        fromDate?: string;
        toDate?: string;
    }
    interface IRatingStatistics {
        shop_id: number | string;
        staff_id?: number | null;
        businessType?: string;
        totalRatings: number | string;
        averageRating: number | string;
        ratingDistribution: {
            five: number | string;
            four: number | string;
            three: number | string;
            two: number | string;
            one: number | string;
        };
        criteria_averages: {
            [criteria_code: string]: number | string;
        };
    }
}

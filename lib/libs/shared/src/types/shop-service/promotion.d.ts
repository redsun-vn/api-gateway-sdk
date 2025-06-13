import { PromotionRewardType, PromotionTargetType, PromotionRewardUnit } from '../../enum';
import { BaseResponse } from '../common.type';
export declare namespace IPromotion {
    interface ICreate {
        name: string;
        isActive: boolean;
        description?: string;
        isVoucherBased: boolean;
        startAt: string;
        endAt: string;
        usageLimit?: number;
        amountLimit?: number;
        maxDiscountPercent?: number;
        allowedStaffIds?: string[];
        targets: IPromotionTargetMapping.ICreate[];
        rewards: IPromotionReward.ICreate[];
    }
    interface IUpdate extends Partial<ICreate> {
        id: number;
    }
    interface IResponse extends BaseResponse {
        isActive: boolean;
        name: string;
        description?: string;
        isVoucherBased: boolean;
        startAt: string | null;
        endAt: string | null;
        usageLimit: number | string | null;
        amountLimit: number | string | null;
        maxDiscountPercent: number | string | null;
        allowedStaffIds: string[] | null;
        targets: IPromotionTargetMapping.IResponse[];
        rewards: IPromotionReward.IResponse[];
        vouchers?: IPromotionVoucher.IResponse[];
        usages?: IPromotionUsage.IResponse[];
    }
    interface ICalculateReward {
        discount: number;
        extendTime: number;
        extendStaff: number;
        extendBranch: number;
        addFeature: {
            featureControllerId: number;
            durationInDays: number;
        }[];
    }
}
export declare namespace IPromotionTargetMapping {
    interface ICreate {
        targetType: PromotionTargetType | string;
        targetId: string;
    }
    interface IResponse extends BaseResponse {
        promotionId: number | string;
        promotion?: IPromotion.IResponse | null;
        targetType: PromotionTargetType | string;
        targetId: string;
    }
}
export declare namespace IPromotionReward {
    interface ICreate {
        type: PromotionRewardType | string;
        value?: number;
        unit: PromotionRewardUnit | string;
        featureControllerId?: number;
        durationInDays?: number;
    }
    interface IResponse extends BaseResponse {
        promotionId: number | string;
        promotion?: IPromotion.IResponse | null;
        type: PromotionRewardType | string;
        value: number | string | null;
        unit: PromotionRewardUnit | string;
        featureControllerId: number | string | null;
        durationInDays: number | string | null;
    }
}
export declare namespace IPromotionVoucher {
    interface ICreate {
        promotionId: number;
        usageLimit: number;
        isActive?: boolean;
        assignedToCustomerId?: string;
        expiredAt?: string;
    }
    interface IUpdate extends Partial<ICreate> {
        id?: number;
    }
    interface IAssignToCustomer {
        customerId: string;
    }
    interface IResponse extends BaseResponse {
        promotionId: number | string;
        promotion?: IPromotion.IResponse | null;
        code: string | null;
        usageLimit: number | string | null;
        usedCount: number | string | null;
        isActive: boolean;
        assignedToCustomerId: string | null;
        expiredAt: string | null;
    }
}
export declare namespace IPromotionUsage {
    interface ICreate {
        promotionId: number | string;
        customerId: string;
        shopId: number | string;
        usedAt: string;
        voucherCode?: string;
        appliedByStaffId: string;
        rewardAppliedDetails?: any;
        amountDiscounted?: number | string;
        receiptId?: string;
        receiptLineItemId?: string;
        isUsed?: boolean;
    }
    interface IResponse extends BaseResponse {
        promotionId: number | string;
        promotion?: IPromotion.IResponse | null;
        customerId: string;
        shopId: number | string;
        usedAt: string;
        voucherCode: string | null;
        appliedByStaffId: string;
        rewardAppliedDetails: any;
        amountDiscounted: number | string | null;
        receiptId: string | null;
        receiptLineItemId: string | null;
        isUsed: boolean;
    }
}

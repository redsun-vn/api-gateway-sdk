import {
	PromotionRewardType,
	PromotionTargetType,
	PromotionRewardUnit,
} from '../../enum';
import { BaseResponse } from '../common.type';

/* eslint-disable @typescript-eslint/no-namespace */
export namespace IPromotion {
	export interface ICreate {
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
		staffId?: string;
	}

	export interface IUpdate extends Partial<ICreate> {
		id: number;
	}

	export interface IResponse extends BaseResponse {
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
		createdBy?: string | null;
		updatedBy?: string | null;
	}

	export interface ICalculateReward {
		discount: number; // số tiền giảm giá
		extendTime: number; // số ngày kéo dài (nếu có)
		extendStaff: number; // số nhân viên thêm (nếu có)
		extendBranch: number; // số chi nhánh thêm (nếu có)
		addFeature: {
			featureControllerId: number;
			durationInDays: number;
		}[]; // số tính năng thêm (nếu có)
	}
}

export namespace IPromotionTargetMapping {
	export interface ICreate {
		targetType: PromotionTargetType | string;
		targetId: string;
	}
	export interface IResponse extends BaseResponse {
		promotionId: number | string;
		promotion?: IPromotion.IResponse | null;
		targetType: PromotionTargetType | string;
		targetId: string;
	}
}

export namespace IPromotionReward {
	export interface ICreate {
		type: PromotionRewardType | string;
		value?: number;
		unit: PromotionRewardUnit | string;
		featureControllerId?: number;
		durationInDays?: number;
	}
	export interface IResponse extends BaseResponse {
		promotionId: number | string;
		promotion?: IPromotion.IResponse | null;
		type: PromotionRewardType | string;
		value: number | string | null;
		unit: PromotionRewardUnit | string;
		featureControllerId: number | string | null;
		durationInDays: number | string | null;
	}
}

export namespace IPromotionVoucher {
	export interface ICreate {
		promotionId: number;
		usageLimit: number;
		isActive?: boolean;
		assignedToCustomerId?: string;
		expiredAt?: string;
		staffId?: string;
	}
	export interface IUpdate extends Partial<ICreate> {
		id?: number;
	}
	export interface IAssignToCustomer {
		customerId: string;
	}
	export interface IResponse extends BaseResponse {
		promotionId: number | string;
		promotion?: IPromotion.IResponse | null;
		code: string | null;
		usageLimit: number | string | null;
		usedCount: number | string | null;
		isActive: boolean;
		assignedToCustomerId: string | null;
		expiredAt: string | null;
		createdBy?: string | null;
		updatedBy?: string | null;
	}
}

export namespace IPromotionUsage {
	export interface ICreate {
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
	export interface IResponse extends BaseResponse {
		promotionId: number | string;
		promotion?: IPromotion.IResponse | null;
		customerId: string;
		shopId: number | string;
		usedAt: string;
		voucherCode: string | null;
		appliedByStaffId: string | null;
		rewardAppliedDetails: any;
		amountDiscounted: number | string | null;
		receiptId: string | null;
		receiptLineItemId: string | null;
		isUsed: boolean;
	}
}

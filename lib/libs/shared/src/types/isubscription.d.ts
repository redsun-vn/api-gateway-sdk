import { tags } from 'typia';
import { BaseResponse } from './common.type';
import { IPackagePlan } from './ipackage-plan';
import { CREATE_SHOP_FROM_SOURCE_ENUM } from '../enum';
export declare namespace ISubscription {
    interface ICreate {
        targetValue?: number;
        package_id: string;
        packageAdditionIds?: number[];
        appPlanIds?: number[];
        paymentCode?: string;
        email?: string & tags.Format<'email'>;
        phone?: string;
        address?: string;
        source?: CREATE_SHOP_FROM_SOURCE_ENUM;
    }
    interface IUpdate {
        active?: boolean;
    }
    interface ICreateTrial {
        packageId: number;
        refCode?: string;
    }
    interface ITrialResponse {
        id: number | string;
        shopId: number | string;
        packageId: number | string;
        packageName: string | null;
        startDate: string | null;
        endDate: string | null;
        active: boolean | null;
        price: number | string;
        isRenewal: boolean;
        isTrial: boolean;
        plans: Array<{
            id: number | string;
            name: string;
            type: string;
            target: string;
            value: number;
            price: number | string;
        }>;
    }
    interface ICreateFreeInput {
        shopId: number;
        packageId: number;
    }
    interface IFreeResponse {
        id: number | string;
        shopId: number | string;
        packageId: number | string;
        name: string;
        startDate: Date | string | null;
        endDate: Date | string | null;
    }
    interface IShopUpdate {
        paymentCode?: string;
        email?: string & tags.Format<'email'>;
        phone?: string;
        address?: string;
    }
    type IStats = {
        branchTotalRemain: number;
        deviceRemain: number;
        daysRemain: number;
        userRemain: number;
        plans: IPackagePlan.IResponse[];
    };
    type ControllerStatus = 'active' | 'trial' | 'expired' | 'none';
    interface IControllerStatusRequest {
        shop_id: string;
        controller_paths: string[];
    }
    interface IControllerEntitlement {
        status: ControllerStatus;
        ends_at: string | null;
    }
    interface IControllerStatusItem extends IControllerEntitlement {
        controller_path: string;
    }
    interface IControllerStatusResponse {
        items: IControllerStatusItem[];
    }
    type IStatsPublic = {
        branchTotalRemain: number;
        deviceRemain: number;
        daysRemain: number;
        userRemain: number;
        plans: IPackagePlan.IResponse[];
        controllers?: string[];
    };
    interface ISubscriptionResponse extends BaseResponse {
        package_id?: string | number | null;
        shop_id: string;
        active?: boolean | null;
        paymentCode?: string | null;
        name: string;
        day: number;
        price: number | string;
        month: number | string;
        startDate?: string | Date;
        endDate?: string | Date | null;
        trialEndsAt: string | Date | null;
        packagePlans?: IPackagePlan.IResponse[];
        extendStaff?: number | string | null;
        extendBranch?: number | string | null;
        source?: string | null;
    }
    interface ISubscriptionReportResponse {
        shop_id?: number;
        package_id: number;
        packageLevel?: number;
        packagePrice?: number;
        paymentPrice?: number;
        day?: number;
        week?: number;
        month?: number;
        quarter?: number;
        year?: number;
        date?: string;
    }
    interface ICurrentInput {
        shop_id: string;
    }
    interface ICurrentSubscription {
        id: number | string;
        name: string;
        packageId: number | string | null;
        isTrial: boolean;
        isFree?: boolean;
        active: boolean | null;
        price: number | string;
        day: number;
        month: number | string;
        startDate: Date | string | null;
        endDate: Date | string | null;
        trialEndsAt: Date | string | null;
        createdAt: Date | string;
        source: string | null;
    }
    interface ICurrentStatus {
        isExpired: boolean;
        daysRemain: number;
    }
    interface ICurrentPackage {
        id: number | string;
        name: string;
        code: string | null;
        level: number | null;
        isTrial: boolean | null;
        isFree?: boolean | null;
        limitUser: number | null;
        limitBranch: number | null;
        limitDevice: number | null;
        creditAI: number | string | null;
        limitProduct: number | string | null;
        limitOrderPerMonth: number | string | null;
        supportLevel: string | null;
    }
    interface ICurrentUsage {
        branchTotalRemain: number;
        userRemain: number;
        deviceRemain: number;
    }
    interface ICurrentController {
        id: number | string | null;
        path: string;
        name: string;
        appPlanId: number | string | null;
    }
    interface ICurrentResponse {
        subscription: ICurrentSubscription | null;
        status: ICurrentStatus;
        package: ICurrentPackage | null;
        usage: ICurrentUsage;
        plans: IPackagePlan.IResponse[];
        controllers: ICurrentController[];
    }
}

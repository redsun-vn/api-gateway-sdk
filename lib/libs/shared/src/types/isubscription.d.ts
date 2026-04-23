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
        startDate: string;
        endDate: string;
        active: boolean;
        price: number | string;
        isRenewal: boolean;
        plans: Array<{
            id: number | string;
            name: string;
            type: string;
            target: string;
            value: number;
            price: number | string;
        }>;
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
}

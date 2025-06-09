import { tags } from 'typia';
import { BaseResponse } from './common.type';
import { IPackagePlan } from './ipackage-plan';
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
    }
    interface IUpdate {
        active?: boolean;
    }
    type IStats = {
        branchTotalRemain: number;
        deviceRemain: number;
        daysRemain: number;
        userRemain: number;
        plans: IPackagePlan.IResponse[];
    };
    interface ISubscriptionResponse extends BaseResponse {
        package_id: string;
        shop_id: string;
        active?: boolean | null;
        paymentCode?: string | null;
        name: string;
        day: number;
        price: number | string;
        month: number | string;
        startDate?: string | Date;
        endDate?: string | Date;
        trialEndsAt: string | Date | null;
        packagePlans?: IPackagePlan.IResponse[];
        extendStaff?: number | string | null;
        extendBranch?: number | string | null;
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

import { BaseResponse } from './common.type';
import { IPackagePlan } from './ipackage-plan';
export declare namespace ISubscription {
    interface ICreate {
        package_id: string;
        packageAdditionIds?: number[];
        paymentCode?: string;
    }
    interface IUpdate {
        active?: boolean;
    }
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
    }
}

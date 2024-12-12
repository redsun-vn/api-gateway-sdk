import { BaseResponse } from './common.type';
export declare namespace IPackagePlan {
    interface IResponse extends BaseResponse {
        shop_id: number | string;
        subscription_id: number | string;
        package_id: number | string;
        package_addition_id?: number | string | null;
        app_plan_id?: number | string | null;
        name: string;
        price: number | string;
        discount?: number | string | null;
        total: number | string;
        isDefault: boolean;
        type: string;
        target: string;
        value: number;
        active: boolean;
        description?: string | null;
        startDate: string;
        endDate: string;
    }
}

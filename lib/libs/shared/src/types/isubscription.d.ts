import { tags } from 'typia';
import { BaseResponse } from './common.type';
import { IPackage } from './ipackage';
export declare namespace ISubscription {
    interface ICreate {
        package_id: string;
        name: string;
        price: number & tags.Type<'uint32'>;
        day: number & tags.Type<'uint32'>;
        month: number & tags.Type<'uint32'>;
        starDate: string & tags.Format<'date-time'>;
        endDate: string & tags.Format<'date-time'>;
        trialEndsAt: string & tags.Format<'date-time'>;
    }
    interface IUpdate extends Partial<ICreate> {
    }
    interface ISubscriptionResponse extends BaseResponse {
        package_id: string;
        shop_id: string;
        name: string;
        day: number;
        price: number;
        month: number;
        starDate: string;
        endDate: string;
        trialEndsAt: string;
        package: IPackage.IPackageResponse;
    }
}

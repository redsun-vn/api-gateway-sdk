import { tags } from 'typia';
import { BaseResponse } from './common.type';
import { PACKAGE_LEVEL_SUPPORT_ENUM } from '../enum/shop-service';
import { IPackageAddition } from './ipackage-addition';
import { IApplicationPlan } from './shop-service';
export declare namespace IPackage {
    interface ICreate {
        name: string;
        code?: string;
        active?: boolean;
        description?: string;
        price: number & tags.Type<'uint64'>;
        day: number & tags.Type<'uint64'>;
        month: number & tags.Type<'uint64'>;
        metadata?: string[];
        isTrial?: boolean;
        limitUser?: number;
        limitDevice?: number;
        limitBranch?: number;
        numberOfGuides?: number;
        supportLevel?: string & PACKAGE_LEVEL_SUPPORT_ENUM;
        level?: number;
        packageAdditions?: IPackageAddition.ICreate[];
        appPlanIds?: number[] | [];
        business_ids?: string[];
        sale_channel_ids?: string[];
        category_business_id?: number | null;
    }
    interface IUpdate extends Omit<Partial<ICreate>, 'packageAdditions'> {
    }
    interface ICreateAdditions {
        packageAdditions: IPackageAddition.ICreate[];
    }
    interface IDeleteAddition {
        additionIds: number[];
    }
    interface IPackageResponse extends BaseResponse {
        name: string;
        code?: string | null;
        business_ids?: string[] | null;
        sale_channel_ids?: string[] | null;
        category_business_id?: string | number | null;
        active: boolean;
        description?: string | null;
        price: number | string;
        day: number;
        month: number;
        isTrial?: boolean | null;
        metadata?: string[] | null;
        limitUser?: number | null;
        limitDevice?: number | null;
        limitBranch?: number | null;
        numberOfGuides?: number | null;
        supportLevel?: string | null;
        level?: number | null;
        packageAdditions?: IPackageAddition.IResponse[];
        appPlan?: IApplicationPlan.IResponse[];
    }
}

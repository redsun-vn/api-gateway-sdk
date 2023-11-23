import { tags } from 'typia';
import { BaseResponse } from './common.type';
export declare namespace IPackage {
    interface ICreate {
        name: string;
        active?: boolean;
        description?: string;
        price: number & tags.Type<'uint32'>;
        day: number & tags.Type<'uint32'>;
        month: number & tags.Type<'uint32'>;
        metadata?: string;
    }
    interface IUpdate extends Partial<ICreate> {
    }
    interface IPackageResponse extends BaseResponse {
        name: string;
        active: boolean;
        description?: string | null;
        price: number;
        day: number;
        month: number;
        metadata?: string | null;
    }
}

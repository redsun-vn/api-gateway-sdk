import { tags } from 'typia';
import { BaseResponse } from './common.type';
export declare namespace IActivityLog {
    enum ACTION {
        CREATE = "CREATE",
        UPDATE = "UPDATE",
        DELETE = "DELETE",
        NONE = "NONE"
    }
    interface IActivityLogCreate {
        staffId: number & tags.Type<'uint32'>;
        deviceId: number & tags.Type<'uint32'>;
        branchId: number & tags.Type<'uint32'>;
        ip: string;
        message?: string;
        title: string;
        objectTarget: string;
        objectId: number & tags.Type<'uint32'>;
        objectBody: string;
        embed: string;
        action: string;
    }
    interface IActivityLogResponse extends BaseResponse {
        staffId: number | string;
        deviceId: number | string;
        branchId: number | string;
        shopId: number | string;
        ip: string;
        message?: string | null | '';
        title: string;
        objectTarget: string;
        objectId: number | string;
        objectBody: any | string | null;
        embed: string;
        action: ACTION;
        createdAt: string;
    }
}

import { tags } from 'typia';
import { BaseResponse, CustomDataType } from './common.type';
import { ExecutionContext } from '@nestjs/common';
import { IStaff } from './istaff';
export declare namespace IActivityLog {
    enum ACTION {
        CREATE = "CREATE",
        UPDATE = "UPDATE",
        DELETE = "DELETE",
        NONE = "NONE"
    }
    interface ICreateActivityLog {
        shop_id?: number & tags.Type<'uint64'>;
        branch_id?: number & tags.Type<'uint64'>;
        staff_id: number & tags.Type<'uint64'>;
        device_code: string;
        ip?: string;
        message?: string;
        objectTarget: string;
        objectId: number & tags.Type<'uint64'>;
        objectBody: Record<string, unknown>;
        objectResponse: Record<string, unknown>;
        embed?: string;
        action: ACTION;
    }
    interface IActivityLogResponse extends BaseResponse {
        shop_id: number | string | null;
        branch_id?: number | string | null;
        staff_id: number | string | null;
        device_code: string;
        ip?: string;
        message?: string;
        title?: string;
        objectTarget: string;
        objectId: number | string | null;
        objectBody: Record<string, unknown>;
        objectResponse: Record<string, unknown>;
        staff?: IStaff.IStaffResponse | null;
        embed?: string;
        action: string;
    }
    interface IActivityOnEvent {
        resData: CustomDataType | boolean;
        context: ExecutionContext;
    }
}

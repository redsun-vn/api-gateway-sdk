import { tags } from 'typia';
export declare namespace ISyncActivityLog {
    enum ACTION {
        CREATE = "create",
        UPDATE = "update",
        DELETE = "delete"
    }
    enum STATUS {
        SUCCESS = "success",
        FAILURE = "failure"
    }
    export interface ICreateTable {
        branch_id: string;
    }
    export interface ICreateSyncActivityLog {
        branch_id: number & tags.Type<'uint64'>;
        pos_config_id?: string;
        pos_session_uuid: string;
        staff_id: number & tags.Type<'uint64'>;
        status: string & STATUS;
        action: string & ACTION;
        table_name: string;
        object_id: string;
        meta: any;
        request?: any | null;
        endpoint?: string;
    }
    export interface IEventCreateTable {
        tableName: string;
    }
    export interface ISyncActivityLogResponse {
        id: number | string;
        shop_id: number | string;
        branch_id: number | string;
        pos_config_id: number | string | null;
        pos_session_uuid: number | string;
        staff_id: number | string;
        action: string;
        table_name: string;
        status: string;
        object_id: number | string | null;
        meta: any;
        request?: any | null;
        endpoint: string | null;
        action_date: string;
        createdAt: string;
        updatedAt: string;
    }
    export {};
}

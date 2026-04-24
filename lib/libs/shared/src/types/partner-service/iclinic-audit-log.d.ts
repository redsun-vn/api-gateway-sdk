import { BaseResponse } from '../common.type';
export declare namespace IClinicAuditLog {
    interface IResponse extends BaseResponse {
        entity_type: string;
        entity_id: string;
        action: string;
        changed_by_id: string;
        changed_by_name?: string | null;
        shop_id?: string | null;
        branch_id?: string | null;
        changed_at: string;
        ip_address?: string | null;
        user_agent?: string | null;
        reason?: string | null;
        changed_fields_keys?: string[] | null;
    }
    interface IDetailResponse extends IResponse {
    }
    interface IQuery {
        shopId?: string;
        entityType?: string;
        entityId?: string;
        action?: string;
        page?: number;
        limit?: number;
    }
}

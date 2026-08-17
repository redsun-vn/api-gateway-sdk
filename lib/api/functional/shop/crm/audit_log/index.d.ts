import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ICrmAuditLog } from "../../../../../libs/shared/src/types/crm-service/iaudit-log";
export declare function findByEntity(connection: IConnection, entityType: ICrmAuditLog.EntityType, entityId: number, query: findByEntity.Query): Promise<findByEntity.Output>;
export declare namespace findByEntity {
    type Query = Resolved<ICrmAuditLog.IListQuery>;
    type Output = Primitive<IResponse<ICrmAuditLog.IListResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/audit-log/:entityType/:entityId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (entityType: ICrmAuditLog.EntityType, entityId: number, query: findByEntity.Query) => string;
}

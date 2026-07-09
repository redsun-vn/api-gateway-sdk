import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ICrmSlaPause } from "../../../../../libs/shared/src/types/crm-service/isla-pause";
export * as pause from "./pause";
export * as reassign_suggestions from "./reassign_suggestions";
export declare function resume(connection: IConnection, entityType: ICrmSlaPause.EntityType, entityId: number): Promise<resume.Output>;
export declare namespace resume {
    type Output = Primitive<IResponse<ICrmSlaPause.IState>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/sla/resume/:entityType/:entityId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (entityType: ICrmSlaPause.EntityType, entityId: number) => string;
}

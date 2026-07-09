import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmSlaPause } from "../../../../../../libs/shared/src/types/crm-service/isla-pause";
export declare function get(connection: IConnection, entityType: ICrmSlaPause.EntityType, entityId: number): Promise<get.Output>;
export declare namespace get {
    type Output = Primitive<IResponse<ICrmSlaPause.IState>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/sla/pause/:entityType/:entityId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (entityType: ICrmSlaPause.EntityType, entityId: number) => string;
}
export declare function pause(connection: IConnection, entityType: ICrmSlaPause.EntityType, entityId: number, body: pause.Input): Promise<pause.Output>;
export declare namespace pause {
    type Input = Resolved<ICrmSlaPause.IPauseBody>;
    type Output = Primitive<IResponse<ICrmSlaPause.IState>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/sla/pause/:entityType/:entityId";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (entityType: ICrmSlaPause.EntityType, entityId: number) => string;
}

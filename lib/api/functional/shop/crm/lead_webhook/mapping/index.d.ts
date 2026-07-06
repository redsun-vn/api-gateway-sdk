import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ILeadWebhook } from "../../../../../../libs/shared/src/types/crm-service/ilead-webhook";
export declare function getMapping(connection: IConnection): Promise<getMapping.Output>;
export declare namespace getMapping {
    type Output = Primitive<IResponse<null | ILeadWebhook.IMappingResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/lead-webhook/mapping";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function upsertMapping(connection: IConnection, body: upsertMapping.Input): Promise<upsertMapping.Output>;
export declare namespace upsertMapping {
    type Input = Resolved<ILeadWebhook.IUpsertInputRequest>;
    type Output = Primitive<IResponse<ILeadWebhook.IMappingResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/lead-webhook/mapping";
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
    const path: () => string;
}

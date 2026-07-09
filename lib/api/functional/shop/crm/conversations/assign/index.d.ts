import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IConversation } from "../../../../../../libs/shared/src/types/crm-service/iconversation";
export declare function reassign(connection: IConnection, id: string, body: reassign.Input): Promise<reassign.Output>;
export declare namespace reassign {
    type Input = Resolved<IConversation.IReassignBody>;
    type Output = Primitive<IResponse<IConversation.IReassignResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/conversations/:id/assign";
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
    const path: (id: string) => string;
}

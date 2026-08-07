import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IConversation } from "../../../../../../libs/shared/src/types/crm-service/iconversation";
export declare function linkContact(connection: IConnection, id: string, body: linkContact.Input): Promise<linkContact.Output>;
export declare namespace linkContact {
    type Input = Resolved<IConversation.ILinkContactBody>;
    type Output = Primitive<IResponse<IConversation.ILinkContactResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/conversations/:id/link-contact";
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

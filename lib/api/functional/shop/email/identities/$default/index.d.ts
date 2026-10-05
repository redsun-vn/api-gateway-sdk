import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IEmailSenderIdentity } from "../../../../../../libs/shared/src/types/notification/iemail-config.type";
export declare function setDefaultSenderIdentity(connection: IConnection, id: number, dto: setDefaultSenderIdentity.Input): Promise<setDefaultSenderIdentity.Output>;
export declare namespace setDefaultSenderIdentity {
    type Input = Resolved<IEmailSenderIdentity.ISetDefaultRequest>;
    type Output = Primitive<IResponse<IEmailSenderIdentity.IResponse>>;
    const METADATA: {
        readonly method: "PATCH";
        readonly path: "/shop/email/identities/:id/default";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}

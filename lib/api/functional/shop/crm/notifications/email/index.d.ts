import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmComms } from "../../../../../../libs/shared/src/types/crm-service/inotification";
export declare function sendEmail(connection: IConnection, data: sendEmail.Input): Promise<sendEmail.Output>;
export declare namespace sendEmail {
    type Input = Resolved<ICrmComms.ISendEmail>;
    type Output = Primitive<IResponse<ICrmComms.ISendEmailResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/notifications/email";
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

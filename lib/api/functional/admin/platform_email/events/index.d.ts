import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IPlatformEmail } from "../../../../../libs/shared/src/types/admin-service/iplatform-email";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function listEvents(connection: IConnection): Promise<listEvents.Output>;
export declare namespace listEvents {
    type Output = Primitive<IResponse<Array<IPlatformEmail.IEvent>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/platform-email/events";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}

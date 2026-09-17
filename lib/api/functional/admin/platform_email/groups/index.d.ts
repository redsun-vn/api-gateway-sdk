import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IPlatformEmail } from "../../../../../libs/shared/src/types/admin-service/iplatform-email";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function listGroups(connection: IConnection): Promise<listGroups.Output>;
export declare namespace listGroups {
    type Output = Primitive<IResponse<Array<IPlatformEmail.IEventGroup>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/platform-email/groups";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}

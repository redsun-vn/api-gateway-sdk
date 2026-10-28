import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IMktOs } from "../../../../../../libs/shared/src/types/crm-service/imkt-os";
export declare function getChannelReadiness(connection: IConnection): Promise<getChannelReadiness.Output>;
export declare namespace getChannelReadiness {
    type Output = Primitive<IResponse<IMktOs.IChannelReadinessResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/channels/readiness";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}

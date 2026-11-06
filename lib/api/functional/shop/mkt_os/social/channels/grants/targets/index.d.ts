import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IAdsCommon } from "../../../../../../../../libs/shared/src/types/ads-service/iads-common";
import type { ISocialChannel } from "../../../../../../../../libs/shared/src/types/ads-service/isocial-channel";
import type { IResponse } from "../../../../../../../../libs/shared/src/types/common.type";
export * as select from "./select";
export declare function targets(connection: IConnection, grantId: IAdsCommon.Id): Promise<targets.Output>;
export declare namespace targets {
    type Output = Primitive<IResponse<ISocialChannel.ITargetListing>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/social/channels/grants/:grantId/targets";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (grantId: IAdsCommon.Id) => string;
}

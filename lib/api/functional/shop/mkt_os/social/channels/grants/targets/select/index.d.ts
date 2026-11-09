import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAdsCommon } from "../../../../../../../../../libs/shared/src/types/ads-service/iads-common";
import type { ISocialChannel } from "../../../../../../../../../libs/shared/src/types/ads-service/isocial-channel";
import type { IResponse } from "../../../../../../../../../libs/shared/src/types/common.type";
export declare function selectTargets(connection: IConnection, grantId: IAdsCommon.Id, body: selectTargets.Input): Promise<selectTargets.Output>;
export declare namespace selectTargets {
    type Input = Resolved<ISocialChannel.ITargetsSelect>;
    type Output = Primitive<IResponse<Array<ISocialChannel.IChannelView>>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/social/channels/grants/:grantId/targets/select";
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
    const path: (grantId: IAdsCommon.Id) => string;
}

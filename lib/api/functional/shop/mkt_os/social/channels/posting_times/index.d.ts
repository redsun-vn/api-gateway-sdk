import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAdsCommon } from "../../../../../../../libs/shared/src/types/ads-service/iads-common";
import type { ISocialChannel } from "../../../../../../../libs/shared/src/types/ads-service/isocial-channel";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
export declare function updatePostingTimes(connection: IConnection, id: IAdsCommon.Id, body: updatePostingTimes.Input): Promise<updatePostingTimes.Output>;
export declare namespace updatePostingTimes {
    type Input = Resolved<ISocialChannel.IPostingTimesUpdate>;
    type Output = Primitive<IResponse<ISocialChannel.IChannelView>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/social/channels/:id/posting-times";
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
    const path: (id: IAdsCommon.Id) => string;
}

import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IAdsCommon } from "../../../../../../../../libs/shared/src/types/ads-service/iads-common";
import type { ISocialChannel } from "../../../../../../../../libs/shared/src/types/ads-service/isocial-channel";
import type { IResponse } from "../../../../../../../../libs/shared/src/types/common.type";
export declare function tiktokCreatorInfo(connection: IConnection, id: IAdsCommon.Id): Promise<tiktokCreatorInfo.Output>;
export declare namespace tiktokCreatorInfo {
    type Output = Primitive<IResponse<ISocialChannel.ITikTokCreatorInfo>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/social/channels/:id/tiktok/creator-info";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: IAdsCommon.Id) => string;
}

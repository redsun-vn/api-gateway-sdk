import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IAdsCommon } from "../../../../../../libs/shared/src/types/ads-service/iads-common";
import type { ISocialChannel } from "../../../../../../libs/shared/src/types/ads-service/isocial-channel";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export * as meta from "./meta";
export * as oauth from "./oauth";
export * as grants from "./grants";
export * as tiktok from "./tiktok";
export * as posting_times from "./posting_times";
export declare function list(connection: IConnection): Promise<list.Output>;
export declare namespace list {
    type Output = Primitive<IResponse<ISocialChannel.IList>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/social/channels";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function platforms(connection: IConnection): Promise<platforms.Output>;
export declare namespace platforms {
    type Output = Primitive<IResponse<Array<ISocialChannel.IPlatformAvailability>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/social/channels/platforms";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function disconnect(connection: IConnection, id: IAdsCommon.Id): Promise<disconnect.Output>;
export declare namespace disconnect {
    type Output = Primitive<IResponse<ISocialChannel.IChannelView>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/mkt-os/social/channels/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: IAdsCommon.Id) => string;
}

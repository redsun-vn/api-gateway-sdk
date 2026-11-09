import type { IConnection, Primitive } from "@nestia/fetcher";
import type { ISocialChannel } from "../../../../../../../../libs/shared/src/types/ads-service/isocial-channel";
import type { IResponse } from "../../../../../../../../libs/shared/src/types/common.type";
export declare function metaLink(connection: IConnection): Promise<metaLink.Output>;
export declare namespace metaLink {
    type Output = Primitive<IResponse<ISocialChannel.IMetaLinkResult>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/social/channels/meta/link";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: () => string;
}

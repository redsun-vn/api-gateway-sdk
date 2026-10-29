import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IAdsConnection } from "../../../../../../../../libs/shared/src/types/ads-service/iads-connection";
import type { IResponse } from "../../../../../../../../libs/shared/src/types/common.type";
export declare function metaLink(connection: IConnection): Promise<metaLink.Output>;
export declare namespace metaLink {
    type Output = Primitive<IResponse<IAdsConnection.IMetaLinkResult>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/ads/connections/meta/link";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: () => string;
}

import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IAdsCommon } from "../../../../../../../libs/shared/src/types/ads-service/iads-common";
import type { ISocialAnalytics } from "../../../../../../../libs/shared/src/types/ads-service/isocial-analytics";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
export declare function post(connection: IConnection, id: IAdsCommon.Id): Promise<post.Output>;
export declare namespace post {
    type Output = Primitive<IResponse<ISocialAnalytics.IPostStats>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/social/analytics/posts/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: IAdsCommon.Id) => string;
}

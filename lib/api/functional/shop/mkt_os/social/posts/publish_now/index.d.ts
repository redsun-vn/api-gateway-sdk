import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IAdsCommon } from "../../../../../../../libs/shared/src/types/ads-service/iads-common";
import type { ISocialPost } from "../../../../../../../libs/shared/src/types/ads-service/isocial-post";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
export declare function publishNow(connection: IConnection, id: IAdsCommon.Id): Promise<publishNow.Output>;
export declare namespace publishNow {
    type Output = Primitive<IResponse<ISocialPost.IView>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/social/posts/:id/publish-now";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: IAdsCommon.Id) => string;
}

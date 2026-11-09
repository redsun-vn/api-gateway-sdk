import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAdsCommon } from "../../../../../../../../libs/shared/src/types/ads-service/iads-common";
import type { ISocialPost } from "../../../../../../../../libs/shared/src/types/ads-service/isocial-post";
import type { IResponse } from "../../../../../../../../libs/shared/src/types/common.type";
export declare function markPublished(connection: IConnection, id: IAdsCommon.Id, targetId: IAdsCommon.Id, body: markPublished.Input): Promise<markPublished.Output>;
export declare namespace markPublished {
    type Input = Resolved<ISocialPost.IMarkPublished>;
    type Output = Primitive<IResponse<ISocialPost.IView>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/social/posts/:id/targets/:targetId/mark-published";
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
    const path: (id: IAdsCommon.Id, targetId: IAdsCommon.Id) => string;
}

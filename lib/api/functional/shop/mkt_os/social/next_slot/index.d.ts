import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ISocialPost } from "../../../../../../libs/shared/src/types/ads-service/isocial-post";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function nextSlot(connection: IConnection, query: nextSlot.Query): Promise<nextSlot.Output>;
export declare namespace nextSlot {
    type Query = Resolved<ISocialPost.INextSlotQuery>;
    type Output = Primitive<IResponse<null | ISocialPost.INextSlot>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/social/next-slot";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: nextSlot.Query) => string;
}

import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IAdsCommon } from "../../../../../../libs/shared/src/types/ads-service/iads-common";
import type { ISocialAutomation } from "../../../../../../libs/shared/src/types/ads-service/isocial-automation";
import type { ISocialPost } from "../../../../../../libs/shared/src/types/ads-service/isocial-post";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function listTags(connection: IConnection): Promise<listTags.Output>;
export declare namespace listTags {
    type Output = Primitive<IResponse<Array<ISocialPost.ITagView>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/social/tags";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function createTag(connection: IConnection, body: createTag.Input): Promise<createTag.Output>;
export declare namespace createTag {
    type Input = Resolved<ISocialPost.ITagCreate>;
    type Output = Primitive<IResponse<ISocialPost.ITagView>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/social/tags";
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
    const path: () => string;
}
export declare function updateTag(connection: IConnection, id: IAdsCommon.Id, body: updateTag.Input): Promise<updateTag.Output>;
export declare namespace updateTag {
    type Input = Resolved<ISocialPost.ITagUpdate>;
    type Output = Primitive<IResponse<ISocialPost.ITagView>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/mkt-os/social/tags/:id";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: IAdsCommon.Id) => string;
}
export declare function deleteTag(connection: IConnection, id: IAdsCommon.Id): Promise<deleteTag.Output>;
export declare namespace deleteTag {
    type Output = Primitive<IResponse<ISocialAutomation.IDeleted>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/mkt-os/social/tags/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: IAdsCommon.Id) => string;
}

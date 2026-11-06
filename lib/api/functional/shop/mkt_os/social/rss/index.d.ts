import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IAdsCommon } from "../../../../../../libs/shared/src/types/ads-service/iads-common";
import type { ISocialAutomation } from "../../../../../../libs/shared/src/types/ads-service/isocial-automation";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function listFeeds(connection: IConnection): Promise<listFeeds.Output>;
export declare namespace listFeeds {
    type Output = Primitive<IResponse<Array<ISocialAutomation.IRssView>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/social/rss";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function createFeed(connection: IConnection, body: createFeed.Input): Promise<createFeed.Output>;
export declare namespace createFeed {
    type Input = Resolved<ISocialAutomation.IRssCreate>;
    type Output = Primitive<IResponse<ISocialAutomation.IRssView>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/social/rss";
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
export declare function updateFeed(connection: IConnection, id: IAdsCommon.Id, body: updateFeed.Input): Promise<updateFeed.Output>;
export declare namespace updateFeed {
    type Input = Resolved<ISocialAutomation.IRssUpdate>;
    type Output = Primitive<IResponse<ISocialAutomation.IRssView>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/mkt-os/social/rss/:id";
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
export declare function deleteFeed(connection: IConnection, id: IAdsCommon.Id): Promise<deleteFeed.Output>;
export declare namespace deleteFeed {
    type Output = Primitive<IResponse<ISocialAutomation.IDeleted>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/mkt-os/social/rss/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: IAdsCommon.Id) => string;
}

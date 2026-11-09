import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IAdsCommon } from "../../../../../../libs/shared/src/types/ads-service/iads-common";
import type { ISocialAutomation } from "../../../../../../libs/shared/src/types/ads-service/isocial-automation";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function list(connection: IConnection): Promise<list.Output>;
export declare namespace list {
    type Output = Primitive<IResponse<Array<ISocialAutomation.IWebhookView>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/social/webhooks";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function create(connection: IConnection, body: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<ISocialAutomation.IWebhookCreate>;
    type Output = Primitive<IResponse<ISocialAutomation.IWebhookCreated>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/social/webhooks";
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
export declare function deliveries(connection: IConnection, query: deliveries.Query): Promise<deliveries.Output>;
export declare namespace deliveries {
    type Query = Resolved<ISocialAutomation.IWebhookDeliveryQuery>;
    type Output = Primitive<IResponse<ISocialAutomation.IWebhookDeliveryPage>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/social/webhooks/deliveries";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: deliveries.Query) => string;
}
export declare function update(connection: IConnection, id: IAdsCommon.Id, body: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<ISocialAutomation.IWebhookUpdate>;
    type Output = Primitive<IResponse<ISocialAutomation.IWebhookView>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/mkt-os/social/webhooks/:id";
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
export declare function remove(connection: IConnection, id: IAdsCommon.Id): Promise<remove.Output>;
export declare namespace remove {
    type Output = Primitive<IResponse<ISocialAutomation.IDeleted>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/mkt-os/social/webhooks/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: IAdsCommon.Id) => string;
}
export declare function test(connection: IConnection, id: IAdsCommon.Id): Promise<test.Output>;
export declare namespace test {
    type Output = Primitive<IResponse<ISocialAutomation.IWebhookTestResult>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/social/webhooks/:id/test";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: IAdsCommon.Id) => string;
}

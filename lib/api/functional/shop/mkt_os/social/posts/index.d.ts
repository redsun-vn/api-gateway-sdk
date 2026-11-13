import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAdsCommon } from "../../../../../../libs/shared/src/types/ads-service/iads-common";
import type { ISocialPost } from "../../../../../../libs/shared/src/types/ads-service/isocial-post";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export * as tags from "./tags";
export * as notes from "./notes";
export * as targets from "./targets";
export * as publish_now from "./publish_now";
export * as settings from "./settings";
export declare function submit(connection: IConnection, id: IAdsCommon.Id, body: submit.Input): Promise<submit.Output>;
export declare namespace submit {
    type Input = Resolved<ISocialPost.ISchedule>;
    type Output = Primitive<IResponse<ISocialPost.IView>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/social/posts/:id/submit";
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
    const path: (id: IAdsCommon.Id) => string;
}
export declare function approve(connection: IConnection, id: IAdsCommon.Id, body: approve.Input): Promise<approve.Output>;
export declare namespace approve {
    type Input = Resolved<ISocialPost.IApprove>;
    type Output = Primitive<IResponse<ISocialPost.IView>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/social/posts/:id/approve";
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
    const path: (id: IAdsCommon.Id) => string;
}
export declare function reject(connection: IConnection, id: IAdsCommon.Id, body: reject.Input): Promise<reject.Output>;
export declare namespace reject {
    type Input = Resolved<ISocialPost.IReject>;
    type Output = Primitive<IResponse<ISocialPost.IView>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/social/posts/:id/reject";
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
    const path: (id: IAdsCommon.Id) => string;
}
export declare function schedule(connection: IConnection, id: IAdsCommon.Id, body: schedule.Input): Promise<schedule.Output>;
export declare namespace schedule {
    type Input = Resolved<ISocialPost.ISchedule>;
    type Output = Primitive<IResponse<ISocialPost.IView>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/social/posts/:id/schedule";
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
    const path: (id: IAdsCommon.Id) => string;
}
export declare function reschedule(connection: IConnection, id: IAdsCommon.Id, body: reschedule.Input): Promise<reschedule.Output>;
export declare namespace reschedule {
    type Input = Resolved<ISocialPost.IReschedule>;
    type Output = Primitive<IResponse<ISocialPost.IView>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/social/posts/:id/reschedule";
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
    const path: (id: IAdsCommon.Id) => string;
}
export declare function cancel(connection: IConnection, id: IAdsCommon.Id, body: cancel.Input): Promise<cancel.Output>;
export declare namespace cancel {
    type Input = Resolved<ISocialPost.ICancel>;
    type Output = Primitive<IResponse<ISocialPost.IView>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/social/posts/:id/cancel";
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
    const path: (id: IAdsCommon.Id) => string;
}
export declare function list(connection: IConnection, query: list.Query): Promise<list.Output>;
export declare namespace list {
    type Query = Resolved<ISocialPost.IListQuery>;
    type Output = Primitive<IResponse<ISocialPost.IPage>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/social/posts";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: list.Query) => string;
}
export declare function calendar(connection: IConnection, query: calendar.Query): Promise<calendar.Output>;
export declare namespace calendar {
    type Query = Resolved<ISocialPost.ICalendarQuery>;
    type Output = Primitive<IResponse<Array<ISocialPost.ICalendarItem>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/social/posts/calendar";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: calendar.Query) => string;
}
export declare function create(connection: IConnection, body: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<ISocialPost.ICreate>;
    type Output = Primitive<IResponse<ISocialPost.IView>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/social/posts";
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
export declare function get(connection: IConnection, id: IAdsCommon.Id): Promise<get.Output>;
export declare namespace get {
    type Output = Primitive<IResponse<ISocialPost.IView>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/social/posts/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: IAdsCommon.Id) => string;
}
export declare function update(connection: IConnection, id: IAdsCommon.Id, body: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<ISocialPost.IContent>;
    type Output = Primitive<IResponse<ISocialPost.IView>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/mkt-os/social/posts/:id";
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

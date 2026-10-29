import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IMktOsResults } from "../../../../../libs/shared/src/types/crm-service/imkt-os-results";
import type { IMktOsRun } from "../../../../../libs/shared/src/types/crm-service/imkt-os-run";
export * as participants from "./participants";
export declare function list(connection: IConnection, query: list.Query): Promise<list.Output>;
export declare namespace list {
    type Query = Resolved<IMktOsRun.IJourneyListQuery>;
    type Output = Primitive<IResponse<IMktOsRun.IJourneyListResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/campaigns";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: list.Query) => string;
}
export declare function get(connection: IConnection, id: number): Promise<get.Output>;
export declare namespace get {
    type Output = Primitive<IResponse<IMktOsRun.ICampaignGetResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/campaigns/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
export declare function submit(connection: IConnection, id: number): Promise<submit.Output>;
export declare namespace submit {
    type Output = Primitive<IResponse<IMktOsRun.ICampaignSaved>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/campaigns/:id/submit";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: number) => string;
}
export declare function approve(connection: IConnection, id: number, body: approve.Input): Promise<approve.Output>;
export declare namespace approve {
    type Input = Resolved<IMktOsRun.ICampaignApproveRequest>;
    type Output = Primitive<IResponse<IMktOsRun.ICampaignSaved>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/campaigns/:id/approve";
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
    const path: (id: number) => string;
}
export declare function withdraw(connection: IConnection, id: number): Promise<withdraw.Output>;
export declare namespace withdraw {
    type Output = Primitive<IResponse<IMktOsRun.ICampaignSaved>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/campaigns/:id/withdraw";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: number) => string;
}
export declare function pause(connection: IConnection, id: number): Promise<pause.Output>;
export declare namespace pause {
    type Output = Primitive<IResponse<IMktOsRun.ICampaignSaved>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/campaigns/:id/pause";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: number) => string;
}
export declare function resume(connection: IConnection, id: number): Promise<resume.Output>;
export declare namespace resume {
    type Output = Primitive<IResponse<IMktOsRun.ICampaignSaved>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/campaigns/:id/resume";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: number) => string;
}
export declare function duplicate(connection: IConnection, id: number): Promise<duplicate.Output>;
export declare namespace duplicate {
    type Output = Primitive<IResponse<IMktOsRun.IRunSaved>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/campaigns/:id/duplicate";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: number) => string;
}
export declare function stop(connection: IConnection, id: number): Promise<stop.Output>;
export declare namespace stop {
    type Output = Primitive<IResponse<IMktOsRun.ICampaignSaved>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/campaigns/:id/stop";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: number) => string;
}
export declare function remind(connection: IConnection, id: number): Promise<remind.Output>;
export declare namespace remind {
    type Output = Primitive<IResponse<IMktOsRun.ICampaignRemindResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/campaigns/:id/remind";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: number) => string;
}
export declare function results(connection: IConnection, id: number): Promise<results.Output>;
export declare namespace results {
    type Output = Primitive<IResponse<IMktOsResults.IResultReport>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/campaigns/:id/results";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
export declare function activity(connection: IConnection, id: number, query: activity.Query): Promise<activity.Output>;
export declare namespace activity {
    type Query = Resolved<IMktOsResults.IActivityQuery>;
    type Output = Primitive<IResponse<IMktOsResults.IActivityPage>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/campaigns/:id/activity";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number, query: activity.Query) => string;
}

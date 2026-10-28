import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IMktOsRun } from "../../../../../libs/shared/src/types/crm-service/imkt-os-run";
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

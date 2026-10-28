import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IMktOsRun } from "../../../../../libs/shared/src/types/crm-service/imkt-os-run";
export * as artifacts from "./artifacts";
export * as steps from "./steps";
export declare function create(connection: IConnection, body: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<IMktOsRun.ICreateRequest>;
    type Output = Primitive<IResponse<IMktOsRun.IRunSaved>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/runs";
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
export declare function get(connection: IConnection, id: number): Promise<get.Output>;
export declare namespace get {
    type Output = Primitive<IResponse<IMktOsRun.IGetResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/runs/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}

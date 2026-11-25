import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IMktOsRun } from "../../../../../../libs/shared/src/types/crm-service/imkt-os-run";
export * as write from "./write";
export declare function saveSocialPosts(connection: IConnection, id: number, body: saveSocialPosts.Input): Promise<saveSocialPosts.Output>;
export declare namespace saveSocialPosts {
    type Input = Resolved<IMktOsRun.ISocialPostsSaveRequest>;
    type Output = Primitive<IResponse<IMktOsRun.IRunSaved>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/mkt-os/runs/:id/social-posts";
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
    const path: (id: number) => string;
}

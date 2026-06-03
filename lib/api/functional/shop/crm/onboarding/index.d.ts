import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ICrmOnboarding } from "../../../../../libs/shared/src/types/crm-service/ionboarding";
export * as templates from "./templates";
export declare function suggest(connection: IConnection, query: suggest.Query): Promise<suggest.Output>;
export declare namespace suggest {
    type Query = Resolved<ICrmOnboarding.IListTemplatesQuery>;
    type Output = Primitive<IResponse<ICrmOnboarding.ISuggestResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/onboarding/suggest";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: suggest.Query) => string;
}
export declare function apply(connection: IConnection, body: apply.Input): Promise<apply.Output>;
export declare namespace apply {
    type Input = Resolved<ICrmOnboarding.IApply>;
    type Output = Primitive<IResponse<ICrmOnboarding.IApplyResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/onboarding/apply";
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
export declare function reapply(connection: IConnection, body: reapply.Input): Promise<reapply.Output>;
export declare namespace reapply {
    type Input = Resolved<ICrmOnboarding.IReapply>;
    type Output = Primitive<IResponse<ICrmOnboarding.IReapplyResponse>>;
    const METADATA: {
        readonly method: "PATCH";
        readonly path: "/shop/crm/onboarding/reapply";
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
    const path: () => string;
}

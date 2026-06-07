import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ICrmScoringRule } from "../../../../../libs/shared/src/types/crm-service/iscoring-rule";
export * as fields from "./fields";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<ICrmScoringRule.IListQuery>;
    type Output = Primitive<IResponse<Array<ICrmScoringRule.ICrmScoringRuleResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/scoring-rules";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
export declare function preview(connection: IConnection, body: preview.Input): Promise<preview.Output>;
export declare namespace preview {
    type Input = Resolved<ICrmScoringRule.IPreview>;
    type Output = Primitive<IResponse<ICrmScoringRule.IPreviewResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/scoring-rules/preview";
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
export declare function create(connection: IConnection, body: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<ICrmScoringRule.ICreate>;
    type Output = Primitive<IResponse<ICrmScoringRule.ICrmScoringRuleResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/scoring-rules";
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
export declare function update(connection: IConnection, id: number, body: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<Partial<ICrmScoringRule.ICreate>>;
    type Output = Primitive<IResponse<ICrmScoringRule.ICrmScoringRuleResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/crm/scoring-rules/:id";
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
export declare function remove(connection: IConnection, id: number): Promise<remove.Output>;
export declare namespace remove {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/crm/scoring-rules/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
export declare function toggle(connection: IConnection, id: number, body: toggle.Input): Promise<toggle.Output>;
export declare namespace toggle {
    type Input = Resolved<ICrmScoringRule.IToggle>;
    type Output = Primitive<IResponse<ICrmScoringRule.ICrmScoringRuleResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/scoring-rules/:id/toggle";
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

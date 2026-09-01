import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IEmailTemplate } from "../../../../../libs/shared/src/types/notification/iemail-config.type";
export * as variables from "./variables";
export declare function listActions(connection: IConnection, query: listActions.Query): Promise<listActions.Output>;
export declare namespace listActions {
    type Query = Resolved<IEmailTemplate.IActionListQuery>;
    type Output = Primitive<IResponse<Array<IEmailTemplate.IActionResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/email/actions";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: listActions.Query) => string;
}
export declare function updateAction(connection: IConnection, modelKey: string, actionKey: string, dto: updateAction.Input): Promise<updateAction.Output>;
export declare namespace updateAction {
    type Input = Resolved<IEmailTemplate.IActionUpdateRequest>;
    type Output = Primitive<IResponse<IEmailTemplate.IActionUpdateResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/email/actions/:model_key/:action_key";
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
    const path: (modelKey: string, actionKey: string) => string;
}

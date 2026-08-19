import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IEmailTemplate } from "../../../../../libs/shared/src/types/notification/iemail-config.type";
export declare function listActions(connection: IConnection, query: listActions.Query): Promise<listActions.Output>;
export declare namespace listActions {
    type Query = Resolved<IEmailTemplate.IActionListQuery>;
    type Output = Primitive<IResponse<Array<IEmailTemplate.IActionResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/email/actions";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: listActions.Query) => string;
}

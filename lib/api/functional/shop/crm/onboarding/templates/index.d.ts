import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmOnboarding } from "../../../../../../libs/shared/src/types/crm-service/ionboarding";
export declare function listTemplates(connection: IConnection, query: listTemplates.Query): Promise<listTemplates.Output>;
export declare namespace listTemplates {
    type Query = Resolved<ICrmOnboarding.IListTemplatesQuery>;
    type Output = Primitive<IResponse<ICrmOnboarding.IListTemplatesResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/onboarding/templates";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: listTemplates.Query) => string;
}

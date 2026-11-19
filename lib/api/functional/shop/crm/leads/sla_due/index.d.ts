import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmLead } from "../../../../../../libs/shared/src/types/crm-service/ilead";
export declare function slaDue(connection: IConnection, query: slaDue.Query): Promise<slaDue.Output>;
export declare namespace slaDue {
    type Query = Resolved<ICrmLead.ISlaDueQuery>;
    type Output = Primitive<IResponse<ICrmLead.ISlaDueResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/leads/sla-due";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: slaDue.Query) => string;
}

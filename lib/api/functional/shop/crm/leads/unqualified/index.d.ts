import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmLead } from "../../../../../../libs/shared/src/types/crm-service/ilead";
export declare function setUnqualified(connection: IConnection, id: number, body: setUnqualified.Input): Promise<setUnqualified.Output>;
export declare namespace setUnqualified {
    type Input = Resolved<ICrmLead.ISetUnqualified>;
    type Output = Primitive<IResponse<ICrmLead.ICrmLeadResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/crm/leads/:id/unqualified";
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

import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmLead } from "../../../../../../libs/shared/src/types/crm-service/ilead";
export declare function bantBreakdown(connection: IConnection, id: number): Promise<bantBreakdown.Output>;
export declare namespace bantBreakdown {
    type Output = Primitive<IResponse<ICrmLead.IBantRecomputeResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/leads/:id/bant-breakdown";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}

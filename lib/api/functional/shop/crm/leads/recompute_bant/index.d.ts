import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmLead } from "../../../../../../libs/shared/src/types/crm-service/ilead";
export declare function recomputeBant(connection: IConnection, id: number): Promise<recomputeBant.Output>;
export declare namespace recomputeBant {
    type Output = Primitive<IResponse<ICrmLead.IBantRecomputeResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/leads/:id/recompute-bant";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: number) => string;
}

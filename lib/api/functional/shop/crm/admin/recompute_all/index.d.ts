import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmAdmin } from "../../../../../../libs/shared/src/types/crm-service/iadmin";
export declare function recomputeAll(connection: IConnection, body: recomputeAll.Input): Promise<recomputeAll.Output>;
export declare namespace recomputeAll {
    type Input = Resolved<ICrmAdmin.IRecomputeAllRequest>;
    type Output = Primitive<IResponse<ICrmAdmin.IRecomputeAllResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/admin/recompute-all";
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

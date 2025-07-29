import type { IConnection, Primitive } from "@nestia/fetcher";
import type { ICRMDeal } from "../../../../../../libs/shared/src/types/admin-service/crm/deal";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function convertToDeal(connection: IConnection, id: string): Promise<convertToDeal.Output>;
export declare namespace convertToDeal {
    type Output = Primitive<IResponse<ICRMDeal.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/crm/leads-analytics/convert-to-deal/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: string) => string;
}

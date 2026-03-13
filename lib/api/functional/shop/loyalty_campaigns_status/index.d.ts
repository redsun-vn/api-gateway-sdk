import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { ICampaign } from "../../../../libs/shared/src/types/loyalty-service/icampaign.type";
export declare function updateStatus(connection: IConnection, id: string, data: updateStatus.Input): Promise<updateStatus.Output>;
export declare namespace updateStatus {
    type Input = Resolved<ICampaign.ICampaignUpdateStatus>;
    type Output = Primitive<IResponse<ICampaign.ICampaignResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/loyalty-campaigns-status/:id";
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
    const path: (id: string) => string;
}

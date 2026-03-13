import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { ICampaign } from "../../../../libs/shared/src/types/loyalty-service/icampaign.type";
export declare function findStats(connection: IConnection): Promise<findStats.Output>;
export declare namespace findStats {
    type Output = Primitive<IResponse<ICampaign.ICampaignStats>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/loyalty-campaigns-stats";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}

import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IPartner } from "../../../../../libs/shared/src/types/partner-service/ipartner";
export declare function getKpiSummary(connection: IConnection, partnerUuid: string): Promise<getKpiSummary.Output>;
export declare namespace getKpiSummary {
    type Output = Primitive<IResponse<IPartner.IKpiSummary>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/partners/:id/kpi-summary";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (partnerUuid: string) => string;
}

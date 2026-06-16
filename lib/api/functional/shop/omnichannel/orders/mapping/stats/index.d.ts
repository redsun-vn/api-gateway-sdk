import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { IOmnichannel } from "../../../../../../../libs/shared/src/types/omnichannel-service/omnichannel.type";
export declare function statistics(connection: IConnection, query: statistics.Query): Promise<statistics.Output>;
export declare namespace statistics {
    type Query = Resolved<IOmnichannel.MappingStatsQuery>;
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/omnichannel/orders/mapping/stats";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: statistics.Query) => string;
}

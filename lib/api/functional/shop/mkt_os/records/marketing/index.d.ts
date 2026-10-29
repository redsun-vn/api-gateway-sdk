import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IMktOsResults } from "../../../../../../libs/shared/src/types/crm-service/imkt-os-results";
export declare function recordMarketing(connection: IConnection, type: string, id: number): Promise<recordMarketing.Output>;
export declare namespace recordMarketing {
    type Output = Primitive<IResponse<IMktOsResults.IRecordMarketing>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/records/:type/:id/marketing";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (type: string, id: number) => string;
}

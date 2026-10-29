import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { IMktOs } from "../../../../../../../libs/shared/src/types/crm-service/imkt-os";
export declare function refreshDigest(connection: IConnection): Promise<refreshDigest.Output>;
export declare namespace refreshDigest {
    type Output = Primitive<IResponse<IMktOs.IMarketDigestRefreshed>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/market/digest/refresh";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: () => string;
}

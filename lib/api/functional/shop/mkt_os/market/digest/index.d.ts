import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IMktOs } from "../../../../../../libs/shared/src/types/crm-service/imkt-os";
export * as refresh from "./refresh";
export declare function getDigest(connection: IConnection): Promise<getDigest.Output>;
export declare namespace getDigest {
    type Output = Primitive<IResponse<IMktOs.IMarketDigest>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/market/digest";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}

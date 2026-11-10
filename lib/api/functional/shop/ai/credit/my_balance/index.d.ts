import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IAiCredit } from "../../../../../../libs/shared/src/types/ai-generation/index";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function getMyBalance(connection: IConnection): Promise<getMyBalance.Output>;
export declare namespace getMyBalance {
    type Output = Primitive<IResponse<IAiCredit.IMyBalanceResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/ai/credit/my-balance";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}

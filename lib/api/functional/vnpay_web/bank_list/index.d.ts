import type { IConnection, Primitive } from "@nestia/fetcher";
import type { Bank } from "@redsun-vn/vnpay/lib/types/bank.type";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
export declare function getBankList(connection: IConnection, shopId: string): Promise<getBankList.Output>;
export declare namespace getBankList {
    type Output = Primitive<IResponse<Array<Bank>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/vnpay-web/bank-list/:shopId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (shopId: string) => string;
}

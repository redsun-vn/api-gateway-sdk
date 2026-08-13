import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { IStockValuation } from "../../../../../../../libs/shared/src/types/inventory-service/istock-valuation.type";
export declare function setPolicyBulk(connection: IConnection, input: setPolicyBulk.Input): Promise<setPolicyBulk.Output>;
export declare namespace setPolicyBulk {
    type Input = Resolved<IStockValuation.ISetStockPolicyBulk>;
    type Output = Primitive<IResponse<number>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/inventory/stock-quantities/policy/bulk";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: () => string;
}

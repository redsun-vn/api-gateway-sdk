import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IStockValuation } from "../../../../../../libs/shared/src/types/inventory-service/istock-valuation.type";
export * as bulk from "./bulk";
export declare function setPolicy(connection: IConnection, input: setPolicy.Input): Promise<setPolicy.Output>;
export declare namespace setPolicy {
    type Input = Resolved<IStockValuation.ISetStockPolicy>;
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/inventory/stock-quantities/policy";
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

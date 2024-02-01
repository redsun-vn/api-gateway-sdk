import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ILoyaltyProgram } from "../../../../../libs/shared/src/types/loyalty-service/iloyalty-program";
export declare function applyDraftOrder(connection: IConnection, order_uuid: string): Promise<applyDraftOrder.Output>;
export declare namespace applyDraftOrder {
    type Output = Primitive<IResponse<Array<ILoyaltyProgram.ILoyaltyProgramResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/loyalty-programs/draft-order/:order_uuid";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (order_uuid: string) => string;
}

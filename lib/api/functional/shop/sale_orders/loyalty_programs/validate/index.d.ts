import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ILoyaltyProgram } from "../../../../../../libs/shared/src/types/loyalty-service/iloyalty-program";
import type { ISaleOrder } from "../../../../../../libs/shared/src/types/order-service/isale-order";
export declare function validateLoyaltyPrograms(connection: IConnection, body: validateLoyaltyPrograms.Input): Promise<validateLoyaltyPrograms.Output>;
export declare namespace validateLoyaltyPrograms {
    type Input = Resolved<ISaleOrder.ILoyaltyValidateBody>;
    type Output = Primitive<IResponse<Array<ILoyaltyProgram.ILoyaltyProgramResponse>>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/sale-orders/loyalty-programs/validate";
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

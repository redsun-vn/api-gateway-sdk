import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAiCredit } from "../../../../../../libs/shared/src/types/ai-generation/index";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function topUp(connection: IConnection, data: topUp.Input): Promise<topUp.Output>;
export declare namespace topUp {
    type Input = Resolved<IAiCredit.ITopUpRequest>;
    type Output = Primitive<IResponse<IAiCredit.ICreditTransaction>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/ai/credit/topup";
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

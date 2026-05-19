import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IDeposit } from "../../../../../libs/shared/src/types/deposit-service/ideposit";
export declare function confirmReceived(connection: IConnection, id: string, body: confirmReceived.Input): Promise<confirmReceived.Output>;
export declare namespace confirmReceived {
    type Input = Resolved<IDeposit.IConfirmReceived>;
    type Output = Primitive<IResponse<IDeposit.IDepositResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/deposits/:id/confirm-received";
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
    const path: (id: string) => string;
}

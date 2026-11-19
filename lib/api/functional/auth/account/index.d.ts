import type { IConnection, Resolved } from "@nestia/fetcher";
import type { IAccountDeletion } from "../../../../libs/shared/src/types/iaccount-deletion";
export declare function deleteAccount(connection: IConnection, input: deleteAccount.Input): Promise<void>;
export declare namespace deleteAccount {
    type Input = Resolved<IAccountDeletion.IDeleteRequest>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/auth/account";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 204;
    };
    const path: () => string;
}

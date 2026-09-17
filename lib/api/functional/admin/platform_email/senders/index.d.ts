import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IPlatformEmail } from "../../../../../libs/shared/src/types/admin-service/iplatform-email";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export * as test_send from "./test_send";
export declare function list(connection: IConnection): Promise<list.Output>;
export declare namespace list {
    type Output = Primitive<IResponse<Array<IPlatformEmail.ISender>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/platform-email/senders";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function get(connection: IConnection, brandCode: string): Promise<get.Output>;
export declare namespace get {
    type Output = Primitive<IResponse<null | IPlatformEmail.ISender>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/platform-email/senders/:brandCode";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (brandCode: string) => string;
}
export declare function upsert(connection: IConnection, body: upsert.Input): Promise<upsert.Output>;
export declare namespace upsert {
    type Input = Resolved<IPlatformEmail.ISenderUpsert>;
    type Output = Primitive<IResponse<IPlatformEmail.ISender>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/platform-email/senders";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function activate(connection: IConnection, brandCode: string): Promise<activate.Output>;
export declare namespace activate {
    type Output = Primitive<IResponse<IPlatformEmail.ISender>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/platform-email/senders/:brandCode/activate";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (brandCode: string) => string;
}
export declare function deactivate(connection: IConnection, brandCode: string): Promise<deactivate.Output>;
export declare namespace deactivate {
    type Output = Primitive<IResponse<IPlatformEmail.ISender>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/platform-email/senders/:brandCode/deactivate";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (brandCode: string) => string;
}

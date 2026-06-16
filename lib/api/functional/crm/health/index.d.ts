import type { IConnection, Primitive } from "@nestia/fetcher";
export declare function check(connection: IConnection): Promise<check.Output>;
export declare namespace check {
    type Output = Primitive<any>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/crm/health";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}

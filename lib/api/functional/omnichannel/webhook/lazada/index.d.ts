import type { IConnection, Primitive } from "@nestia/fetcher";
export declare function webhookFromLazada(connection: IConnection): Promise<webhookFromLazada.Output>;
export declare namespace webhookFromLazada {
    type Output = Primitive<any>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/omnichannel/webhook/lazada";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: () => string;
}

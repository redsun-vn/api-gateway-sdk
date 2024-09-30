import type { IConnection, Primitive } from "@nestia/fetcher";
export declare function exportTemplate(connection: IConnection): Promise<exportTemplate.Output>;
export declare namespace exportTemplate {
    type Output = Primitive<any>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/product/template";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}

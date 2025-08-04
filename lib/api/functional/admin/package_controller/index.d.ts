import type { IConnection, Primitive } from "@nestia/fetcher";
export declare function $export(connection: IConnection, categoryId: string): Promise<$export.Output>;
export declare namespace $export {
    type Output = Primitive<any>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/package-controller/export/:categoryId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (categoryId: string) => string;
}

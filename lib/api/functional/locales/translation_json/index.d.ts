import type { IConnection, Primitive } from "@nestia/fetcher";
export declare function findAll(connection: IConnection, ns: string, lang: string): Promise<findAll.Output>;
export declare namespace findAll {
    type Output = Primitive<Record<string, string>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/locales/:ns/:lang/translation.json";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (ns: string, lang: string) => string;
}

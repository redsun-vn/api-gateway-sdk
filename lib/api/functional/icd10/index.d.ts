import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../libs/shared/src/types/common.type";
import type { IIcd10ListQuery, IIcd10ListData, IIcd10SearchQuery, IIcd10Code } from "../../../libs/shared/src/types/icd10.types";
export declare function list(connection: IConnection, query: list.Query): Promise<list.Output>;
export declare namespace list {
    type Query = Resolved<IIcd10ListQuery>;
    type Output = Primitive<IResponse<IIcd10ListData>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/icd10";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: list.Query) => string;
}
export declare function search(connection: IConnection, query: search.Query): Promise<search.Output>;
export declare namespace search {
    type Query = Resolved<IIcd10SearchQuery>;
    type Output = Primitive<IResponse<Array<IIcd10Code>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/icd10/search";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: search.Query) => string;
}
export declare function all(connection: IConnection): Promise<all.Output>;
export declare namespace all {
    type Output = Primitive<void | Array<IIcd10Code>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/icd10/all";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function findOne(connection: IConnection, code: string): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<IIcd10Code>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/icd10/:code";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (code: string) => string;
}

import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponsePagination } from "../../../libs/shared/src/types/common.type";
import type { ILanguage } from "../../../libs/shared/src/types/ilanguage.type";
export declare function findAllLanguages(connection: IConnection, query: findAllLanguages.Query): Promise<findAllLanguages.Output>;
export declare namespace findAllLanguages {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponsePagination<ILanguage.ILanguageResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/languages";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAllLanguages.Query) => string;
}

import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../libs/shared/src/types/common.type";
import type { ITranslation } from "../../../../libs/shared/src/types/translation-service/itranslation.type";
export declare function findAll(connection: IConnection, query: findAll.Query, shopId: string): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<ITranslation.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/translation-resource/translations/:shopId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query, shopId: string) => string;
}

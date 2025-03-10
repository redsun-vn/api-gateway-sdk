import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery } from "../../../../libs/shared/src/types/common.type";
import type { ITranslationImport } from "../../../../libs/shared/src/types/itranslation-import.type";
export declare function uploadFile(connection: IConnection, body: uploadFile.Input, query: uploadFile.Query): Promise<uploadFile.Output>;
export declare namespace uploadFile {
    type Query = Resolved<IQuery>;
    type Input = Resolved<ITranslationImport.ImportDto>;
    type Output = Primitive<any>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/translation-import";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (query: uploadFile.Query) => string;
}

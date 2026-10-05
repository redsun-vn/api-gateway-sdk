import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IProductImport } from "../../../../../../libs/shared/src/types/product-service/iproduct-import";
export declare function preview(connection: IConnection): Promise<preview.Output>;
export declare namespace preview {
    type Output = Primitive<IResponse<IProductImport.IPreviewResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/product/import/preview";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: () => string;
}
export declare function previewPage(connection: IConnection, importId: string, query: previewPage.Query): Promise<previewPage.Output>;
export declare namespace previewPage {
    type Query = Resolved<IProductImport.IPreviewQuery>;
    type Output = Primitive<IResponse<IProductImport.IPreviewPage>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/product/import/:importId/preview";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (importId: string, query: previewPage.Query) => string;
}

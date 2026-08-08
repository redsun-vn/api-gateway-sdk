import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ICrmReportView } from "../../../../../libs/shared/src/types/crm-service/ireport-view";
export * as metrics from "./metrics";
export * as views from "./views";
export declare function catalog(connection: IConnection, query: catalog.Query): Promise<catalog.Output>;
export declare namespace catalog {
    type Query = Resolved<ICrmReportView.ICatalogQuery>;
    type Output = Primitive<IResponse<ICrmReportView.ICatalogResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/reports/catalog";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: catalog.Query) => string;
}
export declare function $export(connection: IConnection, data: $export.Input): Promise<$export.Output>;
export declare namespace $export {
    type Input = Resolved<ICrmReportView.IExportRequest>;
    type Output = Primitive<IResponse<ICrmReportView.IExportResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/reports/export";
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
    const path: () => string;
}

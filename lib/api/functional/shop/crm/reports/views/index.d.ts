import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmReportView } from "../../../../../../libs/shared/src/types/crm-service/ireport-view";
export * as run from "./run";
export declare function findAllViews(connection: IConnection): Promise<findAllViews.Output>;
export declare namespace findAllViews {
    type Output = Primitive<IResponse<Array<ICrmReportView.ICrmReportViewResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/reports/views";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function createView(connection: IConnection, data: createView.Input): Promise<createView.Output>;
export declare namespace createView {
    type Input = Resolved<ICrmReportView.ICreate>;
    type Output = Primitive<IResponse<ICrmReportView.ICrmReportViewResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/reports/views";
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
export declare function updateView(connection: IConnection, id: string, data: updateView.Input): Promise<updateView.Output>;
export declare namespace updateView {
    type Input = Resolved<Partial<ICrmReportView.ICreate>>;
    type Output = Primitive<IResponse<ICrmReportView.ICrmReportViewResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/crm/reports/views/:id";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function deleteView(connection: IConnection, id: string): Promise<deleteView.Output>;
export declare namespace deleteView {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/crm/reports/views/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}

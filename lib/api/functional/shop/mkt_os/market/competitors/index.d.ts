import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IMktOs } from "../../../../../../libs/shared/src/types/crm-service/imkt-os";
export declare function listCompetitors(connection: IConnection, query: listCompetitors.Query): Promise<listCompetitors.Output>;
export declare namespace listCompetitors {
    type Query = Resolved<IMktOs.ICompetitorsQuery>;
    type Output = Primitive<IResponse<IMktOs.ICompetitorsResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/market/competitors";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: listCompetitors.Query) => string;
}
export declare function createCompetitor(connection: IConnection, body: createCompetitor.Input): Promise<createCompetitor.Output>;
export declare namespace createCompetitor {
    type Input = Resolved<IMktOs.ICompetitorCreateRequest>;
    type Output = Primitive<IResponse<IMktOs.ICompetitorSaved>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/market/competitors";
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
export declare function updateCompetitor(connection: IConnection, id: string, body: updateCompetitor.Input): Promise<updateCompetitor.Output>;
export declare namespace updateCompetitor {
    type Input = Resolved<IMktOs.ICompetitorUpdateRequest>;
    type Output = Primitive<IResponse<IMktOs.ICompetitorSaved>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/mkt-os/market/competitors/:id";
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

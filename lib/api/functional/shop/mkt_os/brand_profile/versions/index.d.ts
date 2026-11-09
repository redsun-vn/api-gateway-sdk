import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IMktOs } from "../../../../../../libs/shared/src/types/crm-service/imkt-os";
export declare function listVersions(connection: IConnection, query: listVersions.Query): Promise<listVersions.Output>;
export declare namespace listVersions {
    type Query = Resolved<IMktOs.IBrandProfileVersionsQuery>;
    type Output = Primitive<IResponse<IMktOs.IBrandProfileVersionsResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/brand-profile/versions";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: listVersions.Query) => string;
}
export declare function saveVersion(connection: IConnection, body: saveVersion.Input): Promise<saveVersion.Output>;
export declare namespace saveVersion {
    type Input = Resolved<IMktOs.IBrandProfileSaveRequest>;
    type Output = Primitive<IResponse<IMktOs.IBrandProfileSaved>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/brand-profile/versions";
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

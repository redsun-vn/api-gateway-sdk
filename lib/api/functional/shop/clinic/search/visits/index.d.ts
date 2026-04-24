import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../../libs/shared/src/types/common.type";
import type { IClinicVisit } from "../../../../../../libs/shared/src/types/partner-service/iclinic-visit";
export declare function searchVisits(connection: IConnection, query: searchVisits.Query): Promise<searchVisits.Output>;
export declare namespace searchVisits {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IClinicVisit.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/clinic/search/visits";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: searchVisits.Query) => string;
}

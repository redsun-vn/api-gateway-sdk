import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../../libs/shared/src/types/common.type";
import type { IClinicPrescription } from "../../../../../../libs/shared/src/types/partner-service/iclinic-prescription";
export declare function searchPrescriptions(connection: IConnection, query: searchPrescriptions.Query): Promise<searchPrescriptions.Output>;
export declare namespace searchPrescriptions {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IClinicPrescription.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/clinic/search/prescriptions";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: searchPrescriptions.Query) => string;
}

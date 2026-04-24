import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../../libs/shared/src/types/common.type";
import type { IClinicPatient } from "../../../../../../libs/shared/src/types/partner-service/iclinic-patient";
export declare function searchPatientProfiles(connection: IConnection, query: searchPatientProfiles.Query): Promise<searchPatientProfiles.Output>;
export declare namespace searchPatientProfiles {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IClinicPatient.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/clinic/search/patient-profiles";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: searchPatientProfiles.Query) => string;
}

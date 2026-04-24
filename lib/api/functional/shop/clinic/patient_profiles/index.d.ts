import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IClinicPatient } from "../../../../../libs/shared/src/types/partner-service/iclinic-patient";
export * as consent from "./consent";
export declare function upsert(connection: IConnection, dto: upsert.Input): Promise<upsert.Output>;
export declare namespace upsert {
    type Input = Resolved<IClinicPatient.ICreate>;
    type Output = Primitive<IResponse<IClinicPatient.IDetailResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/clinic/patient-profiles";
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
export declare function findOne(connection: IConnection, partnerId: string, query: findOne.Query): Promise<findOne.Output>;
export declare namespace findOne {
    type Query = Resolved<IClinicPatient.IProfileQuery>;
    type Output = Primitive<IResponse<IClinicPatient.IDetailResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/clinic/patient-profiles/:partnerId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (partnerId: string, query: findOne.Query) => string;
}
export declare function update(connection: IConnection, partnerId: string, dto: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<Partial<IClinicPatient.ICreate>>;
    type Output = Primitive<IResponse<IClinicPatient.IDetailResponse>>;
    const METADATA: {
        readonly method: "PATCH";
        readonly path: "/shop/clinic/patient-profiles/:partnerId";
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
    const path: (partnerId: string) => string;
}
export declare function $delete(connection: IConnection, partnerId: string): Promise<$delete.Output>;
export declare namespace $delete {
    type Output = Primitive<IResponse<IClinicPatient.IDetailResponse>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/clinic/patient-profiles/:partnerId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (partnerId: string) => string;
}

import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IClinicPatient } from "../../../../../../libs/shared/src/types/partner-service/iclinic-patient";
export declare function signConsent(connection: IConnection, partnerId: string, dto: signConsent.Input): Promise<signConsent.Output>;
export declare namespace signConsent {
    type Input = Resolved<IClinicPatient.ISignConsent>;
    type Output = Primitive<IResponse<IClinicPatient.IDetailResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/clinic/patient-profiles/:partnerId/consent";
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
    const path: (partnerId: string) => string;
}

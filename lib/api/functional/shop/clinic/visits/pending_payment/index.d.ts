import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IClinicVisit } from "../../../../../../libs/shared/src/types/partner-service/iclinic-visit";
export declare function pendingPayment(connection: IConnection, id: string, input: pendingPayment.Input): Promise<pendingPayment.Output>;
export declare namespace pendingPayment {
    type Input = Resolved<IClinicVisit.IPendingPayment>;
    type Output = Primitive<IResponse<IClinicVisit.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/clinic/visits/:id/pending-payment";
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
    const path: (id: string) => string;
}

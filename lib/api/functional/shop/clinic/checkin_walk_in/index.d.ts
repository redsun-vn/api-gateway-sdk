import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IClinicVisit } from "../../../../../libs/shared/src/types/partner-service/iclinic-visit";
export declare function checkin(connection: IConnection, dto: checkin.Input): Promise<checkin.Output>;
export declare namespace checkin {
    type Input = Resolved<IClinicVisit.ICheckInWalkInDto>;
    type Output = Primitive<IResponse<IClinicVisit.ICheckInWalkInResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/clinic/checkin-walk-in";
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

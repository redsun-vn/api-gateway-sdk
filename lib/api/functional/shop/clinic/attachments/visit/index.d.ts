import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IClinicAttachment } from "../../../../../../libs/shared/src/types/partner-service/iclinic-attachment";
export declare function findByVisit(connection: IConnection, visitId: string): Promise<findByVisit.Output>;
export declare namespace findByVisit {
    type Output = Primitive<IResponse<Array<IClinicAttachment.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/clinic/attachments/visit/:visitId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (visitId: string) => string;
}

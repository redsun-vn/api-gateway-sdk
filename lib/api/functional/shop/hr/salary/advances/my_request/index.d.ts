import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { ISalaryAdvance } from "../../../../../../../libs/shared/src/types/hr/salary/salary-advance";
export declare function createMyRequest(connection: IConnection, data: createMyRequest.Input): Promise<createMyRequest.Output>;
export declare namespace createMyRequest {
    type Input = Resolved<ISalaryAdvance.ICreateMyRequest>;
    type Output = Primitive<IResponse<ISalaryAdvance.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/hr/salary/advances/my-request";
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

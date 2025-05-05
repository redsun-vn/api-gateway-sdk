import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { ILeave } from "../../../../../../../libs/shared/src/types/hr/salary/leave";
export declare function createMyRequest(connection: IConnection, data: createMyRequest.Input): Promise<createMyRequest.Output>;
export declare namespace createMyRequest {
    type Input = Resolved<ILeave.ICreateLeaveRequest>;
    type Output = Primitive<IResponse<ILeave.ILeaveRequestResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/hr/salary/leave-requests/my-request";
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

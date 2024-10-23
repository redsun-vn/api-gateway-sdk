import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { IAttendanceDetail } from "../../../../../../../libs/shared/src/types/hr/attendance/detail";
export declare function updateTime(connection: IConnection, data: updateTime.Input, id: string): Promise<updateTime.Output>;
export declare namespace updateTime {
    type Input = Resolved<IAttendanceDetail.IUpdateTime>;
    type Output = Primitive<IResponse<IAttendanceDetail.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/hr/attendance/details/:id/time";
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
    const path: (id: string) => string;
}

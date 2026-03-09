import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function cancelAppointmentReminder(connection: IConnection, id: string): Promise<cancelAppointmentReminder.Output>;
export declare namespace cancelAppointmentReminder {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/appointment-reminder/:id/cancel";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}

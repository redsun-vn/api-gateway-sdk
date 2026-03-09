import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse, IQuery, IResponsePagination } from "../../../../libs/shared/src/types/common.type";
import type { IZaloOA } from "../../../../libs/shared/src/types/notification/izalo-oa.type";
export * as send from "./send";
export * as cancel from "./cancel";
export declare function createAppointmentReminder(connection: IConnection, input: createAppointmentReminder.Input): Promise<createAppointmentReminder.Output>;
export declare namespace createAppointmentReminder {
    type Input = Resolved<Omit<IZaloOA.IAppointmentReminder, "shop_id">>;
    type Output = Primitive<IResponse<IZaloOA.IAppointmentReminderResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/appointment-reminder";
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
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IZaloOA.IAppointmentReminderResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/appointment-reminder";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}

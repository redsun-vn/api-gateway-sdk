import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IMktOsToday } from "../../../../libs/shared/src/types/crm-service/imkt-os-today";
export * as market from "./market";
export * as audiences from "./audiences";
export * as brand_profile from "./brand_profile";
export * as campaigns from "./campaigns";
export * as runs from "./runs";
export * as email from "./email";
export * as email_layouts from "./email_layouts";
export * as records from "./records";
export * as approvals from "./approvals";
export * as entitlement from "./entitlement";
export * as settings from "./settings";
export * as channels from "./channels";
export * as unsubscribes from "./unsubscribes";
export * as subscriber_bulk_jobs from "./subscriber_bulk_jobs";
export * as subscriber_imports from "./subscriber_imports";
export * as subscribers from "./subscribers";
export * as subscriber_lists from "./subscriber_lists";
export * as subscriber_fields from "./subscriber_fields";
export * as suggestions from "./suggestions";
export * as ads from "./ads";
export * as social from "./social";
export declare function daily(connection: IConnection): Promise<daily.Output>;
export declare namespace daily {
    type Output = Primitive<IResponse<IMktOsToday.IDaily>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/daily";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}

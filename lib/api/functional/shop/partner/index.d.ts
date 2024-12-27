import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery } from "../../../../libs/shared/src/types/common.type";
import type { IPartner } from "../../../../libs/shared/src/types/partner-service/ipartner";
export * as addresses from "./addresses";
export * as $import from "./$import";
export * as tags from "./tags";
export declare function $export(connection: IConnection, type: IPartner.TypePartnerUpload, query: $export.Query): Promise<$export.Output>;
export declare namespace $export {
    type Query = Resolved<IQuery>;
    type Output = Primitive<any>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/partner/export/:type";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (type: IPartner.TypePartnerUpload, query: $export.Query) => string;
}

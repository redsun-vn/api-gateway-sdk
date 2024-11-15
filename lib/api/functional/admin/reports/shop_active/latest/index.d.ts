import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IActivityLog } from "../../../../../../libs/shared/src/types/iactivity-log";
export declare function getShopLastedActive(connection: IConnection, query: getShopLastedActive.Query): Promise<getShopLastedActive.Output>;
export declare namespace getShopLastedActive {
    type Query = Resolved<IActivityLog.IQueryLatestActivity>;
    type Output = Primitive<IResponse<Array<IActivityLog.ILatestActivity>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/reports/shop-active/latest";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getShopLastedActive.Query) => string;
}

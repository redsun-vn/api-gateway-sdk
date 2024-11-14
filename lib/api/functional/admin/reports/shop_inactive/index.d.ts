import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IReportShopInActive } from "../../../../../libs/shared/src/types/report-service/index";
export * as latest from "./latest";
export declare function getShopInActive(connection: IConnection, subtractNum: number): Promise<getShopInActive.Output>;
export declare namespace getShopInActive {
    type Output = Primitive<IResponse<IReportShopInActive>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/reports/shop-inactive/:subtractNum";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (subtractNum: number) => string;
}

import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IStaff } from "../../../../../../libs/shared/src/types/istaff";
export declare function getMyShopStatus(connection: IConnection): Promise<getMyShopStatus.Output>;
export declare namespace getMyShopStatus {
    type Output = Primitive<IResponse<IStaff.IMyShopStatus>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/staffs/me/shop-status";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}

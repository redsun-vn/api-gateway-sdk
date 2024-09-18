import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IEMenuConfig } from "../../../../../../libs/shared/src/types/reservation-service/iemenu-config";
export declare function findOne(connection: IConnection): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<IEMenuConfig.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/reservation/e-menu/config";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: () => string;
}

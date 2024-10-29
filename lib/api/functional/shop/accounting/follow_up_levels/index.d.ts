import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IFollowUpLevel } from "../../../../../libs/shared/src/types/financial-service/debt/ifollow-up";
export * as lines from "./lines";
export declare function findOneLevel(connection: IConnection): Promise<findOneLevel.Output>;
export declare namespace findOneLevel {
    type Output = Primitive<IResponse<IFollowUpLevel.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/accounting/follow-up-levels";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}

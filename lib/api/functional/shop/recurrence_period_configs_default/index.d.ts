import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IRecurrencePeriodConfig } from "../../../../libs/shared/src/types/product-service/irecurrence-period-config";
export declare function createDefault(connection: IConnection): Promise<createDefault.Output>;
export declare namespace createDefault {
    type Output = Primitive<IResponse<Array<IRecurrencePeriodConfig.IResponse>>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/recurrence-period-configs-default";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: () => string;
}

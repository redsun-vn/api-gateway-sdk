import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IAiSystemConfig } from "../../../../../../../libs/shared/src/types/ai-generation/index";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
export declare function getCreditPriceVnd(connection: IConnection): Promise<getCreditPriceVnd.Output>;
export declare namespace getCreditPriceVnd {
    type Output = Primitive<IResponse<IAiSystemConfig.ICreditPriceVndResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/ai/config/pricing/credit-price-vnd";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}

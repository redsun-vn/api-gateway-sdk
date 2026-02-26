import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAiSystemConfig } from "../../../../../../../libs/shared/src/types/ai-generation/index";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
export declare function getTextCredits(connection: IConnection, query: getTextCredits.Query): Promise<getTextCredits.Output>;
export declare namespace getTextCredits {
    type Query = Resolved<IAiSystemConfig.IGetTextCreditsRequest>;
    type Output = Primitive<IResponse<IAiSystemConfig.ICreditsResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/ai/config/pricing/text-credits";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getTextCredits.Query) => string;
}

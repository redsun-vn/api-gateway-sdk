import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAiSystemConfig } from "../../../../../../../libs/shared/src/types/ai-generation/index";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
export declare function getImageCredits(connection: IConnection, query: getImageCredits.Query): Promise<getImageCredits.Output>;
export declare namespace getImageCredits {
    type Query = Resolved<IAiSystemConfig.IGetImageCreditsRequest>;
    type Output = Primitive<IResponse<IAiSystemConfig.ICreditsResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/ai/config/pricing/image-credits";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getImageCredits.Query) => string;
}

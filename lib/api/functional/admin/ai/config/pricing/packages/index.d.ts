import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IAiSystemConfig } from "../../../../../../../libs/shared/src/types/ai-generation/index";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
export declare function getPackages(connection: IConnection): Promise<getPackages.Output>;
export declare namespace getPackages {
    type Output = Primitive<IResponse<Array<IAiSystemConfig.ICreditPackage>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/ai/config/pricing/packages";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}

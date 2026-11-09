import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IMktOs } from "../../../../../../libs/shared/src/types/crm-service/imkt-os";
export declare function getExamples(connection: IConnection): Promise<getExamples.Output>;
export declare namespace getExamples {
    type Output = Primitive<IResponse<IMktOs.IBrandProfileExamplesResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/brand-profile/examples";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}

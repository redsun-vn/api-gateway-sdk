import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmAiProfile } from "../../../../../../libs/shared/src/types/crm-service/iai-assist";
export declare function aiProfile(connection: IConnection): Promise<aiProfile.Output>;
export declare namespace aiProfile {
    type Output = Primitive<IResponse<ICrmAiProfile.IFindResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/shop-config/ai-profile";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}

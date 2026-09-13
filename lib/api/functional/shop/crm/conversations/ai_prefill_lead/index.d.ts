import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmAiAssist } from "../../../../../../libs/shared/src/types/crm-service/iai-assist";
export declare function requestPrefill(connection: IConnection, id: number): Promise<requestPrefill.Output>;
export declare namespace requestPrefill {
    type Output = Primitive<IResponse<ICrmAiAssist.IPrefillLeadResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/conversations/:id/ai-prefill-lead";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: number) => string;
}
export declare function getPrefill(connection: IConnection, id: number): Promise<getPrefill.Output>;
export declare namespace getPrefill {
    type Output = Primitive<IResponse<ICrmAiAssist.IPrefillLeadResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/conversations/:id/ai-prefill-lead";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}

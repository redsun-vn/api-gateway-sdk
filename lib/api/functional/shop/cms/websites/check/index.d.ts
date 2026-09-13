import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IWebsite } from "../../../../../../libs/shared/src/types/cms-service/iwebsite";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function requestCheck(connection: IConnection, id: string): Promise<requestCheck.Output>;
export declare namespace requestCheck {
    type Output = Primitive<IResponse<IWebsite.IRequestCheckResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/cms/websites/:id/check";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 202;
    };
    const path: (id: string) => string;
}

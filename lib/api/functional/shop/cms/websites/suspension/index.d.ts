import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IWebsite } from "../../../../../../libs/shared/src/types/cms-service/iwebsite";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function updateSuspension(connection: IConnection, id: string, data: updateSuspension.Input): Promise<updateSuspension.Output>;
export declare namespace updateSuspension {
    type Input = Resolved<IWebsite.ISuspensionReq>;
    type Output = Primitive<IResponse<IWebsite.IResponse>>;
    const METADATA: {
        readonly method: "PATCH";
        readonly path: "/shop/cms/websites/:id/suspension";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}

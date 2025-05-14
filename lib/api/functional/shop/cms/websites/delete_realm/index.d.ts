import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IWebsite } from "../../../../../../libs/shared/src/types/cms-service/iwebsite";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function deleteRealm(connection: IConnection, data: deleteRealm.Input): Promise<deleteRealm.Output>;
export declare namespace deleteRealm {
    type Input = Resolved<IWebsite.ICreateRealmReq>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/cms/websites/delete-realm";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: () => string;
}

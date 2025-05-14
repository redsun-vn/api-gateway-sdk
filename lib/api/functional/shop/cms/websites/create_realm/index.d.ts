import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IWebsite } from "../../../../../../libs/shared/src/types/cms-service/iwebsite";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function createRealm(connection: IConnection, data: createRealm.Input): Promise<createRealm.Output>;
export declare namespace createRealm {
    type Input = Resolved<IWebsite.ICreateRealmReq>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/cms/websites/create-realm";
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

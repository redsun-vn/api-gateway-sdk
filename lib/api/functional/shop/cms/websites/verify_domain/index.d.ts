import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IWebsite } from "../../../../../../libs/shared/src/types/cms-service/iwebsite";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function verifyDomain(connection: IConnection, id: string): Promise<verifyDomain.Output>;
export declare namespace verifyDomain {
    type Output = Primitive<IResponse<IWebsite.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/cms/websites/verify-domain/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: string) => string;
}

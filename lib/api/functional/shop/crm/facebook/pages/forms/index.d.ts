import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { ICrmFacebook } from "../../../../../../../libs/shared/src/types/crm-service/ifacebook";
export * as mapping from "./mapping";
export declare function listForms(connection: IConnection, id: number): Promise<listForms.Output>;
export declare namespace listForms {
    type Output = Primitive<IResponse<Array<ICrmFacebook.IFbFormItem>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/facebook/pages/:id/forms";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}

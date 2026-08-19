import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IEmailTemplate } from "../../../../../../libs/shared/src/types/notification/iemail-config.type";
export declare function listRegisteredVariables(connection: IConnection, modelKey: string): Promise<listRegisteredVariables.Output>;
export declare namespace listRegisteredVariables {
    type Output = Primitive<IResponse<Array<IEmailTemplate.IVariable>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/email/actions/variables/:model_key";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (modelKey: string) => string;
}

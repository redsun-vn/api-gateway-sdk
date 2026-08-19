import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IEmailTemplate } from "../../../../../../libs/shared/src/types/notification/iemail-config.type";
export declare function activateTemplate(connection: IConnection, id: number): Promise<activateTemplate.Output>;
export declare namespace activateTemplate {
    type Output = Primitive<IResponse<IEmailTemplate.IResponse>>;
    const METADATA: {
        readonly method: "PATCH";
        readonly path: "/shop/email/templates/:id/activate";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}

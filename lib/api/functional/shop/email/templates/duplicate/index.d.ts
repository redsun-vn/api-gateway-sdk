import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IEmailTemplate } from "../../../../../../libs/shared/src/types/notification/iemail-config.type";
export declare function duplicateTemplate(connection: IConnection, id: number, dto: duplicateTemplate.Input): Promise<duplicateTemplate.Output>;
export declare namespace duplicateTemplate {
    type Input = Resolved<IEmailTemplate.IDuplicateRequest>;
    type Output = Primitive<IResponse<IEmailTemplate.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/email/templates/:id/duplicate";
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
    const path: (id: number) => string;
}

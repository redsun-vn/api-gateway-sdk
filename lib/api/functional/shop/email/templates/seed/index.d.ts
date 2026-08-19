import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IEmailTemplate } from "../../../../../../libs/shared/src/types/notification/iemail-config.type";
export declare function seedTemplates(connection: IConnection, dto: seedTemplates.Input): Promise<seedTemplates.Output>;
export declare namespace seedTemplates {
    type Input = Resolved<IEmailTemplate.ISeedRequest>;
    type Output = Primitive<IResponse<IEmailTemplate.ISeedResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/email/templates/seed";
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

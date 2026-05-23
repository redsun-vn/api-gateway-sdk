import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmAttachment } from "../../../../../../libs/shared/src/types/crm-service/iattachment";
export declare function findAll(connection: IConnection, opportunityId: number): Promise<findAll.Output>;
export declare namespace findAll {
    type Output = Primitive<IResponse<Array<ICrmAttachment.IAttachmentResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/opportunity/:opportunity_id/attachments";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (opportunityId: number) => string;
}
export declare function create(connection: IConnection, opportunityId: number, body: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<ICrmAttachment.ICreate>;
    type Output = Primitive<IResponse<ICrmAttachment.IAttachmentResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/opportunity/:opportunity_id/attachments";
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
    const path: (opportunityId: number) => string;
}

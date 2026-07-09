import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmAttachment } from "../../../../../../libs/shared/src/types/crm-service/iattachment";
export declare function grantAccess(connection: IConnection, attachmentRefId: string): Promise<grantAccess.Output>;
export declare namespace grantAccess {
    type Output = Primitive<IResponse<ICrmAttachment.IGrantResult>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/attachments/:attachment_ref_id/access";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (attachmentRefId: string) => string;
}

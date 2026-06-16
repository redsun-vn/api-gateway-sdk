import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ICrmAttachment } from "../../../../../libs/shared/src/types/crm-service/iattachment";
export * as access from "./access";
export declare function remove(connection: IConnection, attachmentRefId: string): Promise<remove.Output>;
export declare namespace remove {
    type Output = Primitive<IResponse<ICrmAttachment.IDeleteResult>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/crm/attachments/:attachment_ref_id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (attachmentRefId: string) => string;
}

import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../../libs/shared/src/types/common.type";
import type { IClinicAttachment } from "../../../../../../libs/shared/src/types/partner-service/iclinic-attachment";
export declare function searchAttachments(connection: IConnection, query: searchAttachments.Query): Promise<searchAttachments.Output>;
export declare namespace searchAttachments {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IClinicAttachment.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/clinic/search/attachments";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: searchAttachments.Query) => string;
}

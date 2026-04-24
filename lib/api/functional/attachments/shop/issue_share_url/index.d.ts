import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IFile } from "../../../../../libs/shared/src/types/ifile";
export declare function issueShareUrl(connection: IConnection, id: string): Promise<issueShareUrl.Output>;
export declare namespace issueShareUrl {
    type Output = Primitive<IResponse<IFile.IssueShareUrlResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/attachments/shop/issue-share-url/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: string) => string;
}

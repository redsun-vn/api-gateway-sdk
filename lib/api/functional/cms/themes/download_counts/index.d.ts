import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IThemePublish } from "../../../../../libs/shared/src/types/cms-service/itheme-publish";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function downloadCounts(connection: IConnection, query: downloadCounts.Query): Promise<downloadCounts.Output>;
export declare namespace downloadCounts {
    type Query = Resolved<IThemePublish.IIdsQuery>;
    type Output = Primitive<IResponse<IThemePublish.IDownloadCounts>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/cms/themes/download-counts";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: downloadCounts.Query) => string;
}

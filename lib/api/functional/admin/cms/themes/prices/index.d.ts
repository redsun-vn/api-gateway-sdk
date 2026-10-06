import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IThemePublish } from "../../../../../../libs/shared/src/types/cms-service/itheme-publish";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function findPrices(connection: IConnection, query: findPrices.Query): Promise<findPrices.Output>;
export declare namespace findPrices {
    type Query = Resolved<IThemePublish.IIdsQuery>;
    type Output = Primitive<IResponse<Array<IThemePublish.IPriceResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/cms/themes/prices";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findPrices.Query) => string;
}

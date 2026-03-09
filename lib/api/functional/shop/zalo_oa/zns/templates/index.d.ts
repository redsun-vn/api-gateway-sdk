import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IZaloOA } from "../../../../../../libs/shared/src/types/notification/izalo-oa.type";
export declare function listTemplates(connection: IConnection, query: listTemplates.Query): Promise<listTemplates.Output>;
export declare namespace listTemplates {
    type Query = Resolved<Omit<IZaloOA.IZNSTemplateListRequest, "shop_id">>;
    type Output = Primitive<IResponse<Array<IZaloOA.IZNSTemplateListItem>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/zalo-oa/zns/templates";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: listTemplates.Query) => string;
}

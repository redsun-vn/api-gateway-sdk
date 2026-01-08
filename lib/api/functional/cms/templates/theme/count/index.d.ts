import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ITemplate } from "../../../../../../libs/shared/src/types/cms-service/itemplate";
import type { IQuery, IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function getGroupCountTree(connection: IConnection, query: getGroupCountTree.Query): Promise<getGroupCountTree.Output>;
export declare namespace getGroupCountTree {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<ITemplate.IGroupCountMap>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/cms/templates/theme/count";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getGroupCountTree.Query) => string;
}

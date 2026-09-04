import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICMSMenu } from "../../../../../libs/shared/src/types/cms-service/imenu";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function findByHandle(connection: IConnection, query: findByHandle.Query): Promise<findByHandle.Output>;
export declare namespace findByHandle {
    type Query = Resolved<ICMSMenu.IFindByHandleQuery>;
    type Output = Primitive<IResponse<ICMSMenu.IPublicResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/cms/menus/by-handle";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findByHandle.Query) => string;
}

import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { ICMSPage } from "../../../../../libs/shared/src/types/cms-service/ipage";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function $delete(connection: IConnection, id: string): Promise<$delete.Output>;
export declare namespace $delete {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/admin/cms/pages/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function create(connection: IConnection, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<ICMSPage.ICreateReq>;
    type Output = Primitive<IResponse<ICMSPage.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/cms/pages";
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
    const path: () => string;
}
export declare function update(connection: IConnection, data: update.Input, id: string): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<ICMSPage.IUpdateReq>;
    type Output = Primitive<IResponse<ICMSPage.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/cms/pages/:id";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}

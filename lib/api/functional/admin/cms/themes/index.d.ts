import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ITheme } from "../../../../../libs/shared/src/types/cms-service/itheme";
import type { IThemePublish } from "../../../../../libs/shared/src/types/cms-service/itheme-publish";
import type { IResponse, IQuery, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
export * as prices from "./prices";
export * as download_counts from "./download_counts";
export * as $return from "./$return";
export * as draft from "./draft";
export * as discard from "./discard";
export * as pricing from "./pricing";
export declare function approve(connection: IConnection, body: approve.Input): Promise<approve.Output>;
export declare namespace approve {
    type Input = Resolved<IThemePublish.IApproveReq>;
    type Output = Primitive<IResponse<Array<ITheme.IAdminResponse>>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/cms/themes/approve";
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
    const path: () => string;
}
export declare function reindex(connection: IConnection, body: reindex.Input): Promise<reindex.Output>;
export declare namespace reindex {
    type Input = Resolved<IThemePublish.IReindexReq>;
    type Output = Primitive<IResponse<IThemePublish.IReindexResult>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/cms/themes/reindex";
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
    const path: () => string;
}
export declare function submit(connection: IConnection, id: string, body: submit.Input): Promise<submit.Output>;
export declare namespace submit {
    type Input = Resolved<IThemePublish.ISubmitReq>;
    type Output = Primitive<IResponse<ITheme.IAdminResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/cms/themes/:id/submit";
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
export declare function publish(connection: IConnection, id: string): Promise<publish.Output>;
export declare namespace publish {
    type Output = Primitive<IResponse<ITheme.IAdminResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/cms/themes/:id/publish";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function stop(connection: IConnection, id: string): Promise<stop.Output>;
export declare namespace stop {
    type Output = Primitive<IResponse<ITheme.IAdminResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/cms/themes/:id/stop";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function logs(connection: IConnection, id: string, query: logs.Query): Promise<logs.Output>;
export declare namespace logs {
    type Query = Resolved<IThemePublish.ILogQuery>;
    type Output = Primitive<IResponse<IThemePublish.ILogPage>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/cms/themes/:id/logs";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string, query: logs.Query) => string;
}
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<ITheme.IAdminResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/cms/themes";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
export declare function findOne(connection: IConnection, id: string): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<ITheme.IAdminResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/cms/themes/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function $delete(connection: IConnection, id: string): Promise<$delete.Output>;
export declare namespace $delete {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/admin/cms/themes/:id";
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
    type Input = Resolved<ITheme.ICreateReq>;
    type Output = Primitive<IResponse<ITheme.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/cms/themes";
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
    type Input = Resolved<ITheme.IUpdateReq>;
    type Output = Primitive<IResponse<ITheme.IAdminResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/cms/themes/:id";
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
export declare function duplicate(connection: IConnection, data: duplicate.Input): Promise<duplicate.Output>;
export declare namespace duplicate {
    type Input = Resolved<ITheme.IDuplicateSystemReq>;
    type Output = Primitive<IResponse<ITheme.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/cms/themes/duplicate";
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
export declare function review(connection: IConnection, data: review.Input): Promise<review.Output>;
export declare namespace review {
    type Input = Resolved<ITheme.IReview>;
    type Output = Primitive<IResponse<ITheme.IAdminResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/cms/themes/review";
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

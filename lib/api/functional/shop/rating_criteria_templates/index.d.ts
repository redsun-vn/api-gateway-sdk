import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IRatingCriteriaTemplate } from "../../../../libs/shared/src/types/comment-service/irating-criteria-template.type";
import type { IQuery, IResponse, IResponsePagination } from "../../../../libs/shared/src/types/common.type";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IRatingCriteriaTemplate.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/rating-criteria-templates";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
export declare function findOne(connection: IConnection, id: number): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<IRatingCriteriaTemplate.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/rating-criteria-templates/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
export declare function create(connection: IConnection, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<Omit<IRatingCriteriaTemplate.ICreate, "shopId">>;
    type Output = Primitive<IResponse<IRatingCriteriaTemplate.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/rating-criteria-templates";
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
export declare function update(connection: IConnection, id: number, data: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<IRatingCriteriaTemplate.IUpdate>;
    type Output = Primitive<IResponse<IRatingCriteriaTemplate.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/rating-criteria-templates/:id";
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
    const path: (id: number) => string;
}
export declare function toggle(connection: IConnection, id: number, data: toggle.Input): Promise<toggle.Output>;
export declare namespace toggle {
    type Input = Resolved<IRatingCriteriaTemplate.IIsActiveRequest>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/rating-criteria-templates/:id/toggle";
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
    const path: (id: number) => string;
}
export declare function $delete(connection: IConnection, id: number): Promise<$delete.Output>;
export declare namespace $delete {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/rating-criteria-templates/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}

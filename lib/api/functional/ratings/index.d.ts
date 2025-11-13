import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IRating } from "../../../libs/shared/src/types/comment-service/irating.type";
import type { IQuery, IResponse, IResponsePagination } from "../../../libs/shared/src/types/common.type";
export declare function findPublicRatings(connection: IConnection, query: findPublicRatings.Query): Promise<findPublicRatings.Output>;
export declare namespace findPublicRatings {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IRating.IRatingResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/ratings";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findPublicRatings.Query) => string;
}
export declare function findOne(connection: IConnection, id: number): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<IRating.IRatingResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/ratings/:id";
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
    type Input = Resolved<IRating.ICreate>;
    type Output = Primitive<IResponse<IRating.IRatingResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/ratings";
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

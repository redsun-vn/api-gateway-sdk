import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IPointPartner } from "../../../../libs/shared/src/types/loyalty-service/ipoint-partner";
export declare function detail(connection: IConnection, partner_id: string): Promise<detail.Output>;
export declare namespace detail {
    type Output = Primitive<IResponse<IPointPartner.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/point-partners/:partner_id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (partner_id: string) => string;
}
export declare function create(connection: IConnection, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Primitive<IPointPartner.ICreate>;
    type Output = Primitive<IResponse<IPointPartner.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/point-partners";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: () => string;
}
export declare function update(connection: IConnection, id: string, data: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Primitive<IPointPartner.IUpdate>;
    type Output = Primitive<IResponse<IPointPartner.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/point-partners/:id";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (id: string) => string;
}
export declare function $delete(connection: IConnection, id: string): Promise<$delete.Output>;
export declare namespace $delete {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/point-partners/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (id: string) => string;
}

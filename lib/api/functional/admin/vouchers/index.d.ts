import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../libs/shared/src/types/common.type";
import type { IPromotionVoucher } from "../../../../libs/shared/src/types/shop-service/promotion";
export * as assign from "./assign";
export * as deactivate from "./deactivate";
export declare function findAllPromotionVouchers(connection: IConnection, query: findAllPromotionVouchers.Query): Promise<findAllPromotionVouchers.Output>;
export declare namespace findAllPromotionVouchers {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IPromotionVoucher.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/vouchers";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAllPromotionVouchers.Query) => string;
}
export declare function createPromotionVoucher(connection: IConnection, body: createPromotionVoucher.Input): Promise<createPromotionVoucher.Output>;
export declare namespace createPromotionVoucher {
    type Input = Resolved<IPromotionVoucher.ICreate>;
    type Output = Primitive<IResponse<IPromotionVoucher.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/vouchers";
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
export declare function updatePromotionVoucher(connection: IConnection, id: string, body: updatePromotionVoucher.Input): Promise<updatePromotionVoucher.Output>;
export declare namespace updatePromotionVoucher {
    type Input = Resolved<IPromotionVoucher.IUpdate>;
    type Output = Primitive<IResponse<IPromotionVoucher.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/vouchers/:id";
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
export declare function deletePromotionVoucher(connection: IConnection, id: string): Promise<deletePromotionVoucher.Output>;
export declare namespace deletePromotionVoucher {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/admin/vouchers/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function findOnePromotionVoucher(connection: IConnection, id: string): Promise<findOnePromotionVoucher.Output>;
export declare namespace findOnePromotionVoucher {
    type Output = Primitive<IResponse<IPromotionVoucher.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/vouchers/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}

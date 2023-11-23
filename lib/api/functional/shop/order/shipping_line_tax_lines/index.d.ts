import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { IShippingLineTaxLine } from "../../../../../libs/shared/src/types/order-service/ishipping-line-tax-line.type";
export declare function findAll(connection: IConnection): Promise<findAll.Output>;
export declare namespace findAll {
    type Output = Primitive<IResponse<IResponsePagination<IShippingLineTaxLine.IDetailShippingLineTaxLineResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/order/shipping-line-tax-lines";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: () => string;
}
export declare function findOne(connection: IConnection, id: string): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<IShippingLineTaxLine.IDetailShippingLineTaxLineResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/order/shipping-line-tax-lines/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (id: string) => string;
}
export declare function create(connection: IConnection, input: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Primitive<IShippingLineTaxLine.ICreateShippingLineTaxLine>;
    type Output = Primitive<IResponse<IShippingLineTaxLine.IDetailShippingLineTaxLineResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/order/shipping-line-tax-lines";
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
export declare function update(connection: IConnection, id: string, input: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Primitive<IShippingLineTaxLine.IUpdateShippingLineTaxLine>;
    type Output = Primitive<IResponse<IShippingLineTaxLine.IDetailShippingLineTaxLineResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/order/shipping-line-tax-lines/:id";
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
        readonly path: "/shop/order/shipping-line-tax-lines/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (id: string) => string;
}

import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { ILoyaltyConfig } from "../../../../libs/shared/src/types/loyalty-service/iloyalty-config";
export declare function detail(connection: IConnection, shop_id: string): Promise<detail.Output>;
export declare namespace detail {
    type Output = Primitive<IResponse<ILoyaltyConfig.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/loyalty-config/:shop_id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (shop_id: string) => string;
}
export declare function create(connection: IConnection, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Primitive<ILoyaltyConfig.ICreate>;
    type Output = Primitive<IResponse<ILoyaltyConfig.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/loyalty-config";
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
    type Input = Primitive<Partial<ILoyaltyConfig.ICreate>>;
    type Output = Primitive<IResponse<ILoyaltyConfig.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/loyalty-config/:id";
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

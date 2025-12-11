import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IOmnichannelShopConfig } from "../../../../libs/shared/src/types/omnichannel-service/omnichannel-shop-config.type";
export * as toggle_active from "./toggle_active";
export * as bulk_update from "./bulk_update";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<Omit<IOmnichannelShopConfig.IFindRequest, "shopId">>;
    type Output = Primitive<IResponse<IOmnichannelShopConfig.IListResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/omnichannel-configs";
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
    type Output = Primitive<IResponse<IOmnichannelShopConfig.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/omnichannel-configs/:id";
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
    type Input = Resolved<Omit<IOmnichannelShopConfig.ICreateRequest, "shop_id">>;
    type Output = Primitive<IResponse<IOmnichannelShopConfig.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/omnichannel-configs";
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
    type Input = Resolved<Omit<IOmnichannelShopConfig.IUpdateRequest, "id" | "shopId">>;
    type Output = Primitive<IResponse<IOmnichannelShopConfig.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/omnichannel-configs/:id";
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
export declare function $delete(connection: IConnection, id: number): Promise<$delete.Output>;
export declare namespace $delete {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/omnichannel-configs/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}

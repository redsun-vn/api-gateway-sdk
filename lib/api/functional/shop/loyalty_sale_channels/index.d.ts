import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { ILoyaltyProgramSaleChannel } from "../../../../libs/shared/src/types/loyalty-service/iloyalty-program-sale-channel";
export declare function create(connection: IConnection, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<ILoyaltyProgramSaleChannel.ILoyaltyProgramSaleChannelCreate>;
    type Output = Primitive<IResponse<ILoyaltyProgramSaleChannel.ILoyaltyProgramSaleChannelResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/loyalty-sale-channels";
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
export declare function detail(connection: IConnection, id: string): Promise<detail.Output>;
export declare namespace detail {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/loyalty-sale-channels/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}

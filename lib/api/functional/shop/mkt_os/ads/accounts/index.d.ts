import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAdsAccount } from "../../../../../../libs/shared/src/types/ads-service/iads-account";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function list(connection: IConnection, query: list.Query): Promise<list.Output>;
export declare namespace list {
    type Query = Resolved<IAdsAccount.IListQuery>;
    type Output = Primitive<IResponse<Array<IAdsAccount.IView>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/ads/accounts";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: list.Query) => string;
}
export declare function createManual(connection: IConnection, body: createManual.Input): Promise<createManual.Output>;
export declare namespace createManual {
    type Input = Resolved<IAdsAccount.ICreateManual>;
    type Output = Primitive<IResponse<IAdsAccount.IView>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/ads/accounts";
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
export declare function update(connection: IConnection, id: string, body: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<IAdsAccount.IUpdate>;
    type Output = Primitive<IResponse<IAdsAccount.IView>>;
    const METADATA: {
        readonly method: "PATCH";
        readonly path: "/shop/mkt-os/ads/accounts/:id";
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

import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IAdsCommon } from "../../../../../../libs/shared/src/types/ads-service/iads-common";
import type { ISocialAutomation } from "../../../../../../libs/shared/src/types/ads-service/isocial-automation";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export * as apply from "./apply";
export declare function listSets(connection: IConnection): Promise<listSets.Output>;
export declare namespace listSets {
    type Output = Primitive<IResponse<Array<ISocialAutomation.ISetView>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/social/sets";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function createSet(connection: IConnection, body: createSet.Input): Promise<createSet.Output>;
export declare namespace createSet {
    type Input = Resolved<ISocialAutomation.ISetCreate>;
    type Output = Primitive<IResponse<ISocialAutomation.ISetView>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/social/sets";
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
export declare function getSet(connection: IConnection, id: IAdsCommon.Id): Promise<getSet.Output>;
export declare namespace getSet {
    type Output = Primitive<IResponse<ISocialAutomation.ISetView>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/social/sets/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: IAdsCommon.Id) => string;
}
export declare function updateSet(connection: IConnection, id: IAdsCommon.Id, body: updateSet.Input): Promise<updateSet.Output>;
export declare namespace updateSet {
    type Input = Resolved<Partial<ISocialAutomation.ISetCreate>>;
    type Output = Primitive<IResponse<ISocialAutomation.ISetView>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/mkt-os/social/sets/:id";
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
    const path: (id: IAdsCommon.Id) => string;
}
export declare function deleteSet(connection: IConnection, id: IAdsCommon.Id): Promise<deleteSet.Output>;
export declare namespace deleteSet {
    type Output = Primitive<IResponse<ISocialAutomation.IDeleted>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/mkt-os/social/sets/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: IAdsCommon.Id) => string;
}

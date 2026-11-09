import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IAdsCommon } from "../../../../../../libs/shared/src/types/ads-service/iads-common";
import type { ISocialAutomation } from "../../../../../../libs/shared/src/types/ads-service/isocial-automation";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export * as runs from "./runs";
export declare function listPlugs(connection: IConnection): Promise<listPlugs.Output>;
export declare namespace listPlugs {
    type Output = Primitive<IResponse<Array<ISocialAutomation.IPlugView>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/social/plugs";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function createPlug(connection: IConnection, body: createPlug.Input): Promise<createPlug.Output>;
export declare namespace createPlug {
    type Input = Resolved<ISocialAutomation.IPlugCreate>;
    type Output = Primitive<IResponse<ISocialAutomation.IPlugView>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/social/plugs";
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
export declare function updatePlug(connection: IConnection, id: IAdsCommon.Id, body: updatePlug.Input): Promise<updatePlug.Output>;
export declare namespace updatePlug {
    type Input = Resolved<ISocialAutomation.IPlugUpdate>;
    type Output = Primitive<IResponse<ISocialAutomation.IPlugView>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/mkt-os/social/plugs/:id";
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
export declare function deletePlug(connection: IConnection, id: IAdsCommon.Id): Promise<deletePlug.Output>;
export declare namespace deletePlug {
    type Output = Primitive<IResponse<ISocialAutomation.IDeleted>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/mkt-os/social/plugs/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: IAdsCommon.Id) => string;
}

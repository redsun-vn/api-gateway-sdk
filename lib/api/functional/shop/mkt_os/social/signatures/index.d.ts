import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IAdsCommon } from "../../../../../../libs/shared/src/types/ads-service/iads-common";
import type { ISocialAutomation } from "../../../../../../libs/shared/src/types/ads-service/isocial-automation";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function listSignatures(connection: IConnection): Promise<listSignatures.Output>;
export declare namespace listSignatures {
    type Output = Primitive<IResponse<Array<ISocialAutomation.ISignatureView>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/social/signatures";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function createSignature(connection: IConnection, body: createSignature.Input): Promise<createSignature.Output>;
export declare namespace createSignature {
    type Input = Resolved<ISocialAutomation.ISignatureCreate>;
    type Output = Primitive<IResponse<ISocialAutomation.ISignatureView>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/social/signatures";
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
export declare function updateSignature(connection: IConnection, id: IAdsCommon.Id, body: updateSignature.Input): Promise<updateSignature.Output>;
export declare namespace updateSignature {
    type Input = Resolved<Partial<ISocialAutomation.ISignatureCreate>>;
    type Output = Primitive<IResponse<ISocialAutomation.ISignatureView>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/mkt-os/social/signatures/:id";
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
export declare function deleteSignature(connection: IConnection, id: IAdsCommon.Id): Promise<deleteSignature.Output>;
export declare namespace deleteSignature {
    type Output = Primitive<IResponse<ISocialAutomation.IDeleted>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/mkt-os/social/signatures/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: IAdsCommon.Id) => string;
}

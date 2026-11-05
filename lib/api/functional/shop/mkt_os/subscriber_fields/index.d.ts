import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IMktOsSubscriber } from "../../../../../libs/shared/src/types/crm-service/imkt-os-subscriber";
export declare function fields(connection: IConnection): Promise<fields.Output>;
export declare namespace fields {
    type Output = Primitive<IResponse<IMktOsSubscriber.IFieldsResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/subscriber-fields";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function createField(connection: IConnection, body: createField.Input): Promise<createField.Output>;
export declare namespace createField {
    type Input = Resolved<IMktOsSubscriber.IFieldRequest>;
    type Output = Primitive<IResponse<IMktOsSubscriber.IField>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/subscriber-fields";
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

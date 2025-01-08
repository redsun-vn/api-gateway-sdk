import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { ITomotekDevice } from "../../../../libs/shared/src/types/payment-service/itomotek-device.type";
export declare function createDevice(connection: IConnection, createDeviceDto: createDevice.Input): Promise<createDevice.Output>;
export declare namespace createDevice {
    type Input = Resolved<ITomotekDevice.ICreate>;
    type Output = Primitive<IResponse<ITomotekDevice.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/tomotek-device";
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
export declare function updateDevice(connection: IConnection, shopId: string, updateDeviceDto: updateDevice.Input): Promise<updateDevice.Output>;
export declare namespace updateDevice {
    type Input = Resolved<ITomotekDevice.IUpdate>;
    type Output = Primitive<IResponse<ITomotekDevice.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/tomotek-device/:shopId";
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
    const path: (shopId: string) => string;
}
export declare function getDevice(connection: IConnection, id: string): Promise<getDevice.Output>;
export declare namespace getDevice {
    type Output = Primitive<IResponse<ITomotekDevice.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/tomotek-device/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function $delete(connection: IConnection, id: string): Promise<$delete.Output>;
export declare namespace $delete {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/tomotek-device/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}

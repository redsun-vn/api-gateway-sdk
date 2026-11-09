import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IMktOs } from "../../../../../libs/shared/src/types/crm-service/imkt-os";
export declare function getSettings(connection: IConnection): Promise<getSettings.Output>;
export declare namespace getSettings {
    type Output = Primitive<IResponse<IMktOs.ISettingsResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/settings";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function updateSettings(connection: IConnection, body: updateSettings.Input): Promise<updateSettings.Output>;
export declare namespace updateSettings {
    type Input = Resolved<IMktOs.ISettingsUpdateRequest>;
    type Output = Primitive<IResponse<IMktOs.ISettingsSaved>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/mkt-os/settings";
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
    const path: () => string;
}

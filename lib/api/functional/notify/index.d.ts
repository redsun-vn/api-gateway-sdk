import type { IConnection, Primitive } from "@nestia/fetcher";
import type { INotify } from "../../../libs/shared/src/types/admin-service/inotify";
import type { IResponse } from "../../../libs/shared/src/types/common.type";
export * as maintaince from "./maintaince";
export declare function findAll(connection: IConnection): Promise<findAll.Output>;
export declare namespace findAll {
    type Output = Primitive<IResponse<Array<INotify.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/notify";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}

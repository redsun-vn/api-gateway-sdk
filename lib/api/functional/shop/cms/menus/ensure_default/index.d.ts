import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICMSMenu } from "../../../../../../libs/shared/src/types/cms-service/imenu";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function ensureDefault(connection: IConnection, data: ensureDefault.Input): Promise<ensureDefault.Output>;
export declare namespace ensureDefault {
    type Input = Resolved<ICMSMenu.IEnsureDefaultReq>;
    type Output = Primitive<IResponse<ICMSMenu.IEnsureDefaultResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/cms/menus/ensure-default";
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

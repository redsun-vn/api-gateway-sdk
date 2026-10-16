import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ISpace } from "../../../../../libs/shared/src/types/ifile";
export declare function createSpace(connection: IConnection, input: createSpace.Input): Promise<createSpace.Output>;
export declare namespace createSpace {
    type Input = Resolved<ISpace.IAdminCreate>;
    type Output = Primitive<IResponse<ISpace.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/attachments/admin/spaces";
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

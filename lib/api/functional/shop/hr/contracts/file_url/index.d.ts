import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IStaffContract } from "../../../../../../libs/shared/src/types/hr/istaff-contract";
export declare function fileUrl(connection: IConnection, id: string): Promise<fileUrl.Output>;
export declare namespace fileUrl {
    type Output = Primitive<IResponse<IStaffContract.IFileUrlResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/hr/contracts/:id/file-url";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: string) => string;
}

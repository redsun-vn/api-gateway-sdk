import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IPackage } from "../../../../../libs/shared/src/types/ipackage";
export declare function createAdditions(connection: IConnection, data: createAdditions.Input, id: string): Promise<createAdditions.Output>;
export declare namespace createAdditions {
    type Input = Primitive<IPackage.ICreateAdditions>;
    type Output = Primitive<IResponse<IPackage.IPackageResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/packages/:id/additions";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (id: string) => string;
}

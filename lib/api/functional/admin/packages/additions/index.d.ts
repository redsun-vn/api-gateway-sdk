import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IPackage } from "../../../../../libs/shared/src/types/ipackage";
export declare function createAdditions(connection: IConnection, data: createAdditions.Input, id: string): Promise<createAdditions.Output>;
export declare namespace createAdditions {
    type Input = Resolved<IPackage.ICreateAdditions>;
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
        readonly status: 201;
    };
    const path: (id: string) => string;
}
export declare function deleteAdditions(connection: IConnection, data: deleteAdditions.Input, id: string): Promise<deleteAdditions.Output>;
export declare namespace deleteAdditions {
    type Input = Resolved<IPackage.IDeleteAddition>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/admin/packages/:id/additions";
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
    const path: (id: string) => string;
}

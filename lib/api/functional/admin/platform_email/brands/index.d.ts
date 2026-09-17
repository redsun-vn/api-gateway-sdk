import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IPlatformEmail } from "../../../../../libs/shared/src/types/admin-service/iplatform-email";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function listBrands(connection: IConnection): Promise<listBrands.Output>;
export declare namespace listBrands {
    type Output = Primitive<IResponse<Array<IPlatformEmail.IBrand>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/platform-email/brands";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function createBrand(connection: IConnection, body: createBrand.Input): Promise<createBrand.Output>;
export declare namespace createBrand {
    type Input = Resolved<IPlatformEmail.IBrandCreate>;
    type Output = Primitive<IResponse<IPlatformEmail.IBrand>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/platform-email/brands";
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
export declare function updateBrand(connection: IConnection, code: string, body: updateBrand.Input): Promise<updateBrand.Output>;
export declare namespace updateBrand {
    type Input = Resolved<Partial<IPlatformEmail.IBrandCreate>>;
    type Output = Primitive<IResponse<IPlatformEmail.IBrand>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/platform-email/brands/:code";
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
    const path: (code: string) => string;
}
export declare function deleteBrand(connection: IConnection, code: string): Promise<deleteBrand.Output>;
export declare namespace deleteBrand {
    type Output = Primitive<IResponse<IPlatformEmail.IDeleteResult>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/admin/platform-email/brands/:code";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (code: string) => string;
}

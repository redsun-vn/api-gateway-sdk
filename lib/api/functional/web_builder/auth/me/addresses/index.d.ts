import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../../libs/shared/src/types/common.type";
import type { IPartnerAddress } from "../../../../../../libs/shared/src/types/partner-service/ipartner-address";
export declare function findAllPartnerAddress(connection: IConnection, query: findAllPartnerAddress.Query): Promise<findAllPartnerAddress.Output>;
export declare namespace findAllPartnerAddress {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IPartnerAddress.IPartnerAddressResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/web-builder/auth/me/addresses";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAllPartnerAddress.Query) => string;
}
export declare function createPartnerAddressFromWebsite(connection: IConnection, input: createPartnerAddressFromWebsite.Input): Promise<createPartnerAddressFromWebsite.Output>;
export declare namespace createPartnerAddressFromWebsite {
    type Input = Resolved<IPartnerAddress.ICreateFromWebsite>;
    type Output = Primitive<IResponse<IPartnerAddress.IPartnerAddressResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/web-builder/auth/me/addresses";
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
export declare function updateAddressFromWebsite(connection: IConnection, data: updateAddressFromWebsite.Input, id: string): Promise<updateAddressFromWebsite.Output>;
export declare namespace updateAddressFromWebsite {
    type Input = Resolved<IPartnerAddress.IUpdateFromWebsite>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/web-builder/auth/me/addresses/:id";
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
export declare function deleteAddressFromWebsite(connection: IConnection, id: string): Promise<deleteAddressFromWebsite.Output>;
export declare namespace deleteAddressFromWebsite {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/web-builder/auth/me/addresses/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}

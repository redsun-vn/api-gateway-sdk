import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../libs/shared/src/types/common.type";
import type { IAdditionalFee } from "../../../libs/shared/src/types/order-service/iadditional-fee.type";
export declare function createAdditionalFee(connection: IConnection, input: createAdditionalFee.Input): Promise<createAdditionalFee.Output>;
export declare namespace createAdditionalFee {
    type Input = Resolved<IAdditionalFee.ICreateAdditionalFee>;
    type Output = Primitive<IResponse<IAdditionalFee.IDetailAdditionalFeeResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shipping-fees";
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
export declare function updateAdditionalFee(connection: IConnection, id: string, input: updateAdditionalFee.Input): Promise<updateAdditionalFee.Output>;
export declare namespace updateAdditionalFee {
    type Input = Resolved<IAdditionalFee.IUpdateAdditionalFee>;
    type Output = Primitive<IResponse<IAdditionalFee.IDetailAdditionalFeeResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shipping-fees/:id";
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
export declare function deleteAdditionalFee(connection: IConnection, id: string): Promise<deleteAdditionalFee.Output>;
export declare namespace deleteAdditionalFee {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shipping-fees/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}

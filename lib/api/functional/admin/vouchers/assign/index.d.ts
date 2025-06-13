import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IPromotionVoucher } from "../../../../../libs/shared/src/types/shop-service/promotion";
export declare function assignPromotionVoucherToCustomer(connection: IConnection, id: string, body: assignPromotionVoucherToCustomer.Input): Promise<assignPromotionVoucherToCustomer.Output>;
export declare namespace assignPromotionVoucherToCustomer {
    type Input = Resolved<IPromotionVoucher.IAssignToCustomer>;
    type Output = Primitive<IResponse<IPromotionVoucher.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/vouchers/:id/assign";
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

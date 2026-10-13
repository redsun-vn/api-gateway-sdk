import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ISaleOrderTemplate } from "../../../../../../libs/shared/src/types/order-service/isale-order-template";
export declare function setDefaultTemplate(connection: IConnection, templateId: string): Promise<setDefaultTemplate.Output>;
export declare namespace setDefaultTemplate {
    type Output = Primitive<IResponse<ISaleOrderTemplate.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/sale-orders/templates/:templateId/default";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (templateId: string) => string;
}

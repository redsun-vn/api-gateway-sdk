import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IZaloOA } from "../../../../../../libs/shared/src/types/notification/izalo-oa.type";
export declare function sendZNSTemplate(connection: IConnection, input: sendZNSTemplate.Input): Promise<sendZNSTemplate.Output>;
export declare namespace sendZNSTemplate {
    type Input = Resolved<Omit<IZaloOA.IZNSTemplateSendRequest, "shop_id">>;
    type Output = Primitive<IResponse<IZaloOA.IZNSTemplateSendResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/zalo-oa/zns/send";
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

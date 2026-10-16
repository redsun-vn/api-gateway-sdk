import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICMSPost } from "../../../../../../../libs/shared/src/types/cms-service/ipost";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
export declare function setHighlightOrder(connection: IConnection, data: setHighlightOrder.Input): Promise<setHighlightOrder.Output>;
export declare namespace setHighlightOrder {
    type Input = Resolved<ICMSPost.IHighlightOrderReq>;
    type Output = Primitive<IResponse<ICMSPost.IHighlightOrderRes>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/cms/posts/highlights/order";
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
    const path: () => string;
}

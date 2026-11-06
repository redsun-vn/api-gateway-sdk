import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IAdsCommon } from "../../../../../../../libs/shared/src/types/ads-service/iads-common";
import type { ISocialAutomation } from "../../../../../../../libs/shared/src/types/ads-service/isocial-automation";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
export declare function applySet(connection: IConnection, id: IAdsCommon.Id): Promise<applySet.Output>;
export declare namespace applySet {
    type Output = Primitive<IResponse<ISocialAutomation.ISetApplied>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/social/sets/:id/apply";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: IAdsCommon.Id) => string;
}

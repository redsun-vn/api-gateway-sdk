import type { IConnection, Primitive } from "@nestia/fetcher";
import type { ICrmState } from "../../../../../../libs/shared/src/types/admin-service/crm/crm-state";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function findWinning(connection: IConnection): Promise<findWinning.Output>;
export declare namespace findWinning {
    type Output = Primitive<IResponse<Array<ICrmState.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/crm/states/winning";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}

import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IRating } from "../../../../../libs/shared/src/types/comment-service/irating.type";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function getCriteria(connection: IConnection, businessType: string): Promise<getCriteria.Output>;
export declare namespace getCriteria {
    type Output = Primitive<IResponse<Array<IRating.IRatingCriteriaResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/ratings/:businessType/criteria";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (businessType: string) => string;
}

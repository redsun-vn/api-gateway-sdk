import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse } from "../../../../libs/shared/src/types/common.type";
import type { ILoyaltyProgram } from "../../../../libs/shared/src/types/loyalty-service/iloyalty-program";
export declare function validCode(connection: IConnection, code: string, query: validCode.Query): Promise<validCode.Output>;
export declare namespace validCode {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<ILoyaltyProgram.ILoyaltyProgramResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/loyalty-programs/:code/valid";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (code: string, query: validCode.Query) => string;
}

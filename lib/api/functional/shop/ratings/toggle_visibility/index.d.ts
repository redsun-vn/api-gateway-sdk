import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IRating } from "../../../../../libs/shared/src/types/comment-service/irating.type";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function toggleVisibility(connection: IConnection, id: number, data: toggleVisibility.Input): Promise<toggleVisibility.Output>;
export declare namespace toggleVisibility {
    type Input = Resolved<IRating.IToggleVisibility>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/ratings/:id/toggle-visibility";
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
    const path: (id: number) => string;
}

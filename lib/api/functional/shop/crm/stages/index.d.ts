import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IStage } from "../../../../../libs/shared/src/types/crm-service/istage";
export declare function update(connection: IConnection, id: string, body: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<IStage.IUpdateBody>;
    type Output = Primitive<IResponse<IStage.IStageResponse>>;
    const METADATA: {
        readonly method: "PATCH";
        readonly path: "/shop/crm/stages/:id";
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

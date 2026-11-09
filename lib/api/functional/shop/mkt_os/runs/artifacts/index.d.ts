import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IMktOsRun } from "../../../../../../libs/shared/src/types/crm-service/imkt-os-run";
export declare function updateArtifact(connection: IConnection, id: number, artifactId: number, body: updateArtifact.Input): Promise<updateArtifact.Output>;
export declare namespace updateArtifact {
    type Input = Resolved<IMktOsRun.IArtifactUpdateRequest>;
    type Output = Primitive<IResponse<IMktOsRun.IRunSaved>>;
    const METADATA: {
        readonly method: "PATCH";
        readonly path: "/shop/mkt-os/runs/:id/artifacts/:artifactId";
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
    const path: (id: number, artifactId: number) => string;
}

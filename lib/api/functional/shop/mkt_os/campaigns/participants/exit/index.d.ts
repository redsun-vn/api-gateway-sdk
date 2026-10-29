import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { IMktOsResults } from "../../../../../../../libs/shared/src/types/crm-service/imkt-os-results";
export declare function exitParticipant(connection: IConnection, id: number, participantId: number, body: exitParticipant.Input): Promise<exitParticipant.Output>;
export declare namespace exitParticipant {
    type Input = Resolved<IMktOsResults.IParticipantExitRequest>;
    type Output = Primitive<IResponse<IMktOsResults.IParticipantExitResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/campaigns/:id/participants/:participantId/exit";
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
    const path: (id: number, participantId: number) => string;
}

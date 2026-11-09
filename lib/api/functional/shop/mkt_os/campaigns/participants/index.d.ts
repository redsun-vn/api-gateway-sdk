import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IMktOsResults } from "../../../../../../libs/shared/src/types/crm-service/imkt-os-results";
export * as exit from "./exit";
export declare function participants(connection: IConnection, id: number, query: participants.Query): Promise<participants.Output>;
export declare namespace participants {
    type Query = Resolved<IMktOsResults.IParticipantListQuery>;
    type Output = Primitive<IResponse<IMktOsResults.IParticipantPage>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/campaigns/:id/participants";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number, query: participants.Query) => string;
}
export declare function participant(connection: IConnection, id: number, participantId: number): Promise<participant.Output>;
export declare namespace participant {
    type Output = Primitive<IResponse<IMktOsResults.IParticipantDetail>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/campaigns/:id/participants/:participantId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number, participantId: number) => string;
}

import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAiBusinessProfile } from "../../../../../../libs/shared/src/types/ai-generation/iai-business-profile";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IMktOs } from "../../../../../../libs/shared/src/types/crm-service/imkt-os";
export declare function createToneSet(connection: IConnection, body: createToneSet.Input): Promise<createToneSet.Output>;
export declare namespace createToneSet {
    type Input = Resolved<IAiBusinessProfile.IToneSetCreateRequest>;
    type Output = Primitive<IResponse<IMktOs.IBrandToneSetSummary>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/ai/business-profile/tone-sets";
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
    const path: () => string;
}
export declare function updateToneSet(connection: IConnection, id: IAiBusinessProfile.IToneSetId, body: updateToneSet.Input): Promise<updateToneSet.Output>;
export declare namespace updateToneSet {
    type Input = Resolved<IAiBusinessProfile.IToneSetUpdateRequest>;
    type Output = Primitive<IResponse<IMktOs.IBrandToneSetSummary>>;
    const METADATA: {
        readonly method: "PATCH";
        readonly path: "/shop/ai/business-profile/tone-sets/:id";
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
    const path: (id: IAiBusinessProfile.IToneSetId) => string;
}
export declare function deleteToneSet(connection: IConnection, id: IAiBusinessProfile.IToneSetId): Promise<deleteToneSet.Output>;
export declare namespace deleteToneSet {
    type Output = Primitive<IResponse<IAiBusinessProfile.IToneSetDeleted>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/ai/business-profile/tone-sets/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: IAiBusinessProfile.IToneSetId) => string;
}

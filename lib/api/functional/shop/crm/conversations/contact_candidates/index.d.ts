import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmAiAssist } from "../../../../../../libs/shared/src/types/crm-service/iai-assist";
export declare function getContactCandidates(connection: IConnection, id: number): Promise<getContactCandidates.Output>;
export declare namespace getContactCandidates {
    type Output = Primitive<IResponse<ICrmAiAssist.IContactCandidatesResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/conversations/:id/contact_candidates";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}

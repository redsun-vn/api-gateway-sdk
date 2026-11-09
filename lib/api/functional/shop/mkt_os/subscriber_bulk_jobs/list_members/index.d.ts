import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IMktOsSubscriber } from "../../../../../../libs/shared/src/types/crm-service/imkt-os-subscriber";
export declare function listMembers(connection: IConnection, body: listMembers.Input): Promise<listMembers.Output>;
export declare namespace listMembers {
    type Input = Resolved<IMktOsSubscriber.IBulkListMembersRequest>;
    type Output = Primitive<IResponse<IMktOsSubscriber.IBulkJob>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/subscriber-bulk-jobs/list-members";
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

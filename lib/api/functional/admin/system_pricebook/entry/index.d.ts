import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ISystemPricebook } from "../../../../../libs/shared/src/types/shop-service/system-pricebook.type";
export declare function createEntry(connection: IConnection, id: number, data: createEntry.Input): Promise<createEntry.Output>;
export declare namespace createEntry {
    type Input = Resolved<Omit<ISystemPricebook.IEntryCreate, "pricebookId">>;
    type Output = Primitive<IResponse<ISystemPricebook.IEntryResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/system-pricebook/:id/entry";
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
    const path: (id: number) => string;
}
export declare function updateEntry(connection: IConnection, id: string, entryId: string, data: updateEntry.Input): Promise<updateEntry.Output>;
export declare namespace updateEntry {
    type Input = Resolved<ISystemPricebook.IEntryUpdate>;
    type Output = Primitive<IResponse<ISystemPricebook.IEntryResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/system-pricebook/:id/entry/:entryId";
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
    const path: (id: string, entryId: string) => string;
}

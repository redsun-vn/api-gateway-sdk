import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { Type } from "typia/lib/tags/Type";
import type { IAiCredit } from "../../../../../../libs/shared/src/types/ai-generation/index";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function list(connection: IConnection): Promise<list.Output>;
export declare namespace list {
    type Output = Primitive<IResponse<Array<IAiCredit.IStaffCreditLimit>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/ai/credit/staff-limits";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function upsert(connection: IConnection, staffId: number & Type<"uint64">, data: upsert.Input): Promise<upsert.Output>;
export declare namespace upsert {
    type Input = Resolved<IAiCredit.IStaffCreditLimitUpsertRequest>;
    type Output = Primitive<IResponse<IAiCredit.IStaffCreditLimit>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/ai/credit/staff-limits/:staffId";
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
    const path: (staffId: number & Type<"uint64">) => string;
}
export declare function remove(connection: IConnection, staffId: number & Type<"uint64">): Promise<remove.Output>;
export declare namespace remove {
    type Output = Primitive<IResponse<IAiCredit.IStaffCreditLimitRemoveResponse>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/ai/credit/staff-limits/:staffId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (staffId: number & Type<"uint64">) => string;
}

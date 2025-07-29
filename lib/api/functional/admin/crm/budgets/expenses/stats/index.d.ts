import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
export declare function getExpenseStats(connection: IConnection, budgetId: string): Promise<getExpenseStats.Output>;
export declare namespace getExpenseStats {
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/crm/budgets/:budgetId/expenses/stats";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (budgetId: string) => string;
}

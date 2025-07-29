import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICRMBudgetExpense } from "../../../../../../../libs/shared/src/types/admin-service/crm/crm-expense";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
export declare function approveExpense(connection: IConnection, budgetId: string, expenseId: string, data: approveExpense.Input): Promise<approveExpense.Output>;
export declare namespace approveExpense {
    type Input = Resolved<ICRMBudgetExpense.IApprovalRequest>;
    type Output = Primitive<IResponse<ICRMBudgetExpense.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/crm/budgets/:budgetId/expenses/:expenseId/approve";
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
    const path: (budgetId: string, expenseId: string) => string;
}

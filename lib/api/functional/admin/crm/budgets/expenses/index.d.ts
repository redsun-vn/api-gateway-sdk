import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICRMBudgetExpense } from "../../../../../../libs/shared/src/types/admin-service/crm/crm-expense";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../../libs/shared/src/types/common.type";
export * as approve from "./approve";
export * as reject from "./reject";
export * as stats from "./stats";
export declare function findAllExpenses(connection: IConnection, budgetId: string, query: findAllExpenses.Query): Promise<findAllExpenses.Output>;
export declare namespace findAllExpenses {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<ICRMBudgetExpense.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/crm/budgets/:budgetId/expenses";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (budgetId: string, query: findAllExpenses.Query) => string;
}
export declare function findOneExpense(connection: IConnection, budgetId: string, expenseId: string): Promise<findOneExpense.Output>;
export declare namespace findOneExpense {
    type Output = Primitive<IResponse<ICRMBudgetExpense.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/crm/budgets/:budgetId/expenses/:expenseId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (budgetId: string, expenseId: string) => string;
}
export declare function createExpense(connection: IConnection, budgetId: string, data: createExpense.Input): Promise<createExpense.Output>;
export declare namespace createExpense {
    type Input = Resolved<ICRMBudgetExpense.ICreate>;
    type Output = Primitive<IResponse<ICRMBudgetExpense.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/crm/budgets/:budgetId/expenses";
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
    const path: (budgetId: string) => string;
}
export declare function updateExpense(connection: IConnection, budgetId: string, expenseId: string, data: updateExpense.Input): Promise<updateExpense.Output>;
export declare namespace updateExpense {
    type Input = Resolved<ICRMBudgetExpense.IUpdate>;
    type Output = Primitive<IResponse<ICRMBudgetExpense.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/crm/budgets/:budgetId/expenses/:expenseId";
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
export declare function deleteExpense(connection: IConnection, budgetId: string, expenseId: string): Promise<deleteExpense.Output>;
export declare namespace deleteExpense {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/admin/crm/budgets/:budgetId/expenses/:expenseId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (budgetId: string, expenseId: string) => string;
}

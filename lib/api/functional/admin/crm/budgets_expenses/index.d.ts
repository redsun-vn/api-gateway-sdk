import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICRMBudgetExpense } from "../../../../../libs/shared/src/types/admin-service/crm/crm-expense";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
export declare function findAllExpenses(connection: IConnection, query: findAllExpenses.Query): Promise<findAllExpenses.Output>;
export declare namespace findAllExpenses {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<ICRMBudgetExpense.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/crm/budgets-expenses";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAllExpenses.Query) => string;
}

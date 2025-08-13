import { EXPENSE_CATEGORY, EXPENSE_PRIORITY, EXPENSE_STATUS } from '../../../enum';
import { BaseResponse } from '../../common.type';
import { ICRMBudget } from './crm-budget';
export declare namespace ICRMBudgetExpense {
    interface ICreate {
        name: string;
        code?: string;
        description?: string;
        category: string & EXPENSE_CATEGORY;
        priority?: string & EXPENSE_PRIORITY;
        budget_id: number;
        plannedAmount: number;
        approvedAmount?: number;
        currency?: string;
        plannedDate?: string;
        dueDate?: string;
        vendorName?: string;
        vendorContact?: string;
        invoiceNumber?: string;
        referenceNumber?: string;
        isRecurring?: boolean;
        recurringRrequency?: string;
        recurringCount?: number;
        isReimbursable?: boolean;
        requiresReceipt?: boolean;
        tags?: string[];
        customFields?: Record<string, any>;
        attachments?: string[];
        notes?: string;
        parentId?: number;
    }
    interface IUpdate extends Partial<ICreate> {
        actualAmount?: number;
        actualDate?: string;
        status?: string & EXPENSE_STATUS;
        requestedById?: number;
        requestedDate?: string;
        approvedById?: number;
        approvedDate?: string;
        approvalNote?: string;
        rejectedById?: number;
        rejectedDate?: string;
        rejectionReason?: string;
    }
    interface IResponse extends BaseResponse {
        name: string;
        code: string | null;
        description: string | null;
        category: string & EXPENSE_CATEGORY;
        status: string & EXPENSE_STATUS;
        priority: string & EXPENSE_PRIORITY;
        plannedAmount: number | string;
        actualAmount: number | string;
        approvedAmount: number | string;
        currency: string | null;
        plannedDate: string | null;
        actualDate: string | null;
        dueDate: string | null;
        requestedById: number | string | null;
        requestedDate: string | null;
        approvedById: number | string | null;
        approvedDate: string | null;
        approvalNote: string | null;
        rejectedById: number | string | null;
        rejectedDate: string | null;
        rejectionReason: string | null;
        budget_id: number | string;
        vendorName: string | null;
        vendorContact: string | null;
        invoiceNumber: string | null;
        referenceNumber: string | null;
        isRecurring: boolean | null;
        recurringCount: number | null;
        isReimbursable: boolean | null;
        requiresReceipt: boolean | null;
        tags: string[] | null;
        attachments: string[] | null;
        notes: string | null;
        budget?: ICRMBudget.IResponse | null;
        parent?: ICRMBudgetExpense.IResponse | null;
        children?: ICRMBudgetExpense.IResponse[] | null;
        varianceAmount?: number;
        variancePercentage?: number;
        isOverBudget?: boolean;
        completionPercentage?: number;
        daysUntilDue: number;
        isOverdue?: boolean;
    }
    interface IFilter {
        name?: string;
        code?: string;
        category?: string;
        status?: string;
        priority?: string;
        budgetId?: number;
        requestedById?: number;
        approvedById?: number;
        vendorName?: string;
        isRecurring?: boolean;
        isReimbursable?: boolean;
        requiresReceipt?: boolean;
        parentId?: number;
        startDate?: string;
        endDate?: string;
        minAmount?: number;
        maxAmount?: number;
        tags?: string[];
    }
    interface IApprovalRequest {
        expenseId: number;
        approvedAmount?: number;
        approvalNote?: string;
    }
    interface IRejectionRequest {
        expenseId: number;
        rejectionReason: string;
    }
}

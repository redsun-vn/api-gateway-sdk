import { BUDGET_PERIOD, BUDGET_STATUS, BUDGET_TYPE } from '../../../enum';
import { BaseResponse } from '../../common.type';
import { ICRMBudgetExpense } from './crm-expense';
import { ICRMTeam } from './team';
export declare namespace ICRMBudget {
    interface ICreate {
        name: string;
        code?: string;
        description?: string;
        type: string & BUDGET_TYPE;
        period: string & BUDGET_PERIOD;
        currency?: string;
        allocatedAmount: number;
        startDate: string;
        endDate: string;
        fiscalYear?: number;
        fiscalQuarter?: number;
        fiscalMonth?: number;
        teamId?: number;
        departmentId?: number;
        ownerId?: number;
        approverId?: number;
        stakeholderIds?: number[];
        warningThreshold?: number;
        criticalThreshold?: number;
        enableNotifications?: boolean;
        tags?: string[];
        customFields?: Record<string, any>;
        attachments?: string[];
        notes?: string;
    }
    interface IUpdate extends Partial<ICreate> {
        spentAmount?: number;
        committedAmount?: number;
        availableAmount?: number;
        utilizationRate?: number;
        status?: string & BUDGET_STATUS;
        approvedById?: number;
        approvedDate?: string;
        approvalNote?: string;
        rejectedById?: number;
        rejectedDate?: string;
        rejectionReason?: string;
        isActive?: boolean;
        isRollover?: boolean;
        autoApprove?: boolean;
        revisionNumber?: number;
        lastReviewedDate?: string;
        lastReviewedById?: number;
        updatedById?: number;
    }
    interface IResponse extends BaseResponse {
        name: string;
        code?: string;
        description?: string | null;
        type: string & BUDGET_TYPE;
        status: string & BUDGET_STATUS;
        period: string & BUDGET_PERIOD;
        currency: string;
        allocatedAmount: number | string;
        spentAmount: number | string;
        committedAmount: number | string;
        availableAmount: number | string;
        utilizationRate?: number | string;
        startDate: string | Date;
        endDate: string | Date;
        fiscalYear?: number | null;
        fiscalQuarter?: number | null;
        fiscalMonth?: number | null;
        approvedById?: number | null;
        approvedDate?: string | null;
        approvalNote?: string | null;
        rejectedById?: number | null;
        rejectedDate?: string | null;
        rejectionReason?: string | null;
        teamId?: number | null;
        departmentId?: number | null;
        ownerId?: number | null;
        approverId?: number | null;
        stakeholderIds?: number[] | null;
        isActive: boolean;
        isRollover: boolean;
        autoApprove: boolean;
        revisionNumber: number;
        lastReviewedDate?: string | null;
        lastReviewedById?: number | null;
        warningThreshold: number | string | null;
        criticalThreshold: number | string | null;
        enableNotifications: boolean;
        tags?: string[] | null;
        customFields?: Record<string, any> | null;
        attachments?: string[] | null;
        notes?: string | null;
        team?: ICRMTeam.IResponse | null;
        expenses?: ICRMBudgetExpense.IResponse[] | null;
        totalPlannedExpenses?: number | string | null;
        totalActualExpenses?: number | string | null;
        totalApprovedExpenses?: number | string | null;
        pendingExpensesCount?: number | string | null;
        overdueExpensesCount?: number | string | null;
        expensesByCategory?: Record<string, number> | null;
        remainingAmount?: number | string | null;
        spentPercentage?: number | string | null;
        isOverBudget?: boolean | null;
        isWarningLevel?: boolean | null;
        isCriticalLevel?: boolean | null;
        daysRemaining?: number | string | null;
        isExpired?: boolean | null;
    }
    interface IFilter {
        name?: string;
        code?: string;
        type?: string;
        status?: string;
        period?: string;
        teamId?: number;
        departmentId?: number;
        ownerId?: number;
        fiscalYear?: number;
        fiscalQuarter?: number;
        fiscalMonth?: number;
        isActive?: boolean;
        startDate?: string;
        endDate?: string;
        minAmount?: number;
        maxAmount?: number;
        tags?: string[];
    }
    interface IApprovalRequest {
        budget_id: number;
        approvalNote?: string;
    }
    interface IRejectionRequest {
        budget_id: number;
        rejectionReason: string;
    }
    interface IBudgetStats {
        totalBudgets: number;
        totalAllocated: number;
        totalSpent: number;
        totalCommitted: number;
        totalAvailable: number;
        averageUtilization: number;
        budgetsByStatus: Record<string, number>;
        budgetsByType: Record<string, number>;
        budgetsByPeriod: Record<string, number>;
        overdueCount: number;
        warningLevelCount: number;
        criticalLevelCount: number;
    }
}

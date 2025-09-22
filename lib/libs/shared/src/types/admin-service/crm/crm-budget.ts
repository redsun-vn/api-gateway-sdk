/* eslint-disable @typescript-eslint/no-namespace */

import { BUDGET_PERIOD, BUDGET_STATUS, BUDGET_TYPE } from '../../../enum';
import { BaseResponse } from '../../common.type';
import { ICRMBudgetExpense } from './crm-expense';
import { ICRMTeam } from './team';

export namespace ICRMBudget {
	export interface ICreate {
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

	export interface IUpdate extends Partial<ICreate> {
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

	export interface IResponse extends BaseResponse {
		// Basic information
		name: string;
		code?: string;
		description?: string | null; // Mô tả ngân sách
		type: string & BUDGET_TYPE;
		status: string & BUDGET_STATUS;
		period: string & BUDGET_PERIOD;
		currency: string;

		// Financial information - Thông tin tài chính
		allocatedAmount: number | string; // Số tiền được phân bổ
		spentAmount: number | string; // Số tiền đã chi tiêu
		committedAmount: number | string; // Số tiền đã cam kết
		availableAmount: number | string; // Số tiền còn lại
		utilizationRate?: number | string; // Tỷ lệ sử dụng

		// Time information - Thông tin thời gian
		startDate: string | Date; // Ngày bắt đầu
		endDate: string | Date; // Ngày kết thúc
		fiscalYear?: number | null; // Năm tài chính
		fiscalQuarter?: number | null; // Quý tài chính
		fiscalMonth?: number | null; // Tháng tài chính

		// Approval information - Thông tin phê duyệt
		approvedById?: number | string | null; // ID người phê duyệt
		approvedDate?: string | null; // Ngày phê duyệt
		approvalNote?: string | null; // Ghi chú phê duyệt
		rejectedById?: number | string | null; // ID người từ chối
		rejectedDate?: string | null; // Ngày từ chối
		rejectionReason?: string | null; // Lý do từ chối

		// Organization allocation - Phân bổ tổ chức
		teamId?: number | string | null; // ID nhóm
		departmentId?: number | string | null; // ID phòng ban
		ownerId?: number | string | null; // ID chủ sở hữu
		approverId?: number | string | null; // ID người phê duyệt
		stakeholderIds?: (number | string)[] | null; // Danh sách ID các bên liên quan

		// Tracking and reporting - Theo dõi và báo cáo
		isActive: boolean; // Có hoạt động không
		isRollover: boolean; // Có chuyển tiếp không
		autoApprove: boolean; // Tự động phê duyệt
		revisionNumber: number; // Số phiên bản
		lastReviewedDate?: string | null; // Ngày xem xét gần nhất
		lastReviewedById?: number | null; // ID người xem xét gần nhất

		// Alerts and thresholds - Cảnh báo và ngưỡng
		warningThreshold: number | string | null; // Ngưỡng cảnh báo
		criticalThreshold: number | string | null; // Ngưỡng nghiêm trọng
		enableNotifications: boolean; // Bật thông báo

		// Metadata - Dữ liệu meta
		tags?: string[] | null; // Thẻ gắn nhãn
		customFields?: Record<string, any> | null; // Trường tùy chỉnh
		attachments?: string[] | null; // Tệp đính kèm
		notes?: string | null; // Ghi chú
		team?: ICRMTeam.IResponse | null; // Thông tin nhóm
		expenses?: ICRMBudgetExpense.IResponse[] | null; // Danh sách chi phí

		// Computed properties - Thuộc tính tính toán
		totalPlannedExpenses?: number | string | null; // Tổng chi phí dự kiến
		totalActualExpenses?: number | string | null; // Tổng chi phí thực tế
		totalApprovedExpenses?: number | string | null; // Tổng chi phí đã phê duyệt
		pendingExpensesCount?: number | string | null; // Số lượng chi phí đang chờ
		overdueExpensesCount?: number | string | null; // Số lượng chi phí quá hạn
		expensesByCategory?: Record<string, number | string> | null; // Chi phí theo danh mục
		remainingAmount?: number | string | null; // Số tiền còn lại
		spentPercentage?: number | string | null; // Tỷ lệ phần trăm đã chi
		isOverBudget?: boolean | null; // Có vượt ngân sách không
		isWarningLevel?: boolean | null; // Có ở mức cảnh báo không
		isCriticalLevel?: boolean | null; // Có ở mức nghiêm trọng không
		daysRemaining?: number | string | null; // Số ngày còn lại
		isExpired?: boolean | null; // Đã hết hạn chưa
	}

	export interface IFilter {
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

	export interface IApprovalRequest {
		budget_id: number;
		approvalNote?: string;
	}

	export interface IRejectionRequest {
		budget_id: number;
		rejectionReason: string;
	}

	export interface IBudgetStats {
		totalBudgets: number | string;
		totalAllocated: number | string;
		totalSpent: number | string;
		totalCommitted: number | string;
		totalAvailable: number | string;
		averageUtilization: number | string | null;
		budgetsByStatus: Record<string, number>;
		budgetsByType: Record<string, number | string>;
		budgetsByPeriod: Record<string, number | string>;
		overdueCount: number | string;
		warningLevelCount: number | string;
		criticalLevelCount: number | string;
	}
}

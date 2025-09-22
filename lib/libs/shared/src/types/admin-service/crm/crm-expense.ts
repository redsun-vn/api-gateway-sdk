/* eslint-disable @typescript-eslint/no-namespace */

import {
	EXPENSE_CATEGORY,
	EXPENSE_PRIORITY,
	EXPENSE_STATUS,
} from '../../../enum';
import { BaseResponse } from '../../common.type';
import { ICRMBudget } from './crm-budget';

export namespace ICRMBudgetExpense {
	export interface ICreate {
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

	export interface IUpdate extends Partial<ICreate> {
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

	export interface IResponse extends BaseResponse {
		// Basic information
		// Thông tin cơ bản
		name: string; // Tên chi phí
		code: string | null; // Mã chi phí
		description: string | null; // Mô tả chi phí
		category: string & EXPENSE_CATEGORY; // Danh mục chi phí
		status: string & EXPENSE_STATUS; // Trạng thái chi phí
		priority: string & EXPENSE_PRIORITY; // Độ ưu tiên chi phí

		// Thông tin số tiền
		plannedAmount: number | string; // Số tiền kế hoạch
		actualAmount: number | string; // Số tiền thực tế
		approvedAmount: number | string; // Số tiền được phê duyệt
		currency: string | null; // Loại tiền tệ

		// Thông tin thời gian
		plannedDate: string | null; // Ngày kế hoạch
		actualDate: string | null; // Ngày thực tế
		dueDate: string | null; // Ngày đến hạn

		// Thông tin phê duyệt
		requestedById: number | string | null; // ID người yêu cầu
		requestedDate: string | null; // Ngày yêu cầu
		approvedById: number | string | null; // ID người phê duyệt
		approvedDate: string | null; // Ngày phê duyệt
		approvalNote: string | null; // Ghi chú phê duyệt
		rejectedById: number | string | null; // ID người từ chối
		rejectedDate: string | null; // Ngày từ chối
		rejectionReason: string | null; // Lý do từ chối

		// Thông tin liên quan
		budget_id: number | string; // ID ngân sách
		vendorName: string | null; // Tên nhà cung cấp
		vendorContact: string | null; // Liên hệ nhà cung cấp
		invoiceNumber: string | null; // Số hóa đơn
		referenceNumber: string | null; // Số tham chiếu

		// Thông tin bổ sung
		isRecurring: boolean | null; // Có phải chi phí định kỳ
		recurringCount: number | null; // Số lần lặp lại
		isReimbursable: boolean | null; // Có thể hoàn tiền
		requiresReceipt: boolean | null; // Yêu cầu biên lai
		tags: string[] | null; // Các thẻ tag
		attachments: string[] | null; // Tệp đính kèm
		notes: string | null; // Ghi chú

		// Quan hệ dữ liệu
		budget?: ICRMBudget.IResponse | null; // Thông tin ngân sách
		parent?: ICRMBudgetExpense.IResponse | null; // Chi phí cha
		children?: ICRMBudgetExpense.IResponse[] | null; // Chi phí con

		// Thuộc tính tính toán
		varianceAmount?: number; // Số tiền chênh lệch
		variancePercentage?: number; // Phần trăm chênh lệch
		isOverBudget?: boolean; // Có vượt ngân sách
		completionPercentage?: number; // Phần trăm hoàn thành
		daysUntilDue?: number | string; // Số ngày còn lại đến hạn
		isOverdue?: boolean; // Có quá hạn
	}

	export interface IFilter {
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

	export interface IApprovalRequest {
		expenseId: number;
		approvedAmount?: number;
		approvalNote?: string;
	}

	export interface IRejectionRequest {
		expenseId: number;
		rejectionReason: string;
	}
}

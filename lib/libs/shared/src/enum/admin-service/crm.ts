export enum BUDGET_TYPE {
	MARKETING = 'marketing', // Ngân sách marketing
	SALES = 'sales', // Ngân sách bán hàng
	OPERATION = 'operation', // Ngân sách vận hành
	PROJECT = 'project', // Ngân sách dự án
	TRAINING = 'training', // Ngân sách đào tạo
	OTHER = 'other', // Ngân sách khác
}

export enum BUDGET_STATUS {
	DRAFT = 'draft', // Bản nháp
	PENDING = 'pending', // Chờ phê duyệt
	APPROVED = 'approved', // Đã phê duyệt
	REJECTED = 'rejected', // Đã từ chối
	ACTIVE = 'active', // Đang hoạt động
	COMPLETED = 'completed', // Đã hoàn thành
	CANCELLED = 'cancelled', // Đã hủy
}

export enum BUDGET_PERIOD {
	MONTHLY = 'monthly', // Hàng tháng
	QUARTERLY = 'quarterly', // Hàng quý
	YEARLY = 'yearly', // Hàng năm
	PROJECT_BASED = 'project_based', // Theo dự án
}

export enum EXPENSE_CATEGORY {
	MARKETING = 'marketing', // Chi phí marketing
	ADVERTISING = 'advertising', // Chi phí quảng cáo
	EVENTS = 'events', // Chi phí sự kiện
	TRAINING = 'training', // Chi phí đào tạo
	TRAVEL = 'travel', // Chi phí đi lại
	EQUIPMENT = 'equipment', // Chi phí thiết bị
	SOFTWARE = 'software', // Chi phí phần mềm
	CONSULTING = 'consulting', // Chi phí tư vấn
	OFFICE_SUPPLIES = 'office_supplies', // Chi phí văn phòng phẩm
	UTILITIES = 'utilities', // Chi phí tiện ích
	PERSONNEL = 'personnel', // Chi phí nhân sự
	OTHER = 'other', // Chi phí khác
}

export enum EXPENSE_STATUS {
	PLANNED = 'planned', // Đã lên kế hoạch
	PENDING = 'pending', // Chờ phê duyệt
	REQUESTED = 'requested', // Đã yêu cầu
	APPROVED = 'approved', // Đã phê duyệt
	REJECTED = 'rejected', // Đã từ chối
	IN_PROGRESS = 'in_progress', // Đang thực hiện
	COMPLETED = 'completed', // Đã hoàn thành
	CANCELLED = 'cancelled', // Đã hủy
}

export enum EXPENSE_PRIORITY {
	LOW = 'low', // Thấp
	MEDIUM = 'medium', // Trung bình
	HIGH = 'high', // Cao
	URGENT = 'urgent', // Khẩn cấp
}

export enum KPI_TYPE {
	REVENUE = 'revenue', // Doanh thu
	SALES_VOLUME = 'sales_volume', // Khối lượng bán hàng
	LEAD_GENERATION = 'lead_generation', // Tạo leads
	CONVERSION_RATE = 'conversion_rate', // Tỷ lệ chuyển đổi
	CUSTOMER_SATISFACTION = 'customer_satisfaction', // Hài lòng khách hàng
	COST_REDUCTION = 'cost_reduction', // Giảm chi phí
	PRODUCTIVITY = 'productivity', // Năng suất
	QUALITY = 'quality', // Chất lượng
	ATTENDANCE = 'attendance', // Chấm công
	TRAINING = 'training', // Đào tạo
	OTHER = 'other', // Khác
}

export enum KPI_STATUS {
	DRAFT = 'draft', // Bản nháp
	PENDING = 'pending', // Chờ phê duyệt
	APPROVED = 'approved', // Đã phê duyệt
	ACTIVE = 'active', // Đang hoạt động
	COMPLETED = 'completed', // Đã hoàn thành
	CANCELLED = 'cancelled', // Đã hủy
	OVERDUE = 'overdue', // Quá hạn
}

export enum KPI_PERIOD {
	DAILY = 'daily', // Hàng ngày
	WEEKLY = 'weekly', // Hàng tuần
	MONTHLY = 'monthly', // Hàng tháng
	QUARTERLY = 'quarterly', // Hàng quý
	YEARLY = 'yearly', // Hàng năm
}

export enum KPI_UNIT {
	VND = 'VND', // Tiền Việt Nam
	USD = 'USD', // Đô la Mỹ
	COUNT = 'count', // Số lượng
	PERCENTAGE = 'percentage', // Phần trăm
	HOUR = 'hour', // Giờ
	DAY = 'day', // Ngày
	POINT = 'point', // Điểm
}

export enum KPI_HIERARCHY_LEVEL {
	COMPANY = 'company', // Cấp công ty
	DEPARTMENT = 'department', // Cấp phòng ban
	TEAM = 'team', // Cấp đội nhóm
	INDIVIDUAL = 'individual', // Cấp cá nhân
}

export enum CRMBudgetPermission {
	VIEW = 'crm-budget:view',
	CREATE = 'crm-budget:create',
	UPDATE = 'crm-budget:update',
	DELETE = 'crm-budget:delete',
	APPROVE = 'crm-budget:approve',
}

/**
 * Lead sẽ được phân công dựa trên: địa điểm (60%), chuyên môn ngành (25%), khối lượng công việc hiện tại (15%). Email thông báo sẽ được gửi tự động đến nhân viên được phân công.
 * - round_robin: Phân công theo vòng tròn
 * - by_expertise: Phân công theo chuyên môn
 * - by_region: Phân công theo khu vực
 * - by_volume: Phân công theo khối lượng công việc
 * - manual: Phân công thủ công
 */
export enum ASSIGNMENT_RULES {
	ROUND_ROBIN = 'round_robin',
	BY_EXPERTISE = 'by_expertise',
	BY_REGION = 'by_region',
	BY_VOLUME = 'by_volume',
	MANUAL = 'manual',
}

/**
 * very_high: cấp thiêt cao nhất
 * high: quan trọng
 * medium: cấp thiêt trung bình
 * low: tốt nếu có
 * very_low: Chưa rõ ràng
 */
export enum NEED_SCORE {
	VERY_HIGH = 'very_high',
	HIGH = 'high',
	MEDIUM = 'medium',
	LOW = 'low',
	VERY_LOW = 'very_low',
}

/**
 * now: ngay
 * 1-3_months: 1-3 tháng
 * 3-6_months: 3-6 tháng
 * 6-12_months: 6-12 tháng
 * over_1_year: >1 năm
 */
export enum TIMELINE_SCORE {
	NOW = 'now',
	ONE_TO_THREE_MONTHS = '1-3_months',
	THREE_TO_SIX_MONTHS = '3-6_months',
	SIX_TO_TWELVE_MONTHS = '6-12_months',
	OVER_ONE_YEAR = 'over_1_year',
}

export enum CRMKPIPermission {
	VIEW = 'crm-kpi:view',
	CREATE = 'crm-kpi:create',
	UPDATE = 'crm-kpi:update',
	DELETE = 'crm-kpi:delete',
	MANAGE_HIERARCHY = 'crm-kpi:manage-hierarchy',
}

export enum LEAD_SCORING_RULE_TYPE {
	COMPANY_SIZE = 'company_size',
	BUDGET_RANGE = 'budget_range',
}

export enum LEAD_SCORING_RULE_OPERATOR {
	EQUALS = 'equals',
	GREATER_THAN = 'greater_than',
	GREATER_THAN_EQUALS = 'greater_than_equals',
	LESS_THAN = 'less_than',
	LESS_THAN_EQUALS = 'less_than_equals',
	BETWEEN = 'between',
	IN = 'in',
}

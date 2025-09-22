export enum DEAL_AVAILABLE_PRIORITIES {
	LOW = 'low',
	MEDIUM = 'medium',
	HIGH = 'high',
	VERY_HIGH = 'very_high',
}

export enum DEAL_TYPE {
	NEW = 'new',
	UPSELL = 'upsell',
	RENEWAL = 'renewal',
	CROSS_SELL = 'cross_sell',
}

export enum DEAL_STATUS {
	Potential = 'potential', // Tiềm năng
	Negotiating = 'negotiating', // Đang đàm phán
	Propose = 'propose', // Đề xuất
	CloseDeal = 'close_deal', // Chốt deal
	Fail = 'fail', // Thất bại
}

export enum DEAL_LINE_ITEM_TYPE {
	PACKAGE_ADDITION = 'package_addition',
	APP_PLAN = 'app_plan',
	STAFF_QUANTITY = 'staff_quantity',
	BRANCH_QUANTITY = 'branch_quantity',
	DEVICE = 'device',
	THEME = 'theme',
	OTHER = 'other',
}

// new, contacted, qualified, disqualified, converted, lost
export enum LEAD_STATUS {
	NEW = 'new', // Lead mới
	CONTACTED = 'contacted', // Lead đã liên hệ
	QUALIFIED = 'qualified', // Lead đã được phân loại là đạt tiêu chuẩn
	DISQUALIFIED = 'disqualified', // Lead bị loại
	CONVERTED = 'converted', // Lead đã chuyển thành Deal
	LOST = 'lost', // Lead bị mất
}

// c_level, director, manager, staff
export enum DECISION_MAKER_LEVEL {
	C_LEVEL = 'c_level', // C-level (C-level là người quyết định cuối cùng)
	DIRECTOR = 'director', // Director (Director là người quyết định cuối cùng)
	MANAGER = 'manager', // Manager (Manager là người quyết định cuối cùng)
	STAFF = 'staff', // Staff (Staff là người quyết định cuối cùng)
}

// cold, warm, hot, sales_ready
export enum DEAL_CLASSIFICATION {
	COLD = 'cold',
	WARM = 'warm',
	HOT = 'hot',
	SALES_READY = 'sales_ready',
}

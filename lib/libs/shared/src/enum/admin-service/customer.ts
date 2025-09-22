export enum AdminCustomerType {
	COMPANY = 'company', // Công ty / Doanh Nghiệp
	INDIVIDUAL = 'individual', // Cá nhân
}

export enum AdminCustomerCompanySize {
	STARTUP = 'startup', // Startup (1 - 10)
	SMALL = 'small', // Nhỏ (11 - 50)
	MEDIUM = 'medium', // Vùa (51 - 200)
	LARGE = 'large', // Lớn (201 - 1000)
	ENTERPRISE = 'enterprise', // Doanh nghiệp (> 1000 )
}

export enum AdminCustomerStatus {
	Active = 'active', // Hoạt động
	InActive = 'in_active', // Không hoạt động
	Potential = 'potential', // Tiềm năng
}

export enum AdminCustomerLevelInterest {
	HOT = 'hot', // Nóng - rất quan tâm
	COLD = 'cold', // Lạnh - ít quan tâm
	WARM = 'warm', // Ấm - quan tâm
}

export enum AdminCustomerPriority {
	LOW = 'low', // Thấp
	MEDIUM = 'medium', // Trung bình
	HIGH = 'high', // Cao
}

export enum AdminCustomerExpectedBudgetRange {
	Under10M = 'Under10M', // < 10M
	From10To50M = 'From10MTo50M', // 10M -> 50M
	From50MTo100M = 'From50MTo100M', // 5OM -> 100M
	From100MTo500M = 'From100MTo500M', // 100M -> 500M
	Over500M = 'Over500M', // > 500M
}

export declare enum BUDGET_TYPE {
    MARKETING = "marketing",
    SALES = "sales",
    OPERATION = "operation",
    PROJECT = "project",
    TRAINING = "training",
    OTHER = "other"
}
export declare enum BUDGET_STATUS {
    DRAFT = "draft",
    PENDING = "pending",
    APPROVED = "approved",
    REJECTED = "rejected",
    ACTIVE = "active",
    COMPLETED = "completed",
    CANCELLED = "cancelled"
}
export declare enum BUDGET_PERIOD {
    MONTHLY = "monthly",
    QUARTERLY = "quarterly",
    YEARLY = "yearly",
    PROJECT_BASED = "project_based"
}
export declare enum EXPENSE_CATEGORY {
    MARKETING = "marketing",
    ADVERTISING = "advertising",
    EVENTS = "events",
    TRAINING = "training",
    TRAVEL = "travel",
    EQUIPMENT = "equipment",
    SOFTWARE = "software",
    CONSULTING = "consulting",
    OFFICE_SUPPLIES = "office_supplies",
    UTILITIES = "utilities",
    PERSONNEL = "personnel",
    OTHER = "other"
}
export declare enum EXPENSE_STATUS {
    PLANNED = "planned",
    PENDING = "pending",
    REQUESTED = "requested",
    APPROVED = "approved",
    REJECTED = "rejected",
    IN_PROGRESS = "in_progress",
    COMPLETED = "completed",
    CANCELLED = "cancelled"
}
export declare enum EXPENSE_PRIORITY {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high",
    URGENT = "urgent"
}
export declare enum KPI_TYPE {
    REVENUE = "revenue",
    SALES_VOLUME = "sales_volume",
    LEAD_GENERATION = "lead_generation",
    CONVERSION_RATE = "conversion_rate",
    CUSTOMER_SATISFACTION = "customer_satisfaction",
    COST_REDUCTION = "cost_reduction",
    PRODUCTIVITY = "productivity",
    QUALITY = "quality",
    ATTENDANCE = "attendance",
    TRAINING = "training",
    OTHER = "other"
}
export declare enum KPI_STATUS {
    DRAFT = "draft",
    PENDING = "pending",
    APPROVED = "approved",
    ACTIVE = "active",
    COMPLETED = "completed",
    CANCELLED = "cancelled",
    OVERDUE = "overdue"
}
export declare enum KPI_PERIOD {
    DAILY = "daily",
    WEEKLY = "weekly",
    MONTHLY = "monthly",
    QUARTERLY = "quarterly",
    YEARLY = "yearly"
}
export declare enum KPI_UNIT {
    VND = "VND",
    USD = "USD",
    COUNT = "count",
    PERCENTAGE = "percentage",
    HOUR = "hour",
    DAY = "day",
    POINT = "point"
}
export declare enum KPI_HIERARCHY_LEVEL {
    COMPANY = "company",
    DEPARTMENT = "department",
    TEAM = "team",
    INDIVIDUAL = "individual"
}
export declare enum CRMBudgetPermission {
    VIEW = "crm-budget:view",
    CREATE = "crm-budget:create",
    UPDATE = "crm-budget:update",
    DELETE = "crm-budget:delete",
    APPROVE = "crm-budget:approve"
}
export declare enum ASSIGNMENT_RULES {
    ROUND_ROBIN = "round_robin",
    BY_EXPERTISE = "by_expertise",
    BY_REGION = "by_region",
    BY_VOLUME = "by_volume",
    MANUAL = "manual"
}
export declare enum NEED_SCORE {
    VERY_HIGH = "very_high",
    HIGH = "high",
    MEDIUM = "medium",
    LOW = "low",
    VERY_LOW = "very_low"
}
export declare enum TIMELINE_SCORE {
    NOW = "now",
    ONE_TO_THREE_MONTHS = "1-3_months",
    THREE_TO_SIX_MONTHS = "3-6_months",
    SIX_TO_TWELVE_MONTHS = "6-12_months",
    OVER_ONE_YEAR = "over_1_year"
}
export declare enum CRMKPIPermission {
    VIEW = "crm-kpi:view",
    CREATE = "crm-kpi:create",
    UPDATE = "crm-kpi:update",
    DELETE = "crm-kpi:delete",
    MANAGE_HIERARCHY = "crm-kpi:manage-hierarchy"
}

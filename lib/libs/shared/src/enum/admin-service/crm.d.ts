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
export declare enum CRMBudgetPermission {
    VIEW = "crm-budget:view",
    CREATE = "crm-budget:create",
    UPDATE = "crm-budget:update",
    DELETE = "crm-budget:delete",
    APPROVE = "crm-budget:approve"
}

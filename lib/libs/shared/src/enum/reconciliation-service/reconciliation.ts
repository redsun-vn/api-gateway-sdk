export enum ADMIN_RECONCILIATION_STATUS_ENUM {
	OPEN = 'open',
	CHECKING = 'checking',
	DONE = 'done',
	CANCELLED = 'cancelled',
}

export enum RECONCILIATION_STATUS_ENUM {
	OPEN = 'open',
	CHECKING = 'checking',
	DONE = 'done',
	CANCELLED = 'cancelled',
}

export enum TRANSACTION_RECONCILIATION_STATUS_ENUM {
	WAITING = 'waiting',
	PROCESSING = 'processing',
	DONE = 'done',
}

export enum PAYMENT_TYPE {
	RECEIPT = 'receipt',
}

export enum PAYMENT_RECONCILIATION_STATUS {
	OPEN = 'open',
	PROCESSING = 'processing',
	PROCEED = 'proceed',
	SUCCESS = 'success',
	ERROR = 'error',
	CANCEL = 'cancel',
}

export enum PAYMENT_METHOD {
	CASH = 'cash',
	TRANSFER = 'transfer',
	OTHER = 'other',
}

export enum ORDER_RECONCILIATION_ENUM {
	WAITING = 'waiting',
	CHECKED = 'checked',
}

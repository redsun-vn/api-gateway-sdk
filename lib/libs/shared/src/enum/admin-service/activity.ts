export enum AdminActivityType {
	CALL = 'call',
	EMAIL = 'email',
	MEETING_ONLINE = 'meeting_online',
	MEETING_OFFLINE = 'meeting_offline',
	NOTE = 'note',
	SUGGESTION = 'suggestion',
	DEMO = 'demo',
	FOLLOW_UP = 'follow_up',
	SIGN_CONTRACT = 'sign_contract',
	SEND_QUOTE = 'send_quote',
}

export enum AdminActivityPriority {
	HIGH = 'high',
	MEDIUM = 'medium',
	LOW = 'low',
}

export enum AdminActivityStatus {
	PLANNED = 'planned',
	PENDING = 'pending',
	IN_PROGRESS = 'in_progress',
	COMPLETED = 'completed',
	CANCELED = 'canceled',
	OVERDUE = 'overdue',
}

export enum AdminActivityResult {
	SUCCESS = 'success',
	PARTIAL = 'partial',
	FAIL = 'fail',
	POSTPONED = 'postponed',
}

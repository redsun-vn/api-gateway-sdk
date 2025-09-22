export enum INVOICE_STATUS_ENUM {
	DRAFT = 'draft',
	PENDING = 'pending',
	APPROVED = 'approved',
	SENT = 'sent',
	PAID = 'paid',
	OVERDUE = 'overdue',
	CANCELLED = 'cancelled',
}

export enum INVOICE_TYPE_ENUM {
	STANDARD = 'standard',
	PROFORMA = 'proforma',
	CREDIT_NOTE = 'credit_note',
	DEBIT_NOTE = 'debit_note',
}

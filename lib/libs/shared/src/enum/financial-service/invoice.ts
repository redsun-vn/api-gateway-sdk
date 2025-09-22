export enum INVOICE_STATE {
	DRAFT = 'draft',
	POSTED = 'posted',
	CANCELLED = 'cancelled',
}

export enum INVOICE_TYPE {
	CUSTOMER = 'out_invoice', // Customer Invoice
	VENDOR = 'in_invoice', // Vendor bill
	PURCHASE_RECEIPT = 'in_receipt', // Purchase Receipt
	SALES_INVOICE = 'out_receipt', // Sales Invoice
	REFUND_INVOICE = 'out_refund', // Refund Invoice
	REFUND_RECEIPT = 'in_refund', // Refund Receipt
}

export enum INVOICE_PAYMENT_STATUS {
	UNPAID = 'unpaid',
	PARTIALLY_PAID = 'partially_paid',
	PAID = 'paid',
	UNCOLLECTED = 'uncollected',
	VOID = 'void',
}

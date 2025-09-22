/**
 * Trạng thái công nợ
 * - Chờ thanh toán: Công nợ đang chờ thanh toán
 * - Đã thanh toán: Công nợ đã thanh toán
 * - Đã thanh toán một phần: Công nợ đã thanh toán một phần
 * - Quá hạn: Công nợ đã quá hạn
 */
export enum DEBT_STATUS {
	PENDING = 'pending', // Chờ thanh toán
	PAID = 'paid', // Đã thanh toán
	PARTIAL_PAID = 'partial_paid', // Đã thanh toán một phần
	OVERDUE = 'overdue', // Quá hạn
}

/**
 * Loại công nợ
 * - Công nợ phải thu: Khi shop bán hàng cho khách hàng và khách hàng chưa thanh toán.
 * - Công nợ phải trả: Khi shop mua hàng hoặc dịch vụ của nhà cung cấp và chưa thanh toán cho nhà cung cấp.
 */
export enum DEBT_TYPE {
	RECEIVABLE = 'receivable', // Công nợ phải thu
	PAYABLE = 'payable', // Công nợ phải trả
}

/**
 * Trạng thái thanh toán công nợ
 * - Chờ thanh toán: Công nợ đang chờ thanh toán
 * - Đã thanh toán: Công nợ đã thanh toán
 * - Đã thanh toán một phần: Công nợ đã thanh toán một phần
 */
export enum DEBT_PAYMENT_STATUS {
	UNPAID = 'unpaid', // Chờ thanh toán
	PAID = 'paid', // Đã thanh toán
	PARTIAL_PAID = 'partial_paid', // Đã thanh toán một phần
}

/**
 * Nguồn gốc công nợ
 * - Đơn hàng: Công nợ từ đơn hàng
 * - Phiếu nhập kho: Công nợ từ phiếu nhập kho
 * - Hóa đơn: Công nợ từ hóa đơn
 * - Khác: Công nợ từ nguồn khác
 */
export enum DEBT_SOURCE {
	ORDER = 'order', // Đơn hàng
	INVOICE = 'invoice', // Hóa đơn
	PICKING = 'picking', // Phiếu nhập kho
	OTHER = 'other', // Khác
}

/**
 * Loại follow-up
 * - Email
 * - Post
 * - SMS
 */
export enum FOLLOW_UP_TYPE {
	MANUAL = 'manual',
	EMAIL = 'email',
	POST = 'post',
	SMS = 'sms',
}

export enum PAYMENT_TERM_LINE_VALUE_TYPE {
	PERCENTAGE = 'percentage',
	FIXED = 'fixed',
}

export enum PAYMENT_TERM_LINE_DELAY_TYPE {
	DAYS_AFTER = 'days_after',
	DAYS_AFTER_END_OF_MONTH = 'days_after_end_of_month',
	DAYS_AFTER_END_OF_NEXT_MONTH = 'days_after_end_of_next_month',
}

export enum TransactionStatus /* Trạng thái giao dịch đơn hàng */ {
	AWAITING_RESPONSE = 'awaiting_reponse', //Đang chờ phản hồi.
	ERROR = 'error', //Đã xảy ra lỗi khi xử lý giao dịch.
	FAILURE = 'failure', //Giao dịch không thành công
	PENDING = 'pending', //Giao dịch đang chờ xử lý.
	SUCCESS = 'success', //Giao dịch đã thành công
	UNKNOWN = 'unknown', //Trạng thái giao dịch không xác định.
}

export enum PaymentStatus {
	NEW = 'new',
	PROCESSING = 'processing',
	PENDING = 'pending',
	COMPLETED = 'completed',
	CANCELED = 'canceled',
}

export enum TransactionKind {
	AUTHORIZATION = 'authorization',
	CAPTURE = 'capture',
	CHANGE = 'change',
	EMV_AUTHORIZATION = 'emv_authorization',
	REFUND = 'refund',
	SALE = 'sale',
	SUGGESTED_REFUND = 'suggested_refund',
	VOID = 'void',
}

export enum TransactionErrorCode /* Mã lỗi thanh toán đơn hàng */ {
	INVALID_PAYMENT_METHOD = 'invalid_payment_method', //Phương thức thanh toán không hợp lệ.
	CONFIG_ERROR = 'config_error', //Có lỗi trong cấu hình cổng thanh toán.
	GENERIC_ERROR = 'generic_error', //Lỗi không xác định khi xử lý thanh toán.
	PAYMENT_METHOD_UNAVAILABLE = 'payment_method_unavailable', //Phương thức thanh toán tạm thời không khả dụng.
	PROCESSING_ERROR = 'processing_error', //Xảy ra lỗi khi xử lý thanh toán
	UNSUPPORTED_FEATURE = 'unsupported_feature', //Cấu hình cổng thanh toán không hỗ trợ một tính năng
	EXPIRED_CARD = 'expired_card', //Thẻ hết hạn
	CARD_DECLINED = 'card_declined', //Thẻ bị từ chối
	INCORRECT_ADDRESS = 'incorrect_address', //Địa chỉ không khớp với số thẻ.
	INCORRECT_CVC = 'incorrect_cvc', //CVC không khớp với số thẻ
	INCORRECT_NUMBER = 'incorrect_number', //Số thẻ không chính xác
	INCORRECT_PIN = 'incorrect_pin', //Sai mã PIN
	INCORRECT_ZIP = 'incorrect_zip', //Mã zipcode không khớp với số thẻ
	INVALID_AMOUNT = 'invalid_amount', //Số tiền quá cao hoặc quá thấp đối với nhà cung cấp dịch vụ thẻ
	INVALID_COUNTRY = 'invalid_country', //Phương thức thanh toán không khả dụng tại quốc gia của khách hàng
	INVALID_CVC = 'invalid_cvc', //Định dạng của CVC không chính xác.
	INVALID_EXPIRY_DATE = 'invalid_expiry_date', //Định dạng của ngày hết hạn không chính xác.
	INVALID_NUMBER = 'invalid_number', //Định dạng số thẻ không chính xác
}

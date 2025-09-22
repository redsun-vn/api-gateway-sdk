export enum OrderStatus /* Trạng thái đơn hàng */ {
	OPEN = 'open', //Đơn hàng mới
	ARCHIVED = 'archived', //Đã lưu trữ
	COMPLETED = 'completed', //Đơn hàng hoàn thành
	CANCELED = 'canceled', //Đơn hàng hủy
}

export enum OrderCombiningPromotionType /* Loại áp dụng giảm giá đơn hàng */ {
	ORDER_AMOUNT = 'order_amount', // Giảm giá tổng đơn
	PARTNER_LEVEL = 'partner_level', // Giảm giá hạng thành viên
	PARTNER_POINT = 'partner_point', // Giảm giá từ điểm thành viên
	LINE_ITEM_AMOUNT = 'line_item_amount', // Giảm giá trên line xác định
	SERVICE_AMOUNT = 'service_amount', // Giảm giá phí dịch vụ
	FREE_SHIPPING = 'free_shipping', // Giảm giá phí ship
	BUY_X_GET_Y = 'buy_x_get_y', // Mua hàng tặng hàng
	NEXT_ORDER = 'next_order', // Giảm giá cho đơn hàng tiếp theo
}

export enum CombiningPromotionStatus /* Trạng thái áp dụng giảm giá đơn hàng */ {
	OPEN = 'open', // Đã áp dụng
	COMPLETED = 'completed', // Đã hoàn thành
	CANCELED = 'canceled', // Đã hủy
}

export enum AdditionalFeeType /* Loại Phí phụ thu */ {
	SHOP_SHIPPING = 'shop_shipping', // Phí ship shop tự giao
	EXTERNAL_SHIPPING = 'external_shipping', // Phí shop thuê ship bên ngoài
	SERVICE_FEE = 'service_fee', // Phí dịch vụ
	INCIDENTAL_FEE = 'incidental_fee', // Phí phát sinh
	FREE_SHIPPING = 'free_shipping', // Miễn phí ship
}

export enum DrafOrderStatus /* Trạng thái đơn nháp */ {
	OPEN = 'open', //Đơn nháp mới
	VERIFIED = 'verified', //Đã xác minh
	CONFIRMED = 'confirmed', //Đã xác nhận
	COMPLETED = 'completed', //Đơn nháp hoàn thành
	CANCELED = 'canceled', //Đơn nháp hủy
}

export enum OrderTransactionStatus /* Trạng thái giao dịch đơn hàng */ {
	AWAITING_RESPONSE = 'awaiting_reponse', //Đang chờ phản hồi.
	ERROR = 'error', //Đã xảy ra lỗi khi xử lý giao dịch.
	FAILURE = 'failure', //Giao dịch không thành công
	PENDING = 'pending', //Giao dịch đang chờ xử lý.
	SUCCESS = 'success', //Giao dịch đã thành công
	UNKNOWN = 'unknown', //Trạng thái giao dịch không xác định.
}

export enum KitchenProcessingStatus /* Trạng thái bếp lên món */ {
	NONE = 'none', //Món Chua Gui Xuong Bep
	NEW = 'new', //Món Mới
	PENDING = 'pending', //Đang xu ly
	COOK = 'cook', //Đang chế biến
	COMPLETED = 'completed', //Đã xong, chờ cung ứng
}

export enum CODStatus /* Trạng thái COD */ {
	NONE = 'none', //Không có COD
	PAID = 'paid', //Đã nhận COD
	NOT_PAID = 'not_paid', //Chưa nhận COD
}

export enum OrderFinancialStatus /* Trạng thái thanh toán */ {
	PENDING = 'pending', //Chờ xử lý
	PAID = 'paid', //Đã thanh toán
	PARTIALLY_PAID = 'partially_paid', //Đã thanh toán một phần
	PARTIALLY_REFUNDED = 'partially_refunded', //Đã nhập trả một phần
	REFUNDED = 'refunded', //Đã nhập trả
	NOT_PAID = 'not_paid', //Chưa thành toán
	CANCELED = 'canceled', //Đã huỷ
	DEBT = 'debt', // Thanh toán công nợ hàng nợ
	DEBT_PAID = 'debt_paid', // Đã thanh toán công nợ đã thanh toán
}

// export enum OrderFulfillmentStatus /* Trạng thái thực hiện đơn hàng */ {
// 	OPEN = 'open', //Chờ lấy hàng
// 	SCHEDULED = 'scheduled', //Đang đi lấy hàng
// 	IN_PROGRESS = 'in_progress', //Đang giao hàng
// 	FULFILLED = 'fulfilled', //Đã giao hàng
// 	CANCEL = 'cancel', //Hủy giao hàng
// 	RESTOCKED = 'restocked', //Chuyển hoàn
// 	PENDING = 'pending', //Chờ xử lý
// 	DONT_MEET_CUSTOMER = 'dont_meet_customer', //Không gặp khách
// 	WAITING_RESTOCK = 'waitting_restock', //Chờ chuyển hoàn
// 	UNFULFILLED = 'unfulfilled', //Chưa hoàn thành
// }

export enum OrderFulfillmentStatus /* Trạng thái thực hiện đơn hàng */ {
	PENDING = 'pending',
	OPEN = 'open',
	PROGRESSING = 'progressing',
	SUCCESS = 'success',
	CANCELLED = 'cancelled',
	ERROR = 'error',
	FAILURE = 'failure',
	CLOSED = 'closed',
}

export enum OrderProcessingStatus /* Trạng thái chuyen hang đơn hàng */ {
	VERIFIED = 'verified', //Đã xác thực
	BRANCH_TRANSFER = 'branch_transfer', //Chuyển cửa hàng
	IN_STOCK = 'in_stock', //Còn hàng
	OUT_STOCK = 'out_stock', //Hết hàng
	SHIPPED = 'shipped', //Đã xuất kho
	DELIVERY_PROVIDER = 'delivery_provider', //Hàng đang ở nhà vận chuyển
	SELF_DELIVERY = 'self_delivery', //Tự giao
	COMPLETED = 'completed', //Hoàn tất
	CANCELED = 'canceled', // Đã huỷ
}

export enum OrderCancelReason /* Lý do huỷ đơn hàng */ {
	CUSTOMER = 'customer', //Khách hàng muốn hủy đơn hàng.
	DECLINED = 'declined', //Thanh toán đã bị từ chối.
	FRAUD = 'fraud', //Đơn đặt hàng bị lừa đảo.
	INVENTORY = 'inventory', //Không có đủ hàng tồn kho.
	ORTHER = 'orther', //Lý do khác
}

export enum OrderTransactionErrorCode /* Mã lỗi thanh toán đơn hàng */ {
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

export enum OrderTransactionKind {
	AUTHORIZATION = 'authorization',
	CAPTURE = 'capture',
	CHANGE = 'change',
	EMV_AUTHORIZATION = 'emv_authorization',
	REFUND = 'refund',
	SALE = 'sale',
	SUGGESTED_REFUND = 'suggested_refund',
	VOID = 'void',
}

export enum TransactionFeeType {
	BONUS = 'bonus',
	VERIFY = 'verify',
	CHANGE = 'change',
}

export enum KDSState /* Trạng thái bếp lên món */ {
	NONE = 'none', //Món Chua Gui Xuong Bep
	NEW = 'new', //Món Mới
	PENDING = 'pending', //Đang chờ xu ly
	PROCESSING = 'processing', //Đang chế biến
	COMPLETED = 'completed', //Đã xong, chờ cung ứng
	CANCELED = 'canceled', //Đã huỷ
	RECALLED = 'recalled', //Đã thu hồi
	RETURNED = 'returned', //Đã trả lại
}

export enum SaleOrderStatus {
	DRAFT = 'draft',
	SENT = 'sent',
	SALE_ORDER = 'sale',
	DONE = 'done',
	CANCEL = 'cancel',
}

export enum FEE_CALCULATION_TYPE {
	FIXED = 'FIXED',
	WEIGHT_BASED = 'WEIGHT_BASED',
	DISTANCE_BASED = 'DISTANCE_BASED',
	PROVIDER_API = 'PROVIDER_API',
	CUSTOM_FORMULA = 'CUSTOM_FORMULA',
}

export enum MARKUP_TYPE {
	FIXED = 'FIXED',
	PERCENTAGE = 'PERCENTAGE',
}

export const FEE_CALCULATION_DESCRIPTION = {
	[FEE_CALCULATION_TYPE.FIXED]: 'Phí cố định',
	[FEE_CALCULATION_TYPE.WEIGHT_BASED]: 'Tính theo trọng lượng',
	[FEE_CALCULATION_TYPE.DISTANCE_BASED]: 'Tính theo khoảng cách',
	[FEE_CALCULATION_TYPE.PROVIDER_API]: 'Lấy từ nhà vận chuyển',
	[FEE_CALCULATION_TYPE.CUSTOM_FORMULA]: 'Công thức tùy chỉnh',
};

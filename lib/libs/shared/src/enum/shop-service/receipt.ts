export enum RECEIPT_SOURCE_TYPE_ENUM {
	AUTOMATIC = 'automatic',
	MANUAL = 'manual',
}

export enum RECEIPT_SOURCE_ENUM {
	ADMIN = 'admin',
	BO_SHOP = 'bo_shop',
}

export enum RECEIPT_STATUS_ENUM {
	DRAFT = 'draft', // Nháp - chưa hoàn thành
	OPEN = 'open', // Mở - đang chờ xử lý
	PENDING_PAYMENT = 'pending_payment', // Chờ thanh toán
	PROCESSING = 'processing', // Đang xử lý
	CONFIRMED = 'confirmed', // Đã xác nhận
	COMPLETED = 'completed', // Hoàn thành
	PARTIALLY_REFUNDED = 'partially_refunded', // Hoàn tiền một phần
	FULLY_REFUNDED = 'fully_refunded', // Hoàn tiền toàn bộ
	CANCELLED = 'cancelled', // Hủy bỏ
	EXPIRED = 'expired', // Hết hạn
	FAILED = 'failed', // Thất bại
	SUSPENDED = 'suspended', // Tạm dừng
}

export enum RECEIPT_LINE_ITEM_TYPE_ENUM {
	PACKAGE_ADDITION = 'package_addition',
	APP_PLAN = 'app_plan',
	STAFF_QUANTITY = 'staff_quantity',
	BRANCH_QUANTITY = 'branch_quantity',
}

export enum RECEIPT_PRIORITY_ENUM {
	URGENT = 'urgent', // Khẩn cấp
	HIGH = 'high', // Cao
	MEDIUM = 'medium', // Trung bình
	LOW = 'low', // Thấp
}

// Thêm enum cho trạng thái thanh toán
export enum RECEIPT_PAYMENT_STATUS_ENUM {
	UNPAID = 'unpaid', // Chưa thanh toán
	PARTIAL = 'partial', // Thanh toán một phần
	PAID = 'paid', // Đã thanh toán đủ
	OVERPAID = 'overpaid', // Thanh toán thừa
	REFUNDED = 'refunded', // Đã hoàn tiền
}

// Thêm enum cho loại biên lai
export enum RECEIPT_TYPE_ENUM {
	SUBSCRIPTION = 'subscription', // Biên lai đăng ký
	RENEWAL = 'renewal', // Biên lai gia hạn
	UPGRADE = 'upgrade', // Biên lai nâng cấp
	ADDON = 'addon', // Biên lai mua thêm
	REFUND = 'refund', // Biên lai hoàn tiền
	ADJUSTMENT = 'adjustment', // Biên lai điều chỉnh
}

// Thêm enum cho phương thức thanh toán
export enum RECEIPT_PAYMENT_METHOD_ENUM {
	CREDIT_CARD = 'credit_card', // Thẻ tín dụng
	BANK_TRANSFER = 'bank_transfer', // Chuyển khoản ngân hàng
	E_WALLET = 'e_wallet', // Ví điện tử
	CASH = 'cash', // Tiền mặt
	CRYPTO = 'crypto', // Tiền điện tử
	VOUCHER = 'voucher', // Voucher
	CREDIT = 'credit', // Tín dụng
}

// Thêm enum cho trạng thái xử lý
export enum RECEIPT_PROCESSING_STATUS_ENUM {
	QUEUE = 'queue', // Đang xếp hàng
	PROCESSING = 'processing', // Đang xử lý
	AWAITING_APPROVAL = 'awaiting_approval', // Chờ phê duyệt
	APPROVED = 'approved', // Đã phê duyệt
	REJECTED = 'rejected', // Bị từ chối
	COMPLETED = 'completed', // Hoàn thành xử lý
}

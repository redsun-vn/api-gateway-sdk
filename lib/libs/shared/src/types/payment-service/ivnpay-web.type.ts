/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { Bank as IVNPayBank } from '@redsun-vn/vnpay';

export type TShopIdSiPos = 'sipos';

export namespace IVNPayWebConfig {
	export interface ICreate {
		shop_id: number & tags.Type<'uint64'>;
		payment_method_id: number & tags.Type<'uint64'>;
		tmnCode: string;
		secureSecret: string;
		testMode: boolean;
	}

	export interface IUpdate {
		id: string;
		tmnCode?: string;
		secureSecret?: string;
		testMode?: boolean;
	}

	export interface IResponse extends BaseResponse {
		shop_id: number | string | null;
		payment_method_id: number | string | null;
		tmnCode: string;
		secureSecret?: string;
		testMode: boolean;
		currency: string;
	}

	export interface IResponseWithoutSecret extends BaseResponse {
		shop_id: number | string | null;
		payment_method_id: number | string | null;
		tmnCode: string;
		testMode: boolean;
		currency: string;
	}
}

export namespace IVNPayWeb {
	export interface ICreatePaymentURL {
		shop_id: (number & tags.Type<'uint64'>) | TShopIdSiPos;
		payment_id: (number & tags.Type<'uint64'>) | (string & tags.Format<'uuid'>);
		ip_address: string & tags.Format<'ipv4'>;
		return_url: string & tags.Format<'url'>;
		order_info: string;
		bank_code: string;
	}

	export interface ICreatePublicPaymentURL {
		shop_id: number & tags.Type<'uint64'>;
		payment_id: (number & tags.Type<'uint64'>) | (string & tags.Format<'uuid'>);
		ip_address: string & tags.Format<'ipv4'>;
		return_url: string & tags.Format<'url'>;
		order_info: string;
		bank_code: string;
	}

	export interface IResponsePaymentURL {
		payment_url: string & tags.Format<'url'>;
	}

	export interface IVNPayVerifyIPNRequest {
		/**
		 * Thông tin mô tả nội dung thanh toán (Tiếng Việt, không dấu).
		 * @en Description of payment (Vietnamese, no accent)
		 * @example Thanh toan don hang 12345
		 */
		vnp_OrderInfo: string;
		/**
		 * Mã tham chiếu của giao dịch tại hệ thống của merchant.
		 * Mã này là duy nhất dùng để phân biệt các đơn hàng gửi sang VNPAY.
		 * Không được trùng lặp trong ngày.
		 * @en Reference code of transaction on merchant system. This code is unique to distinguish orders sent to VNPAY. Not duplicated in a day.
		 * @example 123456
		 */
		vnp_TxnRef: string;

		/**
		 * Số tiền thanh toán
		 * @en Payment amount
		 */
		vnp_Amount: number;
		/**
		 * Mã tmn của đối tác
		 * @en Merchant tmn code
		 */
		vnp_TmnCode?: string;
		/**
		 * Mã Ngân hàng thanh toán
		 * @en Bank code
		 * @example NCB
		 */
		vnp_BankCode?: string;
		/**
		 * Mã giao dịch tại Ngân hàng
		 * @en Transaction code at bank
		 * @example NCB20170829152730
		 */
		vnp_BankTranNo?: string;
		/**
		 * Loại tài khoản/thẻ khách hàng sử dụng:`ATM`,`QRCODE`
		 * @en Type of customer account/card used: `ATM`, `QRCODE`
		 * @example ATM
		 */
		vnp_CardType?: string;
		/**
		 * Thời gian thanh toán. Định dạng: yyyyMMddHHmmss
		 * @en Payment time. Format: yyyyMMddHHmmss
		 * @example 20170829152730
		 */
		vnp_PayDate?: number;
		/**
		 * Mã giao dịch ghi nhận tại hệ thống VNPAY.
		 * @en Transaction code recorded in VNPAY system.
		 * @example 20170829153052
		 */
		vnp_TransactionNo?: number;
		/**
		 * Mã phản hồi kết quả thanh toán. Quy định mã trả lời 00 ứng với kết quả Thành công cho tất cả các API.
		 * @en Response code of payment result. The response code 00 corresponds to the Successful result for all APIs.
		 * @example 00
		 * @see https://sandbox.vnpayment.vn/apis/docs/bang-ma-loi/
		 */
		vnp_ResponseCode: string;
		/**
		 * Mã phản hồi kết quả thanh toán. Tình trạng của giao dịch tại Cổng thanh toán VNPAY.
		 *
		 * -00: Giao dịch thanh toán được thực hiện thành công tại VNPAY
		 *
		 * -Khác 00: Giao dịch không thành công tại VNPAY
		 *
		 * @en Response code of payment result. Status of transaction at VNPAY payment gateway.
		 *
		 * -00: Payment transaction is successful at VNPAY
		 *
		 * -Other 00: Payment transaction is not successful at VNPAY
		 *
		 * @example 00
		 * @see https://sandbox.vnpayment.vn/apis/docs/bang-ma-loi/
		 */
		vnp_TransactionStatus?: string;
		/**
		 * Mã kiểu bảo mật sử dụng để tạo mã checksum. Mã này phụ thuộc vào cấu hình của merchant và phiên bản api sử dụng.
		 * Phiên bản hiện tại hỗ trợ `SHA256`, `HMACSHA512`.
		 *
		 * @en Security type code used to create checksum code. This code depends on the configuration of the merchant and the version of the api used.
		 * The current version supports `SHA256`, `HMACSHA512`.
		 * @example HMACSHA512
		 */
		vnp_SecureHashType?: string;
		/**
		 * Mã kiểm tra (checksum) để đảm bảo dữ liệu của giao dịch không bị thay đổi trong quá trình chuyển từ merchant sang VNPAY.
		 * Việc tạo ra mã này phụ thuộc vào cấu hình của merchant và phiên bản api sử dụng. Phiên bản hiện tại hỗ trợ `SHA256`, `HMACSHA512`.
		 *
		 * @en Checksum to ensure that the transaction data is not changed during the transfer from merchant to VNPAY.
		 * The creation of this code depends on the configuration of the merchant and the version of the api used. The current version supports `SHA256`, `HMACSHA512`.
		 *
		 */
		vnp_SecureHash?: string;
	}

	export interface IVerifyIPNRequest extends IVNPayVerifyIPNRequest {
		shop_id: (number & tags.Type<'uint64'>) | TShopIdSiPos;
	}

	export type IBank = IVNPayBank;
}

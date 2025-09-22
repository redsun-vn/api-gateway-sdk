/* eslint-disable @typescript-eslint/no-namespace */
import type { VNPHashAlgorithm } from '../../enum';
import { tags } from 'typia';
import { BaseResponse } from '../common.type';

export namespace IVNPayQRCode {
	export interface IConfig {
		/**
		 * Được VNPAY cung cấp riêng cho từng đối tác đi kèm nó là private Key
		 * @en Provided by VNPay for each partner, it comes with private Key
		 * @example 'MERCHANT'
		 * length: max 100
		 */
		appId: string;

		/**
		 * Secret Key
		 * @example 'secret'
		 */
		secretKey: string;

		/**
		 * Tên viết tắt của Merchant
		 * @en Abbreviation of Merchant
		 * @example 'REDSUN'
		 * length: max 25
		 */
		merchantName: string;

		/**
		 * Mã dịch vụ QR. Giá trị mặc định là 03
		 * @en QR service code. Default value is 03
		 * @example '03'
		 */
		serviceCode?: string;

		/**
		 * Mã quốc gia
		 * @en Country code
		 * @default 'VN'
		 */
		countryCode?: string;

		/**
		 * Mã tiền tệ : Giá trị mặc định 704
		 * @en Currency code: Default value is 704
		 * @default '704'
		 */
		ccy?: string;

		/**
		 * Mã merchant
		 * @en Merchant code
		 * @example 'REDSUN'
		 */
		merchantCode: string;

		/**
		 * Mã đơn vị phát triển merchant: default : A000000775
		 * @en Merchant's development unit code: default : A000000775
		 * @example 'A000000775'
		 */
		masterMerCode?: string;

		/**
		 * Mã loại hình doanh nghiệp
		 * @en Merchant type
		 * @example '9999'
		 */
		merchantType: string;

		/**
		 * Mã điểm thu của merchant
		 * @en Merchant's collection point code
		 */
		terminalId: string;

		/**
		 * Mã dịch vụ QR. Giá trị mặc định 03
		 * @en QR service code. Default value is 03
		 * @example '03'
		 */
		payType?: string;

		/**
		 * Đường dẫn tới Host API của VNPay QRCode
		 * @en API host url of VNPay QRCode
		 * @default 'https://doitac-tran.vnpaytest.vn'
		 * @example 'https://doitac-tran.vnpaytest.vn'
		 */
		vnpayHost?: string;

		/**
		 * QRCode endpoint API của VNPay
		 * @en  QRCode endpoint of VNPay
		 * @default 'QRCreateAPIRestV2/rest/CreateQrcodeApi/createQrcode'
		 * @example 'QRCreateAPIRestV2/rest/CreateQrcodeApi/createQrcode'
		 */
		paymentEndpoint?: string;

		/**
		 * Khi được bật, chế độ test sẽ tự động ghi đè `vnpayHost` thành sandbox
		 * @en When using test mode, `vnpayHost` should be set to sandbox
		 * @default false
		 */
		testMode?: boolean;

		/**
		 * Thuật toán mã hóa
		 *
		 * @en Hash algorithm
		 * @default 'MD5'
		 */
		hashAlgorithm?: VNPHashAlgorithm;
	}

	export interface ICreate {
		/**
		 * Mã giao dịch tại hệ thống của merchant. Mã này phải là duy nhất.
		 * @en Transaction code at merchant system. This code must be unique.
		 * @example 'RS12345'
		 */
		billNumber: string;

		/**
		 * Số tiền thanh toán. Đã tự động tính toán theo đơn vị của VNPay. (100 lần số tiền của đơn hàng trong cơ sở dữ liệu của bạn)
		 * @en Amount of payment. Automatically calculated according to the unit of VNPay. (100 times the amount of the order in your database)
		 */
		amount: number;

		/**
		 * Thông tin mô tả nội dung thanh toán (Tiếng Việt, không dấu).
		 * @en Description of payment (Vietnamese, no accent)
		 * @example Thanh toan don hang 12345
		 */
		desc?: string;

		/**
		 * Thời gian hết hạn thanh toán, định dạng: yyMMddHHmm(Time zone GMT+7)
		 *
		 * @en Payment expiration time, format: yyMMddHHmm(Time zone GMT+7)
		 * @example 2408220836
		 * @example
		 * ```ts
		 *  import { dateFormat } from 'vnpay';
		 *
		 *  const tomorrow = new Date();
		 *  tomorrow.setDate(tomorrow.getDate() + 1);
		 *
		 *  // then
		 *  expDate: dateFormat(tomorrow),
		 * ```
		 */
		expDate: string;

		/**
		 * Mã khách hàng, dành cho payType 04
		 */
		consumerID?: string;

		/**
		 * Mã sản phẩm. Giá trị mặc định để empty
		 * @en Product code
		 * @default ''
		 */
		productId?: string;

		/**
		 * Mã đơn hàng, Mã GD. Required ( Dùng cho payType = 01)
		 * @en Order code, GD code. Required (Used for payType = 01)
		 * @default 'RS12345'
		 */
		txnId?: string;

		/**
		 * Tiền tip and fee. Giá trị mặc định để empty
		 * @en Tip and fee money. Default value is empty
		 * @default ''
		 */
		tipAndFee?: string;
	}

	export interface ICreatePublic extends ICreate {
		shop_id: number;
	}

	/**
	 * interface for request to VNPay QRCode API
	 * Merge `IConfig` and `ICreate` interface
	 */
	export interface IRequest extends IConfig, Omit<ICreate, 'shop_id'> {}

	export interface IRequestQRContent
		extends Omit<
				IConfig,
				| 'secretKey'
				| 'vnpayHost'
				| 'paymentEndpoint'
				| 'testMode'
				| 'hashAlgorithm'
			>,
			Omit<ICreate, 'shop_id'> {
		checksum: string;
	}

	export interface ICreateConfig extends IConfig {
		shop_id: number & tags.Type<'uint64'>;
		payment_method_id: number & tags.Type<'uint64'>;
	}

	export interface IUpdateConfig
		extends Omit<Partial<ICreateConfig>, 'shop_id'> {
		payment_method_id?: number & tags.Type<'uint64'>;
	}

	export interface IResponse extends BaseResponse, IConfig {
		shop_id: number | string | null;
		payment_method_id: number | string | null;
		merchantSecretKey: string | null;
	}

	export interface IResponseWithoutSecret extends Omit<IResponse, 'secretKey'> {
		shop_id: number | string | null;
		payment_method_id: number | string | null;
		merchantSecretKey: string | null;
	}

	export interface IServerResponse {
		code: string;
		message: string;
		data: string;
		url: string | null;
		checksum: string;
	}
	export interface IQRCodeResponse {
		content: string;
		message: string;
	}

	export interface IVerifyIPNRequest {
		shop_id: number | string;

		/**
		 * Mã Lỗi phần trừ tiền khách hàng
		 */
		code: string;

		/**
		 * Mô tả mã lỗi trừ tiền khách hàng
		 */
		message: string;

		/**
		 * Loại thanh toán 1: Thanh toán, 2: Đặt hàng
		 */
		msgType: string;

		/**
		 * Mã đơn hàng, Số hóa đơn trong QRCode, Payment code
		 */
		txnId: string;

		/**
		 * Số trace giao dịch : không được trùng nhau
		 */
		qrTrace: string;

		/**
		 * Mã ngân hàng thanh toán
		 */
		bankCode: string;

		/**
		 * Số tiền thanh toán
		 */
		amount: string;

		/**
		 * Thời hạn thanh toán
		 */
		payDate: string;

		/**
		 * Mã đơn vị phát triển merchant
		 */
		merchantCode: string;

		/**
		 * Mã điểm thu của merchant
		 */
		terminalId: string;

		/**
		 * Dữ liệu mã hóa MD5
		 */
		checksum: string;

		/**
		 * Điện thoại khách hàng
		 */
		mobile?: string;

		/**
		 * Số tài khoản
		 */
		accountNo?: string;

		/**
		 * Tên người nhận hàng. Tối đa không quá 255 ký tự
		 */
		name?: string;
		phone?: string;
		province_id?: string;
		district_id?: string;
		address?: string;
		email?: string;
		addData?: any;
	}

	export interface IWebhookIPNRequest
		extends Omit<IVerifyIPNRequest, 'shop_id'> {}

	/** 
	 * {
		"merchantCode":"88888888",
		"checkSum":"8417a925dfee935744c57cb3340030ef",
		"terminalID":"PSSTEST",
		"txnId":"SCSREWITSP",
		"payDate":"27/03/2024"
		}
	*/
	export interface IRequestValidTransaction {
		merchantCode: string;
		checkSum: string;
		terminalID: string;
		txnId: string;
		payDate: string;
	}

	/**
	 * {
    "code": "00",
    "message": "Giao dich thanh cong.",
    "masterMerchantCode": "A000000775",
    "merchantCode": "88888888",
    "terminalID": "PSSTEST",
    "billNumber": "SCSREWITSP",
    "txnId": "SCSREWITSP",
    "payDate": "27/03/2024 13:56:24",
    "qrTrace": "244395023",
    "bankCode": "VNPAYEWALLET",
    "debitAmount": "100000",
    "realAmount": "100000",
	 * "checkSum": "3F907FC92DE68728EBD11A826877628F"
	 * }
	 */
	export interface IResponseValidTransaction {
		code: string;
		message: string;
		masterMerchantCode: string;
		merchantCode: string;
		terminalID: string;
		billNumber: string;
		txnId: string;
		payDate: string;
		qrTrace: string;
		bankCode: string;
		debitAmount: string;
		realAmount: string;
		checkSum: string;
	}
}

/**
 * The response must to be sent to VNPAY after receiving the IPN request
 * @typedef {Object} IpnResponse
 * @property {string} code - Mã lỗi trả về - Bắt buộc - Max(20)
 * @property {string} message - Mô tả mã lỗi đính kèm – Bắt buộc - Max(100)
 * @property {any} [data] - Chi tiết lỗi – Không bắt buộc
 */
export type VNPAYQRCodeIpnResponse = {
	code: string;
	message: string;
	data?: any;
};

/**
 * @property {string} code: 00
 * @property {string} message: Confirm Success
 * @property {any} data: { txnId: 'SO111222333' }
 */
export const VNPAYQRCodeIpnSuccess: VNPAYQRCodeIpnResponse = {
	code: '00',
	message: 'Confirm Success',
};

/**
 * @property {string} code: 01
 * @property {string} message: Missing items in the order
 * @property {any} data: [
 *    {
 * productid: '100000', // Mã sản phẩm
 * qty: 1, // Số lượng còn trong kho
 * }
 * ]
 */
export const VNPAYQRCodeIpnMissingItems: VNPAYQRCodeIpnResponse = {
	code: '01',
	message: 'Missing items in the order',
	data: [],
};

/**
 * @property {string} code: 02
 * @property {string} message: All items in the order are out of stock
 */
export const VNPAYQRCodeIpnOutOfStock: VNPAYQRCodeIpnResponse = {
	code: '02',
	message: 'All items in the order are out of stock',
};

/**
 * @property {string} code: 03
 * @property {string} message: The order has been paid
 * @property {any} data: { txnId: 'SO111222333' }
 */
export const VNPAYQRCodeIpnOrderPaid: VNPAYQRCodeIpnResponse = {
	code: '03',
	message: 'The order has been paid',
};

/**
 * @property {string} code: 04
 * @property {string} message: Error creating order
 * @property {any} data: { txnId: 'SO111222333' }
 */
export const VNPAYQRCodeIpnErrorCreatingOrder: VNPAYQRCodeIpnResponse = {
	code: '04',
	message: 'Error creating order',
};

/**
 * @property {string} code: 05
 * @property {string} message: Order is being processed
 * @property {any} data: { txnId: 'SO111222333' }
 */
export const VNPAYQRCodeIpnOrderProcessing: VNPAYQRCodeIpnResponse = {
	code: '05',
	message: 'Order is being processed',
};

/**
 * @property {string} code: 06
 * @property {string} message: wrong authentication information
 * @property {any} data: { txnId: 'SO111222333' }
 */
export const VNPAYQRCodeIpnWrongAuthentication: VNPAYQRCodeIpnResponse = {
	code: '06',
	message: 'wrong authentication information',
};

/**
 * @property {string} code: 07
 * @property {string} message: Incorrect amount
 * @property {any} data: { amount: '120000' }
 */
export const VNPAYQRCodeIpnIncorrectAmount: VNPAYQRCodeIpnResponse = {
	code: '07',
	message: 'Incorrect amount',
};

/**
 * @property {string} code: 08
 * @property {string} message: Timeout transactions
 */
export const VNPAYQRCodeIpnTimeoutTransactions: VNPAYQRCodeIpnResponse = {
	code: '08',
	message: 'Timeout transactions',
};

/**
 * @property {string} code: 09
 * @property {string} message: QR code has expired
 */
export const VNPAYQRCodeIpnQrCodeExpired: VNPAYQRCodeIpnResponse = {
	code: '09',
	message: 'QR code has expired',
};

/**
 * @property {string} code: 10
 * @property {string} message: IP address is not allowed
 */
export const VNPAYQRCodeIpnIpAddressNotAllowed: VNPAYQRCodeIpnResponse = {
	code: '10',
	message: 'IP address is not allowed',
};

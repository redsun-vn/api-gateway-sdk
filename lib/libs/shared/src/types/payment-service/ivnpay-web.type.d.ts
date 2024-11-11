import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { VnpCardType } from '@redsun-vn/vnpay';
export type TShopIdSiPos = 'sipos';
export declare namespace IVNPayWebConfig {
    interface ICreate {
        shop_id: number & tags.Type<'uint64'>;
        payment_method_id: number & tags.Type<'uint64'>;
        tmnCode: string;
        secureSecret: string;
        testMode: boolean;
    }
    interface IUpdate {
        id: string;
        tmnCode?: string;
        secureSecret?: string;
        testMode?: boolean;
    }
    interface IResponse extends BaseResponse {
        shop_id: number | string | null;
        payment_method_id: number | string | null;
        tmnCode: string;
        secureSecret?: string;
        testMode: string;
        currency: string;
    }
    interface IResponseWithoutSecret extends BaseResponse {
        shop_id: number | string | null;
        payment_method_id: number | string | null;
        tmnCode: string;
        testMode: string;
        currency: string;
    }
}
export declare namespace IVNPayWeb {
    interface ICreatePaymentURL {
        shop_id: (number & tags.Type<'uint64'>) | TShopIdSiPos;
        payment_id: (number & tags.Type<'uint64'>) | (string & tags.Format<'uuid'>);
        ip_address: string & tags.Format<'ipv4'>;
        return_url: string & tags.Format<'url'>;
        order_info: string;
    }
    interface ICreatePublicPaymentURL {
        shop_id: number & tags.Type<'uint64'>;
        payment_id: (number & tags.Type<'uint64'>) | (string & tags.Format<'uuid'>);
        ip_address: string & tags.Format<'ipv4'>;
        return_url: string & tags.Format<'url'>;
        order_info: string;
    }
    interface IResponsePaymentURL {
        payment_url: string & tags.Format<'url'>;
    }
    interface IVerifyIPNRequest {
        shop_id: (number & tags.Type<'uint64'>) | TShopIdSiPos;
        vnp_OrderInfo: string;
        vnp_TxnRef: string;
        vnp_Amount: number | string;
        vnp_TmnCode?: string;
        vnp_BankCode?: string;
        vnp_BankTranNo?: string;
        vnp_CardType?: VnpCardType | string;
        vnp_PayDate?: number | string;
        vnp_TransactionNo?: number | string;
        vnp_ResponseCode: number | string;
        vnp_TransactionStatus?: number | string;
        vnp_SecureHashType?: string;
        vnp_SecureHash?: string;
    }
}

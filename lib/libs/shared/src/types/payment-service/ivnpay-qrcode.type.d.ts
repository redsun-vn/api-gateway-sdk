import type { VNPHashAlgorithm } from '../../enum';
import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export declare namespace IVNPayQRCode {
    interface IConfig {
        appId: string;
        secretKey: string;
        merchantName: string;
        serviceCode?: string;
        countryCode?: string;
        ccy?: string;
        merchantCode: string;
        masterMerCode?: string;
        merchantType: string;
        terminalId: string;
        payType?: string;
        vnpayHost?: string;
        paymentEndpoint?: string;
        testMode?: boolean;
        hashAlgorithm?: VNPHashAlgorithm;
    }
    interface ICreate {
        billNumber: string;
        amount: number;
        desc?: string;
        expDate: string;
        consumerID?: string;
        productId?: string;
        txnId?: string;
        tipAndFee?: string;
    }
    interface IRequest extends IConfig, Omit<ICreate, 'shop_id'> {
    }
    interface IRequestQRContent extends Omit<IConfig, 'secretKey' | 'vnpayHost' | 'paymentEndpoint' | 'testMode' | 'hashAlgorithm'>, Omit<ICreate, 'shop_id'> {
        checksum: string;
    }
    interface ICreateConfig extends IConfig {
        shop_id: number & tags.Type<'uint64'>;
        payment_method_id: number & tags.Type<'uint64'>;
    }
    interface IUpdateConfig extends Omit<Partial<ICreateConfig>, 'shop_id'> {
        payment_method_id?: number & tags.Type<'uint64'>;
    }
    interface IResponse extends BaseResponse, IConfig {
        shop_id: number | string | null;
        payment_method_id: number | string | null;
    }
    interface IResponseWithoutSecret extends Omit<IResponse, 'secretKey'> {
        shop_id: number | string | null;
        payment_method_id: number | string | null;
    }
    interface IServerResponse {
        code: string;
        message: string;
        data: string;
        url: string | null;
        checksum: string;
    }
    interface IVerifyIPNRequest {
        shop_id: number | string;
        code: string;
        message: string;
        msgType: string;
        txnId: string;
        qrTrace: string;
        bankCode: string;
        amount: string;
        payDate: string;
        merchantCode: string;
        terminalId: string;
        checksum: string;
        mobile?: string;
        accountNo?: string;
        name?: string;
        phone?: string;
        province_id?: string;
        district_id?: string;
        address?: string;
        email?: string;
        addData?: any;
    }
    interface IWebhookIPNRequest extends Omit<IVerifyIPNRequest, 'shop_id'> {
    }
    interface IRequestValidTransaction {
        merchantCode: string;
        checkSum: string;
        terminalID: string;
        txnId: string;
        payDate: string;
    }
    interface IResponseValidTransaction {
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
export type VNPAYQRCodeIpnResponse = {
    code: string;
    message: string;
    data?: any;
};
export declare const VNPAYQRCodeIpnSuccess: VNPAYQRCodeIpnResponse;
export declare const VNPAYQRCodeIpnMissingItems: VNPAYQRCodeIpnResponse;
export declare const VNPAYQRCodeIpnOutOfStock: VNPAYQRCodeIpnResponse;
export declare const VNPAYQRCodeIpnOrderPaid: VNPAYQRCodeIpnResponse;
export declare const VNPAYQRCodeIpnErrorCreatingOrder: VNPAYQRCodeIpnResponse;
export declare const VNPAYQRCodeIpnOrderProcessing: VNPAYQRCodeIpnResponse;
export declare const VNPAYQRCodeIpnWrongAuthentication: VNPAYQRCodeIpnResponse;
export declare const VNPAYQRCodeIpnIncorrectAmount: VNPAYQRCodeIpnResponse;
export declare const VNPAYQRCodeIpnTimeoutTransactions: VNPAYQRCodeIpnResponse;
export declare const VNPAYQRCodeIpnQrCodeExpired: VNPAYQRCodeIpnResponse;
export declare const VNPAYQRCodeIpnIpAddressNotAllowed: VNPAYQRCodeIpnResponse;

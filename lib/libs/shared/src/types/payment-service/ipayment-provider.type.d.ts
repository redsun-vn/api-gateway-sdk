import { tags } from 'typia';
export declare namespace IPaymentProvider {
    interface IVietQRCreate {
        paymentId: number & tags.Type<'uint64'>;
        bankId: string;
        addInfo: string;
        accountName: string;
        accountNumber: string;
    }
    interface IVietQRResponse {
        qrCode: string;
    }
}

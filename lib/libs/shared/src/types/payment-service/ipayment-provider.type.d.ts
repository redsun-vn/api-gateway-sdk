import { tags } from 'typia';
export declare namespace IPaymentProvider {
    interface IVietQRCreate {
        transactionId: number & tags.Type<'uint32'>;
        bankId: string;
        addInfo: string;
        accountName: string;
        accountNumber: string;
    }
    interface IVietQRResponse {
        qrCode: string;
    }
}

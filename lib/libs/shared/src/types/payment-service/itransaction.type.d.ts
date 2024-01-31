import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IPayment } from './ipayment.type';
import { IPaymentGateway } from './ipayment-gateway.type';
import { TransactionErrorCode, TransactionKind, TransactionStatus } from '../../enum';
export declare namespace ITransaction {
    interface ICreateTransaction {
        shop_id?: number & tags.Type<'uint32'>;
        payment_id: number & tags.Type<'uint32'>;
        payment_gateway_id?: number & tags.Type<'uint32'>;
        accountNumber?: string;
        currencyCode?: string;
        authorizationCode?: string;
        formattedGateway: string;
        gateway: string;
        errorCode?: TransactionErrorCode;
        status?: TransactionStatus;
        kind?: TransactionKind;
        authorizationExpiredAt?: string & tags.Format<'date-time'>;
        processedAt?: string & tags.Format<'date-time'>;
        amount: number;
        receiptJson?: unknown;
        payment?: IPayment.IPaymentResponse;
        paymentGateway?: IPaymentGateway.IPaymentGatewayResponse;
    }
    interface IUpdateTransaction {
        accountNumber?: string;
        currencyCode?: string;
        authorizationCode?: string;
        formattedGateway?: string;
        gateway?: string;
        errorCode?: TransactionErrorCode;
        status?: TransactionStatus;
        kind?: TransactionKind;
        authorizationExpiredAt?: string & tags.Format<'date-time'>;
        processedAt?: string & tags.Format<'date-time'>;
        amount?: number;
        receiptJson?: unknown;
    }
    interface ITransactionResponse extends BaseResponse {
        shop_id: number | string | null;
        payment_id?: number | string | null;
        payment_gateway_id?: number | string | null;
        accountNumber?: string | null;
        currencyCode?: string | null;
        authorizationCode?: string;
        formattedGateway: string;
        gateway: string;
        errorCode?: string;
        status: string;
        kind: string;
        authorizationExpiredAt?: string | null;
        processedAt?: string | null;
        amount: number | string;
        receiptJson?: unknown | null;
        payment?: IPayment.IPaymentResponse;
        paymentGateway?: IPaymentGateway.IPaymentGatewayResponse;
    }
}

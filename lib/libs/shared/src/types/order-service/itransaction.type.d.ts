import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export declare namespace ITransaction {
    interface ICreateTransaction {
        payment_id: number & tags.Type<'uint32'>;
        staff_id: number & tags.Type<'uint32'>;
        order_id: number & tags.Type<'uint32'>;
        parent_id?: number & tags.Type<'uint32'>;
        accountNumber: string;
        currencyCode: string;
        authorizationCode: string;
        formattedGateway: string;
        gateway: string;
        receiptJson: Record<string, unknown> | null;
        errorCode: string;
        status: string;
        kind: string;
        authorizationExpiresAt?: Date;
        processedAt?: Date;
        amount: number;
        userId?: string;
    }
    interface ICreateTransactionKafka extends ICreateTransaction {
        shop_id: number & tags.Type<'uint32'>;
    }
    interface IUpdateTransaction {
        formattedGateway?: string;
        gateway?: string;
        receiptJson?: Record<string, unknown> | null;
        errorCode?: string;
        status?: string;
        kind?: string;
        authorizationExpiresAt?: Date;
        processedAt?: Date;
        amount?: number;
        userId?: string;
    }
    interface IDetailTransactionResponse extends BaseResponse {
        shop_id: number | string | null;
        payment_id: number | string | null;
        staff_id: number | string | null;
        order_id: number | string | null;
        parent_id: number | string | null;
        accountNumber: string;
        currencyCode: string;
        authorizationCode: string;
        formattedGateway: string;
        gateway: string;
        receiptJson: Record<string, unknown> | null;
        errorCode: string;
        status: string;
        kind: string;
        authorizationExpiresAt: Date;
        processedAt: Date;
        amount: number;
    }
}

import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { ICheckout } from './icheckout.type';
import { IBankAccount } from './ibank-account.type';
import { PaymentStatus } from '../../enum';
export declare namespace IPayment {
    interface ICreatePayment {
        payment_method_id: number & tags.Type<'uint64'>;
        bank_account_id?: number & tags.Type<'uint64'>;
        target: string;
        target_id: number & tags.Type<'uint64'>;
        checkout_id: number & tags.Type<'uint64'>;
        uuid?: string;
        amount: number;
        taxAmount?: number;
        discountAmount?: number;
        amountIn?: number;
        amountOut?: number;
        amountRounding?: number;
        status?: PaymentStatus;
        code?: string;
        checkout?: ICheckout.ICheckoutResponse;
        bankAccount?: IBankAccount.IBankAccountResponse;
    }
    interface IUpdatePayment {
        bank_account_id?: number & tags.Type<'uint64'>;
        amount?: number;
        taxAmount?: number;
        discountAmount?: number;
        amountIn?: number;
        amountOut?: number;
        amountRounding?: number;
        status?: PaymentStatus;
    }
    interface IPaymentResponse extends BaseResponse {
        shop_id: number | string | null;
        partner_id: number | string | null;
        payment_method_id: number | string | null;
        bank_account_id?: number | string | null;
        target?: string | null;
        target_id?: number | string | null;
        checkout_id?: number | string | null;
        uuid?: string;
        amount: number | string;
        taxAmount: number | string;
        discountAmount: number | string;
        amountIn: number | string;
        amountOut: number | string;
        amountRounding: number | string;
        status: string;
        code: string;
        checkout?: ICheckout.ICheckoutResponse | null;
        bankAccount?: IBankAccount.IBankAccountResponse | null;
        qrCode?: string;
    }
}

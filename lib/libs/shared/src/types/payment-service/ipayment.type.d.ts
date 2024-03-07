import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { ICheckout } from './icheckout.type';
import { IBankAccount } from './ibank-account.type';
import { PaymentStatus } from '../../enum';
export declare namespace IPayment {
    interface ICreatePayment {
        shop_id?: number & tags.Type<'uint32'>;
        partner_id: (number & tags.Type<'uint32'>) | (string & tags.Format<'uuid'>);
        payment_method_id: number & tags.Type<'uint32'>;
        bank_account_id?: number & tags.Type<'uint32'>;
        order_id?: number & tags.Type<'uint32'>;
        checkout_id: number & tags.Type<'uint32'>;
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
        bank_account_id?: number & tags.Type<'uint32'>;
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
        order_id?: number | string | null;
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
    }
}

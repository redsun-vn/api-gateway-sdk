import { tags } from 'typia';
import { IBankAccount } from './ibank-account.type';
import { ICheckout } from './icheckout.type';
import { IPayment } from './ipayment.type';
import { BaseResponse } from '../common.type';
export declare namespace IPaymentLink {
    interface IPaymentLinkCreate {
        shop_id: number & tags.Type<'uint64'>;
        order_id: number & tags.Type<'uint64'>;
        bank_account_id?: number & tags.Type<'uint64'>;
        checkout_id: number & tags.Type<'uint64'>;
        payment_id: number & tags.Type<'uint64'>;
        expiredAt: string;
        type: string;
        content?: string;
    }
    interface IPaymentLinkUpdate {
        expiredAt?: string;
        bank_account_id?: number & tags.Type<'uint64'>;
    }
    interface IUpdatePaymentResponse {
        paymentCode: string;
    }
    interface IPaymentLinkResponse extends BaseResponse {
        shop_id: number | string;
        order_id: number | string;
        bank_account_id?: number | string | null;
        checkout_id: number | string;
        payment_id?: number | string | null;
        type?: string | null;
        content?: string | null;
        code: string;
        expiredAt?: string | null;
        checkout?: ICheckout.ICheckoutResponse;
        bankAccount?: IBankAccount.IBankAccountResponse;
        payment?: IPayment.IPaymentResponse;
    }
}

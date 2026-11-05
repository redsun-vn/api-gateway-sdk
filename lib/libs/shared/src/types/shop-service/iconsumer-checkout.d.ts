import { tags } from 'typia';
export declare namespace IConsumerCheckout {
    type Kind = 'package' | 'credit';
    type Lang = 'vi' | 'en';
    interface IVat {
        companyName: string & tags.MinLength<1> & tags.MaxLength<200>;
        taxCode: string & tags.MinLength<1> & tags.MaxLength<30>;
    }
    interface ICreateInput {
        kind: Kind;
        packageId?: number & tags.Type<'uint64'>;
        packageAdditionId?: number & tags.Type<'uint64'>;
        creditPackageId?: string & tags.MinLength<1> & tags.MaxLength<30>;
        voucherCode?: string & tags.MaxLength<64>;
        vat?: IVat;
        lang: Lang;
    }
    interface ICreateResponse {
        receiptId: number | string;
        paymentUrl: string;
        total: number;
    }
    type IRetryResponse = ICreateResponse;
    interface ITrialInput {
        packageId: number & tags.Type<'uint64'>;
    }
    interface ITrialResponse {
        trialEndsAt: string;
    }
    type PaymentState = 'pending' | 'expired' | 'paid' | 'failed' | 'review';
    interface IActivation {
        done: boolean;
        delayed?: boolean;
        subscriptionEndDate?: string | null;
        credits?: number;
        balance?: number;
    }
    interface IStatusResponse {
        receiptId: number | string;
        kind: Kind;
        itemName: string;
        total: number;
        receiptStatus: string;
        createdAt: string;
        paymentState: PaymentState;
        linkExpiresAt: string | null;
        orderExpired: boolean;
        activation: IActivation;
    }
    interface ICachedPayLink {
        paymentUrl: string;
        expiresAt: string;
        receiptId: string;
    }
    interface IVnpayLogRow {
        paymentId: number | string | null;
        errorCode: string | null;
        transactionStatus: string | null;
    }
}

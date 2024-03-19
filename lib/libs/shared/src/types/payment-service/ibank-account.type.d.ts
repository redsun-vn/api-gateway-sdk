import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export declare namespace IBankAccount {
    interface ICreateBankAccount {
        shop_id?: number & tags.Type<'uint64'>;
        qr_image_id?: number & tags.Type<'uint64'>;
        bankName: string;
        accountName: string;
        accountNumber: string;
        bankAddress?: string;
        bankCountry?: string;
        active?: boolean;
    }
    interface IUpdateBankAccount {
        qr_image_id?: number & tags.Type<'uint64'>;
        bankName?: string;
        accountName?: string;
        accountNumber?: string;
        bankAddress?: string;
        bankCountry?: string;
        active?: boolean;
    }
    interface IBankAccountResponse extends BaseResponse {
        shop_id: number | string | null;
        qr_image_id: number | string | null;
        bankName: string;
        accountName: string;
        accountNumber: string;
        bankAddress?: string | null;
        bankCountry?: string | null;
        active: boolean;
    }
}

import { BaseResponse } from '../common.type';
export declare namespace IWalletTransaction {
    interface IWallet {
        uuid: string;
    }
    interface IResponse extends BaseResponse {
        amount: string | number;
        transactionType: string;
        description?: string | null;
        wallet: IWallet;
    }
}

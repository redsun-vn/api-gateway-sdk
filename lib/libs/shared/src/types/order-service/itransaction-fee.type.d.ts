import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export declare namespace ITransactionFee {
    interface ICreateTransactionFee {
        transaction_id: number & tags.Type<'uint32'>;
        name: string;
        amount: number;
        flatFee: number;
        ratePercentage: number;
        taxAmount: number;
        flatFeeName?: string;
        rateName?: string;
        type: string;
        userId?: string;
    }
    interface ICreateTransactionFeeKafka extends ICreateTransactionFee {
        shop_id: number & tags.Type<'uint32'>;
    }
    interface IUpdateTransactionFee {
        name?: string;
        amount?: number;
        flatFee?: number;
        ratePercentage?: number;
        taxAmount?: number;
        flatFeeName?: string;
        rateName?: string;
        type?: string;
        userId?: string;
    }
    interface IDetailTransactionFeeResponse extends BaseResponse {
        shop_id: number | string | null;
        transaction_id: number | string | null;
        name: string;
        amount: number;
        flatFee: number;
        ratePercentage: number;
        taxAmount: number;
        flatFeeName: string;
        rateName: string;
        type: string;
    }
}

import { tags } from 'typia';
import { BaseResponse } from '../../common.type';
export declare namespace IInvoiceLineTax {
    interface IInput {
        id?: string;
        name?: string;
        code: string;
        rate: number;
        ratePercentage: number;
    }
    interface ICreate {
        invoice_line_id: number & tags.Type<'uint64'>;
        id?: string;
        name?: string;
        code: string;
        rate: number;
        ratePercentage: number;
    }
    interface IUpdate {
        id: string;
        name?: string;
        code?: string;
        rate?: number;
        ratePercentage?: number;
    }
    interface IResponse extends BaseResponse {
        invoice_line_id: number | string | null;
        name?: string;
        code: string;
        rate: number | string;
        ratePercentage: number | string;
    }
}

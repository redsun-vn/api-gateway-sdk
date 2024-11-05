import { tags } from 'typia';
import { BaseResponse } from '../../common.type';
import { PAYMENT_TERM_LINE_DELAY_TYPE, PAYMENT_TERM_LINE_VALUE_TYPE } from '../../../enum';
export declare namespace IPaymentTermLine {
    interface ICreateBase {
        value: PAYMENT_TERM_LINE_VALUE_TYPE;
        value_amount: number;
        delay_type: PAYMENT_TERM_LINE_DELAY_TYPE;
        delay_days: number;
    }
    interface ICreate extends ICreateBase {
        term_id: number & tags.Type<'uint64'>;
    }
    interface ICreateMultiple {
        lines: ICreateBase[];
    }
    type IUpdate = Partial<ICreateBase>;
    interface IResponse extends BaseResponse {
        term_id: number | string;
        value: PAYMENT_TERM_LINE_VALUE_TYPE;
        value_amount: number | string;
        delay_type: PAYMENT_TERM_LINE_DELAY_TYPE;
        delay_days: number | string;
    }
}

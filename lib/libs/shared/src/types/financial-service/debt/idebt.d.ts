import { tags } from 'typia';
import { BaseResponse } from '../../common.type';
import { DEBT_TYPE, DEBT_STATUS, DEBT_PAYMENT_STATUS, DEBT_SOURCE } from '../../../enum';
import { IPaymentTerm } from './ipayment-term';
export declare namespace IDebt {
    interface ICreate {
        branch_id?: number & tags.Type<'uint64'>;
        responsible_uuid?: (string & tags.Format<'uuid'>) | null;
        created_by_uuid: string & tags.Format<'uuid'>;
        partner_uuid: string & tags.Format<'uuid'>;
        source_id?: number & tags.Type<'uint64'>;
        source: DEBT_SOURCE;
        type: DEBT_TYPE;
        status?: DEBT_STATUS;
        debt_amount: number;
        amount?: number;
        debt_date?: string & tags.Format<'date-time'>;
        due_date: string & tags.Format<'date-time'>;
        payment_term_id?: (number & tags.Type<'uint64'>) | null;
        payment_method_id?: (number & tags.Type<'uint64'>) | null;
        invoice_id?: (number & tags.Type<'uint64'>) | null;
        sale_channel_id?: (number & tags.Type<'uint64'>) | null;
        payment_amount?: number;
        payment_status?: DEBT_PAYMENT_STATUS;
        payment_date?: string & tags.Format<'date-time'>;
        payment_note?: string;
        description?: string;
    }
    interface IUpdate extends Omit<Partial<ICreate>, 'created_by_uuid' | 'branch_id' | 'debt_date'> {
        updated_by_uuid?: string & tags.Format<'uuid'>;
        responsible_uuid?: string & tags.Format<'uuid'>;
    }
    interface IResponse extends BaseResponse {
        shop_id: number | string;
        branch_id: number | string | null;
        responsible_uuid: string | null;
        created_by_uuid: string | null;
        updated_by_uuid: string | null;
        partner_uuid: string | null;
        source_id: number | string | null;
        source: string | null;
        type: DEBT_TYPE;
        status: DEBT_STATUS;
        debt_amount: number | string;
        amount: number | string;
        debt_date: string | null;
        due_date: string | null;
        payment_term_id: number | string | null;
        payment_term?: IPaymentTerm.IResponse | null;
        payment_method_id: number | string | null;
        invoice_id: number | string | null;
        sale_channel_id: number | string | null;
        payment_amount: number | string | null;
        payment_status: DEBT_PAYMENT_STATUS;
        payment_date: string | null;
        payment_note: string | null;
        description: string | null;
        name: string | null;
        uuid: string | null;
    }
}

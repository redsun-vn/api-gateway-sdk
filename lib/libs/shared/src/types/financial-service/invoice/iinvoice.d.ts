import { tags } from 'typia';
import { BaseResponse } from '../../common.type';
import { IInvoiceLine } from './iinvoice-line';
import { INVOICE_PAYMENT_STATUS, INVOICE_TYPE, INVOICE_STATE } from '../../../enum';
import { IPaymentTerm } from '../debt/ipayment-term';
export declare namespace IInvoice {
    interface ICreate {
        uuid?: string & tags.Format<'uuid'>;
        state?: INVOICE_STATE;
        type?: INVOICE_TYPE;
        payment_status?: INVOICE_PAYMENT_STATUS;
        invoice_date?: string & tags.Format<'date-time'>;
        due_date?: string & tags.Format<'date-time'>;
        delivery_date?: string & tags.Format<'date-time'>;
        currency?: string;
        note?: string;
        partner_uuid?: string & tags.Format<'uuid'>;
        partner_shipping_uuid?: string & tags.Format<'uuid'>;
        payment_term_id?: number & tags.Type<'uint64'>;
        amount_untaxed?: number;
        amount_tax?: number;
        amount_total?: number;
        paid_amount?: number;
        source?: string;
        source_id?: string;
        attachment_ids?: string[];
        sale_channel_id?: number & tags.Type<'uint64'>;
        price_book_id?: number & tags.Type<'uint64'>;
        payment_method_id?: number & tags.Type<'uint64'>;
        created_by?: string & tags.Format<'uuid'>;
        responsible_by?: string & tags.Format<'uuid'>;
        lines?: IInvoiceLine.ICreate[];
    }
    interface IUpdate extends Omit<Partial<ICreate>, 'uuid' | 'lines' | 'created_by'> {
        updated_by?: string & tags.Format<'uuid'>;
        deleted_by?: string & tags.Format<'uuid'>;
        responsible_by?: string & tags.Format<'uuid'>;
    }
    interface IResponse extends BaseResponse {
        uuid: string;
        shop_id: number;
        name: string;
        state: string;
        type: string;
        payment_status: string;
        invoice_date: string | null;
        due_date: string | null;
        delivery_date: string | null;
        currency: string | null;
        note: string | null;
        partner_uuid: string | null;
        partner_shipping_uuid: string | null;
        payment_term_id: number | string | null;
        amount_untaxed: number | string | null;
        amount_tax: number | string | null;
        amount_total: number | string | null;
        paid_amount: number | string | null;
        source: string | null;
        source_id: string | null;
        attachment_ids: string[];
        sale_channel_id: number | string | null;
        price_book_id: number | string | null;
        payment_method_id: number | string | null;
        created_by: string | null;
        updated_by: string | null;
        deleted_by: string | null;
        responsible_by: string | null;
        lines: IInvoiceLine.IResponse[];
        payment_term: IPaymentTerm.IResponse | null;
    }
}

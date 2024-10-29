import { tags } from 'typia';
import { BaseResponse } from '../../common.type';
import { IInvoiceLineTax } from './iinvoice-line-tax';
export declare namespace IInvoiceLine {
    interface ICreate {
        uuid?: string & tags.Format<'uuid'>;
        label?: string;
        product_id?: number & tags.Type<'uint64'>;
        variant_id?: number & tags.Type<'uint64'>;
        uom_uom_id?: number & tags.Type<'uint64'>;
        quantity?: number;
        quantity_delivered?: number;
        price_unit?: number;
        price_subtotal?: number;
        price_total?: number;
        discount?: number;
        invoice_id: number & tags.Type<'uint64'>;
        taxes?: IInvoiceLineTax.ICreate[];
    }
    type IUpdate = Omit<Partial<ICreate>, 'uuid' | 'invoice_id'>;
    interface IResponse extends BaseResponse {
        uuid: string;
        label: string | null;
        product_id: number | string | null;
        variant_id: number | string | null;
        uom_uom_id: number | string | null;
        quantity: number | string;
        quantity_delivered: number | string;
        price_unit: number | string;
        price_subtotal: number | string;
        price_total: number | string;
        discount: number | string;
        invoice_id: number | string;
        taxes: IInvoiceLineTax.IResponse[];
    }
}

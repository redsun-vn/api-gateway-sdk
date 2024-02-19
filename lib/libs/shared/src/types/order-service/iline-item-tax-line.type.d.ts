import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export declare namespace ILineItemTaxLine {
    interface IInputLineItemTaxLine {
        id?: string;
        code: string;
        rate: number;
        ratePercentage: number;
    }
    interface ICreateLineItemTaxLine {
        shop_id?: number & tags.Type<'uint32'>;
        line_item_id: number & tags.Type<'uint32'>;
        name: string;
        code: string;
        rate: number;
        ratePercentage: number;
        userId?: string;
    }
    interface ICreateLineItemTaxLineKafka extends ICreateLineItemTaxLine {
        shop_id: number & tags.Type<'uint32'>;
    }
    interface IUpdateLineItemTaxLine {
        name?: string;
        code?: string;
        rate?: number;
        ratePercentage?: number;
        userId?: string;
    }
    interface IDetailLineItemTaxLineResponse extends BaseResponse {
        shop_id?: number | string | null;
        line_item_id?: number | string | null;
        name: string;
        code: string;
        rate: number | string;
        ratePercentage: number | string;
    }
}

import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export declare namespace ILineItemSelectionGroup {
    interface IInputLineItemSelectionGroup {
        id?: string;
        group_id: number & tags.Type<'uint64'>;
        selection_id: number & tags.Type<'uint64'>;
        name?: string;
        price: number;
    }
    interface ICreateLineItemSelectionGroup {
        shop_id?: number & tags.Type<'uint64'>;
        line_item_id: number & tags.Type<'uint64'>;
        group_id: number & tags.Type<'uint64'>;
        selection_id: number & tags.Type<'uint64'>;
        name?: string;
        price: number;
    }
    interface ICreateLineItemSelectionGroupKafka extends ICreateLineItemSelectionGroup {
        shop_id: number & tags.Type<'uint64'>;
    }
    interface IUpdateLineItemSelectionGroup {
        id?: string;
        group_id?: number & tags.Type<'uint64'>;
        selection_id?: number & tags.Type<'uint64'>;
        name?: string;
        price?: number;
    }
    interface IDetailLineItemSelectionGroupResponse extends BaseResponse {
        shop_id: number | string | null;
        line_item_id: number | string | null;
        group_id?: number | string | null;
        selection_id?: number | string | null;
        name?: string;
        price: number | string;
    }
}

import { tags } from 'typia';
export declare namespace ICustomField {
    type EntityTypeLiteral = 'lead' | 'opportunity';
    interface ICreateBody {
        entity_type: EntityTypeLiteral;
        key: string & tags.Pattern<'^[a-z][a-z0-9_]{1,40}$'>;
        label: string & tags.MinLength<1> & tags.MaxLength<255>;
        type: string;
        ref_to?: (string & tags.MinLength<1> & tags.MaxLength<64>) | null;
        options?: Record<string, unknown> | null;
        validation?: Record<string, unknown> | null;
        required_from_stage_order_index?: number | null;
        indexable?: boolean;
    }
    interface IUpdateBody {
        expected_updated_at: string;
        label?: string & tags.MinLength<1> & tags.MaxLength<255>;
        options?: Record<string, unknown> | null;
        validation?: Record<string, unknown> | null;
        required_from_stage_order_index?: number | null;
        indexable?: boolean;
    }
    interface IDeleteBody {
        expected_updated_at: string;
    }
    interface IFindAllQuery {
        entity_type?: EntityTypeLiteral;
        include_inactive?: boolean;
    }
    interface ICustomFieldResponse {
        id: number | string;
        shop_id: number | string;
        entity_type: string;
        key: string;
        label: string;
        type: string;
        ref_to: string | null;
        options: Record<string, unknown> | null;
        validation: Record<string, unknown> | null;
        required_from_stage_order_index: number | string | null;
        indexable: boolean;
        encrypt: boolean;
        active: boolean;
        updated_at: string;
    }
    interface IFindAllResponse {
        items: ICustomFieldResponse[];
    }
}

import { tags } from 'typia';
import { BaseResponse } from './common.type';
import { ConditionType } from '../enum';
import { ICollection } from './icollection';
export declare namespace ICondition {
    interface ICreateCondition {
        shop_id?: number & tags.Type<'uint32'>;
        referent_id: number & tags.Type<'uint32'>;
        collection_id: number & tags.Type<'uint32'>;
        referentType: ConditionType;
        value: string;
    }
    interface IUpdateCondition {
        referent_id?: number & tags.Type<'uint32'>;
        referentType?: ConditionType;
        value?: string;
    }
    interface IDetailConditionResponse extends BaseResponse {
        shop_id: string | number | null;
        referent_id: string | number | null;
        collection_id?: string | number | null;
        referentType: string;
        value: string;
        collection?: ICollection.IDetailCollectionResponse | null;
    }
    interface IDeleteCondition {
        id: string;
    }
}

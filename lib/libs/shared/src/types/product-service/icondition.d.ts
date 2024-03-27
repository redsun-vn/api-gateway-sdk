import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { ICollection } from './icollection';
import { ConditionType } from '../../enum';
export declare namespace ICondition {
    interface ICreateCondition {
        shop_id?: number & tags.Type<'uint64'>;
        referent_id: number & tags.Type<'uint64'>;
        collection_id: number & tags.Type<'uint64'>;
        referentType: ConditionType;
        value: string;
    }
    interface IUpdateCondition {
        referent_id?: number & tags.Type<'uint64'>;
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

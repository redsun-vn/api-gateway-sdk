/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { ICollection } from './icollection';
import { ConditionType } from '../../enum';

export namespace ICondition {
	export interface ICreateCondition {
		shop_id?: number & tags.Type<'uint64'>;
		referent_id: number & tags.Type<'uint64'>;
		collection_id: number & tags.Type<'uint64'>;
		referentType: ConditionType;
		value: string;
	}

	export interface IUpdateCondition {
		referent_id?: number & tags.Type<'uint64'>;
		referentType?: ConditionType;
		value?: string;
	}

	export interface IDetailConditionResponse extends BaseResponse {
		shop_id: string | number | null;
		referent_id: string | number | null;
		collection_id?: string | number | null;
		referentType: string;
		value: string;
		collection?: ICollection.IDetailCollectionResponse | null;
	}

	export interface IDeleteCondition {
		id: string;
	}
}

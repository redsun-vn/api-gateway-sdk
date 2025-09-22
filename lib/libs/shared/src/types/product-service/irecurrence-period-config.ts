/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { RecurrencePeriod } from '../../enum';

export namespace IRecurrencePeriodConfig {
	export interface ICreateDefault {
		shop_id: number & tags.Type<'uint32'>;
	}

	export interface IReqCreate {
		name: string;
		period: RecurrencePeriod;
		duration: number;
		active: boolean;
	}

	export interface ICreate extends IReqCreate {
		shop_id: number & tags.Type<'uint64'>;
	}

	export interface IUpdate {
		name?: string;
		period?: RecurrencePeriod;
		duration?: number;
		active?: boolean;
	}

	export interface IResponse extends BaseResponse {
		shop_id: number | string;
		name: string;
		period: RecurrencePeriod | string;
		duration: number | string;
		active: boolean;
	}
}

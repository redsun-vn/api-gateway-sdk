/* eslint-disable @typescript-eslint/no-namespace */
import { AdminBaseResponse as BaseResponse } from '../../common.type';
import { IUtmTag } from './iutm-tag';

export namespace IUtmCampaign {
	export interface ICreate {
		active?: boolean;
		title: string;
		description?: string;
		createdById?: number;
		tagIds?: number[] | null;
		companyId?: string;
	}
	export interface IUpdate extends Partial<ICreate> {
		updatedById?: number;
	}
	export interface IResponse extends BaseResponse {
		active: boolean;
		title: string;
		description?: string | null;
		slug: string;
		tags?: IUtmTag.IResponse[] | null;
	}
}

/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { BaseResponse } from '../common.type';

export namespace ICMSMenu {
	export interface ICreateItem {
		id?: string & tags.Format<'uuid'>;
		name: string;
		url: string;
		sequence: number;
		newWindow: boolean;
		parentUuid?: string & tags.Format<'uuid'>;
		isMegaMenu: boolean;
		megaMenuContent?: string | null;
		megaMenuClasses?: string | null;
	}

	export interface IItemResponse extends BaseResponse {
		id: string;
		name: string;
		url: string;
		sequence: number;
		newWindow: boolean;
		parentUuid?: string | null;
		isMegaMenu: boolean;
		megaMenuContent?: string | null;
		megaMenuClasses?: string | null;
	}

	export interface ICreateReq {
		name: string;
		website_uuid: string;
		menuClasses?: string | null;
		menuWrapId?: string | null;
		items?: ICreateItem[];
	}

	export interface ICreate extends ICreateReq {
		shop_id?: (number & tags.Type<'uint64'>) | null;
	}

	export interface IUpdateReq
		extends Omit<Partial<ICreate>, 'shop_id' | 'website_uuid'> {}

	export interface IUpdate extends IUpdateReq {
		id: string;
	}

	export interface IResponse extends BaseResponse {
		shop_id?: number | string | null;
		name: string;
		website_uuid: string;
		menuClasses?: string | null;
		menuWrapId?: string | null;
		items?: IItemResponse[] | null;
	}
}

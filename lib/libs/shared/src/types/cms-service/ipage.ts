/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { CMSBaseResponse, SEOBase } from '../common.type';
import { IWebsite } from './iwebsite';

export namespace ICMSPage {
	export interface ICreateReq extends SEOBase {
		isPublished: boolean;
		title: string;
		description?: string | null;
		content?: string | null;
		attachment_id?: number & tags.Type<'uint64'>;
		website_ids?: string[] | null;
		themeId?: string | null;
		isHome?: boolean;
		isIndex?: boolean;
		type?: string | null;
		template?: string | null;
	}

	export interface ICreate extends ICreateReq {
		shop_id?: (number & tags.Type<'uint64'>) | null;
		author_id?: number & tags.Type<'uint64'>;
		updated_by_id?: number & tags.Type<'uint64'>;
	}

	export interface IUpdateReq extends Partial<ICreateReq> {}

	export interface IUpdate extends IUpdateReq {
		id: string;
		updated_by_id?: number & tags.Type<'uint64'>;
	}

	export interface IResponse extends CMSBaseResponse {
		type?: string | null;
		themeId?: string | null;
		isHome?: boolean;
		template?: string | null;
		websites?: IWebsite.IResponse[] | null;
	}
}

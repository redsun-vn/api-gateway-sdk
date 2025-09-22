/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { CMSBaseResponse, SEOBase } from '../common.type';
import { ICMSCategory, ICMSTag } from './cms.icategory';
import { IWebsite } from './iwebsite';

export namespace ICMSPost {
	export interface ICreateReq extends SEOBase {
		title: string;
		description?: string | null;
		content?: string | null;
		attachment_id?: (number & tags.Type<'uint64'>) | null;
		category_ids?: number[] | string[] | null;
		tag_ids?: number[] | string[] | null;
		slug?: string;
		website_ids?: string[] | null;
		isIndex?: boolean;
		isPublished?: boolean;
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
		categories?: ICMSCategory.IResponse[] | null;
		tags?: ICMSTag.IResponse[] | null;
		websites?: IWebsite.IResponse[] | null;
	}
}

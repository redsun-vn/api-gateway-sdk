/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { SEOBaseResponse, SEOBase } from '../common.type';
import { IWebsite } from './iwebsite';
export namespace ICMSCategory {
	export interface ICreateReq extends SEOBase {
		name: string;
		isActive: boolean;
		description?: string | null;
		attachment_id?: number & tags.Type<'uint64'>;
		parent_uuid?: string | null;
		website_ids?: string[] | null;
	}

	export interface ICreate extends ICreateReq {
		shop_id?: (number & tags.Type<'uint64'>) | null;
	}

	export interface IUpdateReq extends Partial<ICreateReq> {}

	export interface IUpdate extends IUpdateReq {
		id: string;
	}

	export interface IResponse extends SEOBaseResponse {
		shop_id?: number | string | null;
		name: string;
		slug: string;
		isActive: boolean;
		description?: string | null;
		parent_uuid?: string | null;
		attachment_id?: number | string | null;
		websites?: IWebsite.IResponse[] | null;
		parent?: IResponse;
	}
}
export namespace ICMSTag {
	export interface ICreateReq extends SEOBase {
		name: string;
		isActive: boolean;
		description?: string | null;
		attachment_id?: number & tags.Type<'uint64'>;
		website_ids?: string[] | null;
	}

	export interface ICreate extends ICreateReq {
		shop_id?: (number & tags.Type<'uint64'>) | null;
	}

	export interface IUpdateReq extends Partial<ICreateReq> {}

	export interface IUpdate extends IUpdateReq {
		id: string;
	}

	export interface IResponse extends SEOBaseResponse {
		shop_id?: number | string | null;
		name: string;
		slug: string;
		isActive: boolean;
		description?: string | null;
		attachment_id?: number | string | null;
		websites?: IWebsite.IResponse[] | null;
	}
}

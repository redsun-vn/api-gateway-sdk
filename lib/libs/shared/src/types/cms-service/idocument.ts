/* eslint-disable @typescript-eslint/no-namespace */

import { tags } from 'typia';
import { BaseResponse, NoCodeComponentEntry } from '../common.type';

export namespace IDocument {
	export interface ICreateReq {
		websiteId?: string & tags.Format<'uuid'>;
		themeId?: string & tags.Format<'uuid'>;
		type?: string | null;
		target?: string; // page, post
		targetId?: string & tags.Format<'uuid'>;
		version?: number;
		entry: NoCodeComponentEntry;
	}

	export interface ICreate extends ICreateReq {
		shop_id?: (number & tags.Type<'uint64'>) | null;
	}

	export interface IUpdateReq extends Partial<ICreateReq> {}

	export interface IUpdate extends IUpdateReq {
		id: string;
	}

	export interface IResponse extends BaseResponse {
		shop_id?: number | string | null;
		websiteId?: string | null;
		themeId?: string | null;
		type?: string | null;
		target?: string | null; // page, post
		targetId?: string | null;
		version: number | string | null;
		entry: NoCodeComponentEntry;
	}
}

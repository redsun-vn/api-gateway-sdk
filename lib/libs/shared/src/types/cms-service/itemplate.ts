/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { BaseResponse, NoCodeComponentEntry } from '../common.type';

export namespace ITemplate {
	export interface ICreateReq {
		website_id?: string & tags.Format<'uuid'>;
		target?: string | null; // page, post
		target_id?: string & tags.Format<'uuid'>;
		label: string;
		entry: NoCodeComponentEntry;
		width?: number;
		widthAuto?: boolean;
		isUserDefined?: boolean;
		group?: string;
	}

	export interface ICreate extends ICreateReq {
		shop_id?: (number & tags.Type<'uint64'>) | null;
	}

	export interface IUpdateReq {
		label?: string;
		entry?: NoCodeComponentEntry;
		width?: number;
		widthAuto?: boolean;
		group?: string;
	}

	export interface IUpdate extends IUpdateReq {
		id: string;
	}

	export interface IResponse extends BaseResponse {
		shop_id?: number | string | null;
		website_id?: string | null;
		target?: string | null; // page, post
		target_id?: string | null;
		label: string;
		thumbnail?: string | null;
		thumbnailLabel?: string | null;
		isUserDefined: boolean;
		width?: number | string | null;
		widthAuto?: boolean | null;
		entry: NoCodeComponentEntry;
		group?: string | null;
	}
}

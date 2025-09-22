import { BaseResponse } from './common.type';

/* eslint-disable @typescript-eslint/no-namespace */
export namespace ICommentAttachment {
	export interface ICreate {
		attachment_id: number;
		comment_id: number;
	}
	export interface IUpdate extends Partial<ICreate> {}
	export interface ICommentAttachmentResponse extends BaseResponse {
		attachment_id: number | string;
		comment_id: number | string;
	}
}

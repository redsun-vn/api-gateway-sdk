import { BaseResponse } from './common.type';
import { ICommentAttachment } from './icomment.attachment';
import { ExecutionContext } from '@nestjs/common';

/* eslint-disable @typescript-eslint/no-namespace */
export namespace IComment {
	export interface ICreate {
		staff_id: number;
		object_id: number;
		appTitle: string;
		message: string;
		attributeToApp?: boolean;
		attributeToUser?: boolean;
		embed: string;
		objectBody?: Record<string, unknown>;
	}

	export interface ICreatePublic extends Partial<ICreate> {
		shop_id: number;
	}

	export interface ICreateLogAdmin extends IComment.ICreate {
		objectResponse?: Record<string, unknown>;
		objectTarget?: string;
		action?: string;
	}

	export interface IUpdate extends Partial<ICreate> {}
	export interface ICommentResponse extends BaseResponse {
		shop_id: string | number | null;
		staff_id: string | number;
		object_id: string | number;
		appTitle: string;
		message: string;
		attributeToApp: boolean;
		attributeToUser: boolean;
		embed: string | null;
		objectBody?: Record<string, unknown> | null;
		objectResponse?: Record<string, unknown> | null;
		action?: string | null;
		objectTarget?: string | null;
		commentAttachments?: null | ICommentAttachment.ICommentAttachmentResponse[];
	}

	export interface ILogAdminEvent {
		resData: any;
		context: ExecutionContext;
	}
}

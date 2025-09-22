/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { CustomDataType } from './common.type';

export namespace INotification {
	export interface ISubscriber {
		firstName?: string;
		lastName?: string;
		email?: string;
		phone?: string;
		avatar?: string;
		locale?: string;
		data?: CustomDataType;
	}
	export interface ICreateSubscriber {
		subscriberId: string & tags.Format<'uuid'>;
		data?: INotification.ISubscriber;
	}
	export interface ICreateSubscriberResponse {
		subscriberId: string & tags.Format<'uuid'>;
		firstName?: string;
		lastName?: string;
		email?: string;
		phone?: string;
	}
	export interface ITriggerPayloadOptions {
		workflowIdentifier: string;
		data: any;
	}
}

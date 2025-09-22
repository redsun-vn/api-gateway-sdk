import { tags } from 'typia';
import { BaseResponse } from '../../common.type';
/* eslint-disable @typescript-eslint/no-namespace */

export namespace IFollowUpLine {
	export interface ICreate {
		follow_up_level_id: number & tags.Type<'uint64'>;
		name: string;
		description?: string;
		delay: number;
		send_email: boolean;
		send_letter: boolean;
		send_sms: boolean;
		manual_action: boolean;
		automatic: boolean;
	}

	export interface IUpdate
		extends Omit<Partial<ICreate>, 'follow_up_level_id'> {}

	export interface IResponse extends BaseResponse {
		name: string;
		description: string | null;
		delay: number | string;
		send_email: boolean;
		send_letter: boolean;
		send_sms: boolean;
		manual_action: boolean;
		automatic: boolean;
	}
}

export namespace IFollowUpLevel {
	export interface IResponse extends BaseResponse {
		shop_id: number | string;
		lines: IFollowUpLine.IResponse[];
	}
}

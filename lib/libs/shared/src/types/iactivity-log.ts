/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { BaseResponse, CustomDataType } from './common.type';
import { ExecutionContext } from '@nestjs/common';
import { IStaff } from './istaff';

export namespace IActivityLog {
	export enum ACTION {
		CREATE = 'CREATE',
		UPDATE = 'UPDATE',
		DELETE = 'DELETE',
		NONE = 'NONE',
	}
	export interface ICreateActivityLog {
		shop_id?: number & tags.Type<'uint64'>;
		branch_id?: number & tags.Type<'uint64'>;
		staff_id: number & tags.Type<'uint64'>;
		device_code: string;
		ip?: string; // & tags.Pattern<'\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b'>
		message?: string;
		objectTarget: string;
		objectId: number & tags.Type<'uint64'>;
		objectBody: Record<string, unknown>;
		objectResponse: Record<string, unknown>;
		embed?: string;
		action: ACTION;
	}

	export interface IActivityLogResponse extends BaseResponse {
		shop_id: number | string | null;
		branch_id?: number | string | null;
		staff_id: number | string | null;
		device_code: string;
		ip?: string; // & tags.Pattern<'\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b'>
		message?: string;
		title?: string;
		objectTarget: string;
		objectId: number | string | null;
		objectBody: Record<string, unknown>;
		objectResponse: Record<string, unknown>;
		staff?: IStaff.IStaffResponse | null;
		embed?: string | null;
		action: string;
	}

	export interface IActivityOnEvent {
		resData: CustomDataType | boolean;
		context: ExecutionContext;
	}

	export interface IQueryLatestActivity {
		shopIds: string;
	}

	export interface ILatestActivity {
		shop_id: string | number;
		latest_time: string;
	}
}

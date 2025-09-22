/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { ISelection } from './iselection';

export namespace ISelectionGroup {
	export interface IReqCreateSelectionGroup {
		image_id?: number & tags.Type<'uint64'>;
		name: string;
		active?: boolean;
		icon?: string | null;
		userId?: string;
		sequence?: number;
	}

	export interface ICreateSelectionGroup extends IReqCreateSelectionGroup {
		shop_id: number & tags.Type<'uint64'>;
	}

	export interface IUpdateSelectionGroup {
		id?: string;
		image_id?: number & tags.Type<'uint64'>;
		name?: string;
		active?: boolean;
		icon?: string | null | undefined;
		userId?: string;
		sequence?: number;
	}

	export interface ISelectionGroupResponse extends BaseResponse {
		shop_id: number | string | null;
		image_id?: number | string | null;
		name: string;
		active: boolean;
		icon?: string | null;
		createdBy: string | undefined | null;
		updatedBy: string | undefined | null;
		sequence?: number | string | null;
		selections?: ISelection.ISelectionResponse[] | null;
	}

	export interface IDeleteSelectionGroup {
		id: string;
	}
}

/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { ISelectionGroup } from './iselection-group';

export namespace ISelection {
	export interface IReqCreateSelection {
		image_id?: number & tags.Type<'uint64'>;
		selection_group_id: number & tags.Type<'uint64'>;
		name: string;
		active?: boolean;
		icon?: string | null;
		price?: number | null;
		originPrice?: number | null;
		userId?: string;
	}

	export interface ICreateSelection extends IReqCreateSelection {
		shop_id: number & tags.Type<'uint64'>;
	}

	export interface IUpdateSelection {
		id?: string;
		image_id?: number & tags.Type<'uint64'>;
		name?: string;
		active?: boolean;
		icon?: string | null;
		price?: number | null;
		originPrice?: number | null;
		userId?: string;
	}

	export interface ISelectionResponse extends BaseResponse {
		shop_id: number | string | null;
		image_id?: number | string | null;
		selection_group_id?: number | string | null;
		name: string;
		active: boolean;
		icon?: string | null;
		price?: number | string | null;
		originPrice?: number | string | null;
		createdBy?: string | null;
		updatedBy?: string | null;
		selectionGroup?: ISelectionGroup.ISelectionGroupResponse | null;
	}
	export interface IDeleteSelection {
		id: string;
	}
}

/* eslint-disable @typescript-eslint/no-namespace */

import { tags } from 'typia';
import { BaseResponse } from '../common.type';

export namespace IGroupWarehouse {
	export interface ICreateGroupWarehouse {
		shop_id?: number & tags.Type<'uint64'>;
		name: string;
		country: string;
		city: string;
		fulfillable: boolean;
		stockable: boolean;
		lotable: boolean;
	}

	export interface IUpdateGroupWarehouse {
		name?: string;
		country?: string;
		city?: string;
		fulfillable?: boolean;
		stockable?: boolean;
		lotable?: boolean;
	}

	export interface IGroupWarehouseResponse extends BaseResponse {
		shop_id: number | string | null;
		name: string;
		country: string;
		city: string;
		fulfillable?: boolean;
		stockable?: boolean;
		lotable?: boolean;
	}
}

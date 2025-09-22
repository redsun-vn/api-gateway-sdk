/* eslint-disable @typescript-eslint/no-namespace */

import { BaseResponse } from './common.type';
import {
	PACKAGE_ADDITION_TYPE_ENUM,
	PACKAGE_ADDITION_TARGET_ENUM,
} from '../enum/shop-service';

export namespace IPackageAddition {
	export interface ICreate {
		name: string;
		active?: boolean;
		description?: string;
		sellPrice?: number;
		price: number;
		isDefault?: boolean;
		type: string & PACKAGE_ADDITION_TYPE_ENUM;
		target: string & PACKAGE_ADDITION_TARGET_ENUM;
		value: number;
		freeValue?: number;
		freePrice?: number;
		freeUnit?: string & PACKAGE_ADDITION_TARGET_ENUM;
	}

	export interface IUpdate extends Partial<ICreate> {}

	export interface IResponse extends BaseResponse {
		name: string;
		active: boolean;
		description?: string | null;
		price: number | string;
		sellPrice?: number | string;
		isDefault?: boolean;
		type: (string & PACKAGE_ADDITION_TYPE_ENUM) | null;
		target: (string & PACKAGE_ADDITION_TARGET_ENUM) | null;
		value: number;
		freeValue?: number | null;
		freePrice?: number | string | null;
		freeUnit?: (string & PACKAGE_ADDITION_TARGET_ENUM) | null;
	}
}

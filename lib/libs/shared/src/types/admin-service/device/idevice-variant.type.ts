/* eslint-disable @typescript-eslint/no-namespace */
import { AdminBaseResponse as BaseResponse } from '../../common.type';
import { IAdminDevice } from './idevice.type';
import { IAdminWarehouse } from './iwarehouse.type';

export namespace IDeviceVariant {
	export interface ICreate {
		image_id?: number;
		device_id?: number;
		barcode?: string;
		name: string;
		active?: boolean;
		bio?: string;
		icon?: string;
		price: number;
		sellPrice: number;
		variantWarehouses?: IWDeviceVariantCreate[];
		companyId?: string;
	}
	export interface IWDeviceVariantCreate {
		warehouse_id: number;
		quantity: number;
	}

	export interface IUpdate
		extends Omit<Partial<ICreate>, 'variantWarehouses'> {}

	export interface IResponse extends BaseResponse {
		name: string;
		description?: string | null;
		barcode?: string | null;
		bio?: string | null;
		icon?: string | null;
		image_id?: number | string | null;
		device_id: number | string;
		price: number | string;
		sellPrice: number | string;
		active: boolean;
		totalQuantity: number;
		deviceWarehouses?: IWDeviceVariant[];
	}

	export interface IWDeviceVariant {
		device_variant_id: number | string;
		warehouse_id: number | string;
		quantity: number;
		warehouse?: IAdminWarehouse.IResponse | null;
		device?: IAdminDevice.IResponse | null;
	}
}

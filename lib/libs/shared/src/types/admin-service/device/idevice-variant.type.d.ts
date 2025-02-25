import { BaseResponse } from '../../common.type';
import { IDevice } from './idevice.type';
import { IAdminWarehouse } from './iwarehouse.type';
export declare namespace IDeviceVariant {
    interface ICreate {
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
    }
    interface IWDeviceVariantCreate {
        warehouse_id: number;
        quantity: number;
    }
    interface IUpdate extends Omit<Partial<ICreate>, 'variantWarehouses'> {
    }
    interface IResponse extends BaseResponse {
        name: string;
        description?: string | null;
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
    interface IWDeviceVariant {
        device_variant_id: number | string;
        warehouse_id: number | string;
        quantity: number;
        warehouse?: IAdminWarehouse.IResponse | null;
        device?: IDevice.IResponse | null;
    }
}

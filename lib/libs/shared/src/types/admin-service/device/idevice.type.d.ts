import { AdminBaseResponse as BaseResponse } from '../../common.type';
import { IDeviceCategory } from './idevice-category.type';
import { IDeviceVariant } from './idevice-variant.type';
export declare namespace IAdminDevice {
    interface ICreate {
        name?: string;
        barcode?: string;
        serialNumber?: string;
        description?: string;
        active?: boolean;
        icon?: string;
        category_id: number | string;
        deviceVariants: IDeviceVariant.ICreate[];
        companyId?: string;
    }
    interface IUpdate extends Omit<Partial<ICreate>, 'deviceVariants'> {
    }
    interface IResponse extends BaseResponse {
        name: string;
        barcode?: string | null;
        serialNumber?: string | null;
        description?: string | null;
        active?: boolean;
        icon?: string | null;
        category?: IDeviceCategory.IResponse;
        deviceVariants?: IDeviceVariant.IResponse[];
    }
}

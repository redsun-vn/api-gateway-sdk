import { RESOURCE_ADDON_TYPE_ENUM } from '../enum';
import { BaseResponse } from './common.type';
export declare namespace IResourceAddon {
    interface ICreate {
        name: string;
        description?: string;
        type: RESOURCE_ADDON_TYPE_ENUM;
        value: number;
        unit: string;
        price: number;
        sellPrice?: number;
        billingCycle?: string;
        sortOrder?: number;
        metadata?: Record<string, any>;
    }
    interface IUpdate {
        name?: string;
        description?: string;
        active?: boolean;
        type?: RESOURCE_ADDON_TYPE_ENUM;
        value?: number;
        unit?: string;
        price?: number;
        sellPrice?: number;
        billingCycle?: string;
        sortOrder?: number;
        metadata?: Record<string, any>;
    }
    interface IResponse extends BaseResponse {
        name: string;
        description?: string;
        active: boolean;
        type: RESOURCE_ADDON_TYPE_ENUM;
        value: number;
        unit: string;
        price: number | string;
        sellPrice: number | string | null;
        billingCycle: string;
        sortOrder: number;
        metadata?: Record<string, any> | null;
    }
    interface IFindAll {
        type?: RESOURCE_ADDON_TYPE_ENUM;
        active?: boolean;
    }
}

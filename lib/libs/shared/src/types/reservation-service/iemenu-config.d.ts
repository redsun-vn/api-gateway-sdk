import { BaseResponse } from '../common.type';
export declare namespace IEMenuConfig {
    interface ICreate {
        shop_id: number;
        name: string;
        active: boolean;
        use_pricelist: boolean;
        pricelist_id?: number;
        available_collections_ids?: string[];
        logo_id?: number | string;
        banner_id?: number | string;
        welcome_text?: string;
        qr_wifi_name?: string;
        qr_wifi_password?: string;
        qr_desc?: string;
        available_payment_method_ids?: string[];
    }
    type IUpdate = Partial<ICreate>;
    interface IResponse extends BaseResponse {
        shop_id: number | string;
        name: string | null;
        uuid?: string | null;
        active: boolean;
        currencyCode: string;
        use_pricelist: boolean;
        pricelist_id?: number | string | null;
        available_collections_ids?: string[];
        logo_id?: number | string | null;
        banner_id?: number | string | null;
        welcome_text?: string | null;
        qr_wifi_name?: string | null;
        qr_wifi_password?: string | null;
        qr_desc?: string | null;
        available_payment_method_ids?: string[];
    }
}

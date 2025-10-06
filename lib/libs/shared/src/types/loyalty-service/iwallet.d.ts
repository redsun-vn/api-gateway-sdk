import { BaseResponse } from '../common.type';
export declare namespace IWallet {
    interface ICreateFromAdminShop {
        active?: boolean;
        partner_id: string;
    }
    interface ICreateFromPOSShop {
        otp: string;
        partner_id: string;
    }
    interface IUpdate {
        active?: boolean;
    }
    interface ISendOTP {
        partner_id: string;
        action: string;
    }
    interface IPartner {
        display_name?: string;
    }
    interface IResponse extends BaseResponse {
        active?: boolean | null;
        shop_id?: string | number | null;
        totalAmount: string | number | null;
        uuid: string;
        partner: IPartner;
        partner_id: string;
    }
}

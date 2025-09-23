import { BaseResponse } from '../common.type';
export declare namespace IWallet {
    interface ICreate {
        partner_id: string;
        active?: boolean;
    }
    interface ICreateFromAdminShop extends ICreate {
    }
    interface ICreateFromPOSShop extends ICreate {
        otp: string;
    }
    interface IUpdate {
        active?: boolean;
    }
    interface ISendOTP {
        partner_id: string;
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
    }
}

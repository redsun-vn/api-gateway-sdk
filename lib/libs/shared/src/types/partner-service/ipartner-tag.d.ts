import { BaseResponse } from '../common.type';
export declare namespace IPartnerTag {
    interface ICreate {
        name: string;
        partnerIds?: string[];
    }
    type IUpdate = Partial<ICreate>;
    interface IPartnerTagResponse extends BaseResponse {
        name: string;
        shop_id: number | string;
    }
}

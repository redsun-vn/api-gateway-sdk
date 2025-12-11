import { OMNI_CHANNEL_PROVIDER_ENUM } from '../../enum/omnichannel-service';
import { BaseResponse } from '../common.type';
export declare namespace IOmnichannel {
    interface IResponse extends BaseResponse {
        shop_id: string | number | null;
        provider_shop_id: string;
        provider_shop_name: string;
        provider: OMNI_CHANNEL_PROVIDER_ENUM;
        tokenExpiresAt: string;
    }
    interface IGetShopInfo {
        providerShopId: string;
        provider: string;
    }
    interface IRefreshTokenForProvider {
        providerShopId: string;
        provider: string;
    }
    interface IGetShopConfigs {
        provider: string;
    }
    interface IUpdate {
        [key: string]: any;
    }
}

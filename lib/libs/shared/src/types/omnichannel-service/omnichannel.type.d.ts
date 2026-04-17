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
    interface IAuthorizeToken {
        code: string;
        provider: OMNI_CHANNEL_PROVIDER_ENUM;
    }
    type ProviderType = 'shopee_shop' | 'tiktok_shop' | 'amazon' | 'lazada' | 'facebook_shop';
    interface AuthorizeProviderDto {
        provider: ProviderType;
        authCode: string;
    }
    interface RefreshTokenDto {
        provider: ProviderType;
        providerShopId: string;
    }
    interface UpdateStockDto {
        provider: ProviderType;
        itemId: string;
        stock: number;
    }
    interface SyncOrdersDto {
        shopId: number;
        provider: ProviderType;
        fromDate?: string;
        toDate?: string;
    }
    interface SyncProductsDtoOpts {
        provider: string;
        pageSize?: number;
    }
    interface TriggerSyncDto {
        shopId: number;
        provider: ProviderType;
    }
    interface MappingBulkCreateDto {
        mappingIds: number[];
    }
    interface MappingListQuery {
        provider?: string;
        status?: string;
        providerOrderId?: string;
        fromDate?: string;
        toDate?: string;
        page?: number;
        limit?: number;
        unmapped?: boolean;
    }
}

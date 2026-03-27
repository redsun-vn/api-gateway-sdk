export type ProviderType = 'shopee_shop' | 'tiktok' | 'amazon' | 'lazada' | 'facebook_shop';
export interface AuthorizeProviderDto {
    provider: ProviderType;
    authCode: string;
}
export interface RefreshTokenDto {
    provider: ProviderType;
    providerShopId: string;
}
export interface UpdateStockDto {
    provider: ProviderType;
    itemId: string;
    stock: number;
}
export interface SyncOrdersDto {
    shopId: number;
    provider: ProviderType;
    fromDate?: string;
    toDate?: string;
}
export interface TriggerSyncDto {
    shopId: number;
    provider: ProviderType;
}

export * from './omnichannel-shop-config.type';
export * from './omnichannel.type';
export * from './itiktok-shop.type';
export interface IAuthorizeToken {
    provider: string;
    code: string;
    shopId?: string;
    redirectUri?: string;
}
export interface IRefreshTokenForProvider {
    provider: string;
    refreshToken?: string;
    configId?: number;
}
export interface IGetShopInfo {
    provider: string;
    configId?: number;
}
export interface IUpdate {
    isActive?: boolean;
    shopName?: string;
    accessToken?: string;
    refreshToken?: string;
}

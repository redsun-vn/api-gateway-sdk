export declare namespace ISmsConfig {
    type Provider = 'worldsms' | 'incom';
    type TemplateKey = 'OTP' | 'CAMPAIGN_GENERIC';
    type SendSource = 'otp' | 'brand-notification' | 'campaign' | 'shop-business' | 'test-shop' | 'test-admin';
    interface ITemplate {
        id: string;
        key: TemplateKey;
        code?: string | null;
        content?: string | null;
        params?: string[] | null;
        is_sensitive?: boolean;
    }
    interface IWorldsmsCredentials {
        token: string;
    }
    interface IIncomCredentials {
        username: string;
        password: string;
    }
    type ICredentials = IWorldsmsCredentials | IIncomCredentials;
    interface IShopCreateRequest {
        provider: Provider;
        credentials: ICredentials;
        sender_brandname?: string | null;
        templates?: ITemplate[];
    }
    interface IUpdateRequest {
        credentials?: ICredentials;
        sender_brandname?: string | null;
        templates?: ITemplate[];
    }
    interface IAdminCreateRequest extends IShopCreateRequest {
        brand: string;
    }
    interface IConfigResponse {
        id: number;
        brand: string;
        shop_id: number | null;
        provider: Provider | string;
        sender_brandname: string | null;
        is_active: boolean;
        has_credentials: boolean;
        templates: ITemplate[];
        last_test_ok_at: string | null;
        created_at?: string | null;
        updated_at?: string | null;
    }
    interface ITestSendRequest {
        template_key: TemplateKey;
        template_id?: string;
        phone: string;
        params?: Record<string, string>;
    }
    interface ITestSendResponse {
        ok: boolean;
        provider_message_id?: string | null;
        error_code?: string | null;
        error_message?: string | null;
    }
    interface IHistoryQuery {
        status?: string;
        limit?: number;
        offset?: number;
    }
    interface IAdminHistoryQuery extends IHistoryQuery {
        brand: string;
        shop_id?: number;
    }
    interface IHistoryItem {
        id: number;
        brand: string;
        shop_id: number | null;
        provider: string;
        phone: string;
        template_key: string;
        template_code: string | null;
        status: string;
        provider_message_id: string | null;
        error_code: string | null;
        error_message: string | null;
        created_at?: string | null;
    }
    interface IHistoryResponse {
        items: IHistoryItem[];
        total: number;
    }
    interface IAdminLisConfigQuery {
        brand: string;
    }
    interface IDeleteResponse {
        deleted: boolean;
    }
}

import { tags } from 'typia';
import { AIContentIndustry, AIContentType, AIContentTone, AIImageContentType, AIImageStyle, AIImageQuality, AIImageProvider, AIImageRenderingSpeed, AIImageIdeogramStyleType, AIImageOperation } from '../../enum';
export interface IAiPaginationMeta {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
}
export interface IAiPaginationResult<T> {
    items: T[];
    meta: IAiPaginationMeta;
}
export declare namespace IAiContent {
    interface IGenerateRequest {
        content_type: AIContentType;
        tone: AIContentTone;
        industry?: AIContentIndustry;
        name?: string;
        category?: string;
        features?: string[];
        keywords?: string[];
        usp?: string;
        description?: string;
        target_audience?: string;
        custom_prompt?: string;
        product_id?: number;
        product_name?: string;
        industry_context?: Record<string, any>;
        topic?: string;
        review_text?: string;
        review_rating?: number;
        brand_voice_id?: number;
        language?: string;
    }
    interface IEstimateRequest {
        content_type: AIContentType;
        product_id?: number;
        language?: string;
    }
    interface IKeywordSuggestRequest {
        product_name: string;
        category?: string;
        features?: string[];
        language?: string;
    }
    interface IBatchGenerateRequest {
        brand_voice_id?: number;
        items: IBatchItem[];
    }
    interface IBatchItem {
        content_type: AIContentType;
        tone: AIContentTone;
        name?: string;
        category?: string;
        features?: string[];
        keywords?: string[];
        industry_context?: Record<string, any>;
        brand_voice_id?: number;
        language?: string;
    }
    interface IBlogGenerateRequest {
        content_type: AIContentType;
        tone: AIContentTone;
        topic?: string;
        name?: string;
        keywords?: string[];
        custom_prompt?: string;
        brand_voice_id?: number;
        language?: string;
    }
    interface IBlogEstimateRequest {
        content_type: AIContentType;
        language?: string;
    }
    interface IBrandVoiceUpsertRequest {
        is_default?: boolean;
        brand_name?: string;
        approved_phrases?: string[];
        forbidden_words?: string[];
        reading_level?: string;
        custom_instructions?: string;
        default_tone?: string;
        industry?: string;
    }
    interface IHistoryQuery {
        page?: number;
        limit?: number;
        content_type?: string;
        status?: string;
        from_date?: string;
        to_date?: string;
    }
    interface ISearchHistoryQuery {
        query: string;
        page?: number;
        limit?: number;
    }
    interface IJobCreatedResponse {
        jobId: number | string;
    }
    interface ISuccessResponse {
        success: boolean;
    }
    interface IKeywordSuggestResponse {
        keywords: string[];
    }
    interface IEstimateResponse {
        credits: number;
        tokens: number;
    }
    interface IBlogEstimateResponse {
        credits: number;
        tokens: number;
    }
    interface IJobStatusResponse {
        jobId: number | string;
        shopId: number | string;
        status: string;
        progress?: number;
        result?: {
            content: any;
            tokens: number | string;
            credits: number | string;
        };
        error?: string;
        updatedAt: number;
    }
    interface IBatchGenerateResponse {
        jobIds: number | string[];
    }
    interface IContentJob {
        id?: number | string;
        shop_id?: number | string;
        product_id?: number | string | null;
        product_name?: string | null;
        content_type?: string;
        tone?: string | null;
        status?: string;
        input_data?: Record<string, any> | null;
        output_data?: Record<string, any> | null;
        tokens_used?: number | string | null;
        credit_cost?: number | string | null;
        error_message?: string | null;
        user_id?: string | null;
        estimated_credits?: number | string | null;
        industry?: string | null;
        createdAt?: Date | string;
        updatedAt?: Date | string;
    }
    interface IBrandVoice {
        id: number | string;
        shop_id: number | string;
        is_default: boolean;
        brand_name: string | null;
        approved_phrases: string[] | null;
        forbidden_words: string[] | null;
        reading_level: string;
        custom_instructions: string | null;
        default_tone: string | null;
        industry: string | null;
        createdAt: Date | string;
        updatedAt: Date | string;
    }
}
export declare namespace IAiCredit {
    interface ITopUpRequest {
        amount_cents: number;
        reason: string;
        metadata?: Record<string, any>;
    }
    interface IHistoryQuery {
        page?: number;
        limit?: number;
    }
    interface IBalanceResponse {
        shop_id: number | string;
        balance_cents: number | string;
        spent_lifetime_cents: number | string;
        balance_credits: number | string;
        spent_lifetime_credits: number | string;
    }
    interface ICreditTransaction {
        id?: number | string;
        account_id?: number | string;
        type?: string;
        amount_cents?: number | string;
        balance_after_cents?: number | string;
        idempotency_key?: string | null;
        reference_type?: string | null;
        reference_id?: number | string | null;
        metadata?: Record<string, any> | null;
        status?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
    }
    interface ICreditDataResponse<T> {
        data: T;
    }
    interface ICreditHistoryResponse {
        items: ICreditTransaction[];
        total: number | string;
    }
}
export declare namespace IAiImage {
    interface IGenerateRequest {
        image_type: AIImageContentType;
        product_id?: number;
        topic?: string;
        headline?: string;
        campaign_name?: string;
        style?: AIImageStyle;
        quality?: AIImageQuality;
        width?: number;
        height?: number;
        preferred_provider?: AIImageProvider;
        custom_prompt?: string;
        negative_prompt?: string;
        rendering_speed?: AIImageRenderingSpeed;
        style_type?: AIImageIdeogramStyleType;
        magic_prompt?: 'AUTO' | 'ON' | 'OFF';
        seed?: number;
        style_codes?: string[];
    }
    interface IEstimateRequest {
        image_type: AIImageContentType;
        preferred_provider?: AIImageProvider;
        operation?: AIImageOperation;
        rendering_speed?: AIImageRenderingSpeed;
    }
    interface IEditRequest {
        source_image: string & tags.Format<'url'>;
        mask_image: string & tags.Format<'url'>;
        prompt: string;
        negative_prompt?: string;
        rendering_speed?: AIImageRenderingSpeed;
        style_type?: AIImageIdeogramStyleType;
        seed?: number;
    }
    interface IRemixRequest {
        source_image: string & tags.Format<'url'>;
        prompt: string;
        image_weight?: number;
        negative_prompt?: string;
        rendering_speed?: AIImageRenderingSpeed;
        style_type?: AIImageIdeogramStyleType;
        aspect_ratio?: string;
        width?: number;
        height?: number;
        seed?: number;
    }
    interface IReframeRequest {
        source_image: string & tags.Format<'url'>;
        target_width: number;
        target_height: number;
        rendering_speed?: AIImageRenderingSpeed;
        seed?: number;
    }
    interface IJobCreatedResponse {
        jobId: number | string;
    }
    interface IEstimateResponse {
        credits: number | string;
        provider: string;
        model: string;
    }
    interface IFileData {
        id: number | string;
        url: string;
        path: string;
        title: string;
        mime: string;
        ext: string;
        size: number | string;
        width: number | string | null;
        height: number | string | null;
        slug?: string;
        status?: string;
    }
    interface IJobStatusResponse {
        jobId: number | string;
        shopId: number | string;
        status: string;
        progress?: number | string;
        result?: {
            file?: IFileData;
            provider?: string;
            operation?: string;
            generationTimeMs?: number | string;
            tokens: number | string;
            credits: number | string;
        };
        error?: string;
        updatedAt: number | string;
    }
}
export declare namespace IAiCreditPackage {
    interface ICreditDataResponse<T> {
        data: T;
    }
    interface ICreditPackage {
        id: number | string;
        name: string;
        description?: string;
        credits: number | string;
        originalPrice: number | string;
        vndPrice: number | string;
        discountPercent?: number | string;
        badge?: string;
        validityDays?: number | string;
        sortOrder: number | string;
        active: boolean;
        createdAt: Date | string;
        updatedAt: Date | string;
    }
    interface ICreateRequest {
        name: string;
        description?: string;
        credits: number & tags.Minimum<1>;
        original_price: number & tags.Minimum<0>;
        vnd_price: number & tags.Minimum<0>;
        discount_percent?: number & tags.Minimum<0> & tags.Maximum<100>;
        badge?: string;
        validity_days?: number & tags.Minimum<1>;
        sort_order?: number & tags.Minimum<0>;
        active?: boolean;
    }
    interface IUpdateRequest {
        name?: string;
        description?: string;
        credits?: number & tags.Minimum<1>;
        original_price?: number & tags.Minimum<0>;
        vnd_price?: number & tags.Minimum<0>;
        discount_percent?: number & tags.Minimum<0> & tags.Maximum<100>;
        badge?: string;
        validity_days?: number & tags.Minimum<1>;
        sort_order?: number & tags.Minimum<0>;
        active?: boolean;
    }
    interface IQueryRequest {
        page?: number & tags.Minimum<1>;
        limit?: number & tags.Minimum<1> & tags.Maximum<100>;
        active?: boolean;
    }
    interface IPurchaseHistoryQuery {
        page?: number & tags.Minimum<1>;
        limit?: number & tags.Minimum<1> & tags.Maximum<100>;
    }
    interface IAdminPurchaseHistoryQuery extends IPurchaseHistoryQuery {
        shop_id?: number;
    }
    interface IPurchase {
        id: number | string;
        shopId: number | string;
        packageId: number | string;
        packageName: string;
        credits: number | string;
        amountPaid: number | string;
        transactionId?: number | string;
        createdAt: Date | string;
    }
    interface IDeleteResponse {
        success: boolean;
    }
}
export declare namespace IAiSystemConfig {
    interface IConfigEntity {
        config_key: string;
        config_value: Record<string, any> | string | number | boolean | null;
        description?: string;
        updated_by?: string;
        created_at?: string;
        updated_at?: string;
    }
    interface IGetRequest {
        config_key: string;
    }
    interface ISetRequest {
        config_key: string;
        config_value: Record<string, any> | string | number | boolean | null;
        updated_by?: string;
    }
    interface IListRequest {
        prefix?: string;
    }
    interface IDeleteRequest {
        config_key: string;
    }
    interface ISuccessResponse {
        success: boolean;
    }
    interface ICreditPriceVndResponse {
        price_vnd: number | string;
    }
    interface IGetTextCreditsRequest {
        tier: string;
    }
    interface IGetImageCreditsRequest {
        provider_key: string;
    }
    interface ICreditsResponse {
        credits: number | string;
    }
    interface ICreditPackage {
        name: string;
        credits: number | string;
        vnd_price: number | string;
        active: boolean;
    }
}

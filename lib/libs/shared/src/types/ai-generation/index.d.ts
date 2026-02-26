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
    }
    interface IEstimateRequest {
        content_type: AIContentType;
        product_id?: number;
    }
    interface IKeywordSuggestRequest {
        product_name: string;
        category?: string;
        features?: string[];
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
    }
    interface IBlogGenerateRequest {
        content_type: AIContentType;
        tone: AIContentTone;
        topic?: string;
        name?: string;
        keywords?: string[];
        custom_prompt?: string;
        brand_voice_id?: number;
    }
    interface IBlogEstimateRequest {
        content_type: AIContentType;
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
        content_type?: AIContentType;
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
        jobId: number;
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
        jobId: number;
        shopId: number;
        status: string;
        progress?: number;
        result?: {
            content: string;
            tokens: number;
            credits: number;
        };
        error?: string;
        updatedAt: number;
    }
    interface IBatchGenerateResponse {
        jobIds: number[];
    }
    interface IContentJob {
        id: number;
        shop_id: number;
        product_id: number | null;
        product_name: string | null;
        content_type: string;
        tone: string | null;
        status: string;
        input_data: Record<string, any> | null;
        output_data: Record<string, any> | null;
        tokens_used: number | null;
        credit_cost: number | null;
        error_message: string | null;
        user_id: string | null;
        estimated_credits: number | null;
        industry: string | null;
        createdAt: Date;
        updatedAt: Date;
    }
    interface IBrandVoice {
        id: number;
        shop_id: number;
        is_default: boolean;
        brand_name: string | null;
        approved_phrases: string[] | null;
        forbidden_words: string[] | null;
        reading_level: string;
        custom_instructions: string | null;
        default_tone: string | null;
        industry: string | null;
        createdAt: Date;
        updatedAt: Date;
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
        shop_id: number;
        balance_cents: number;
        spent_lifetime_cents: number;
    }
    interface ICreditTransaction {
        id: number;
        account_id: number;
        type: string;
        amount_cents: number;
        balance_after_cents: number;
        idempotency_key: string | null;
        reference_type: string | null;
        reference_id: number | null;
        metadata: Record<string, any> | null;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }
    interface ICreditDataResponse<T> {
        data: T;
    }
    interface ICreditHistoryResponse {
        items: ICreditTransaction[];
        total: number;
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
        jobId: number;
    }
    interface IEstimateResponse {
        credits: number;
        provider: string;
        model: string;
    }
    interface IFileData {
        id: number;
        url: string;
        path: string;
        title: string;
        mime: string;
        ext: string;
        size: number;
        width: number | null;
        height: number | null;
        slug?: string;
        status?: string;
    }
    interface IJobStatusResponse {
        jobId: number;
        shopId: number;
        status: string;
        progress?: number;
        result?: {
            file?: IFileData;
            provider?: string;
            operation?: string;
            generationTimeMs?: number;
            tokens: number;
            credits: number;
        };
        error?: string;
        updatedAt: number;
    }
}
export declare namespace IAiCreditPackage {
    interface ICreditDataResponse<T> {
        data: T;
    }
    interface ICreditPackage {
        id: number;
        name: string;
        description?: string;
        credits: number;
        originalPrice: number;
        vndPrice: number;
        discountPercent?: number;
        badge?: string;
        validityDays?: number;
        sortOrder: number;
        active: boolean;
        createdAt: Date;
        updatedAt: Date;
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
        id: number;
        shopId: number;
        packageId: number;
        packageName: string;
        credits: number;
        amountPaid: number;
        transactionId?: number;
        createdAt: Date;
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
        price_vnd: number;
    }
    interface IGetTextCreditsRequest {
        tier: string;
    }
    interface IGetImageCreditsRequest {
        provider_key: string;
    }
    interface ICreditsResponse {
        credits: number;
    }
    interface ICreditPackage {
        name: string;
        credits: number;
        vnd_price: number;
        active: boolean;
    }
}

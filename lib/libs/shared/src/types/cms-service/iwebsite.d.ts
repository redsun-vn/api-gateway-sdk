import { tags } from 'typia';
import { SEOBaseResponse, SEOBase } from '../common.type';
import { ITheme } from './itheme';
export type THealthStatus = 'online' | 'offline' | 'ssl_error' | 'suspended' | 'checking' | 'unknown';
export type TDomainLinkStatus = 'pointing_ok' | 'pointing_elsewhere' | 'unresolved' | 'unknown';
export declare namespace IWebsite {
    interface IQueryFindByDomain {
        domain?: string;
    }
    interface IOnboardingState {
        is_completed: boolean;
        current_step: string;
        skipped_steps: string[];
        started_at: string | null;
        completed_at: string | null;
    }
    interface ICreateReq extends SEOBase {
        domain: string;
        homeUrl: string;
        themeUuid?: string;
        language?: string;
        logoId?: number;
        faviconId?: number;
        isDevelopment?: boolean;
        authSignup?: boolean;
        googleAnalyticsKey?: string;
        googleSearchConsoleKey?: string;
        googleMapsApiKey?: string;
        customCodeHead?: string;
        customCodeFooter?: string;
        robotsTxt?: string;
        priceBookId?: number;
        warehouseId?: number;
        availablePaymentMethodIds?: string[];
        availableShippingMethodIds?: string[];
        onboardingState?: IOnboardingState | null;
    }
    interface ICreate extends ICreateReq {
        shop_id?: (number & tags.Type<'uint64'>) | null;
    }
    interface IDomainVerification {
        id: string;
    }
    interface IUpdateReq extends Omit<Partial<ICreate>, 'shop_id'> {
    }
    interface IUpdate extends IUpdateReq {
        id: string;
    }
    interface IResponse extends SEOBaseResponse {
        shop_id?: number | string | null;
        domain: string;
        domainVerified: boolean;
        domainVerificationToken: string;
        homeUrl: string;
        themeUuid?: string | null;
        language?: string | null;
        theme?: ITheme.IResponse | null;
        logoId?: number | string | null;
        faviconId?: number | string | null;
        isDevelopment?: boolean;
        authSignup?: boolean;
        googleAnalyticsKey?: string | null;
        googleSearchConsoleKey?: string | null;
        googleMapsApiKey?: string | null;
        customCodeHead?: string | null;
        customCodeFooter?: string | null;
        robotsTxt?: string | null;
        priceBookId?: number | string | null;
        warehouseId?: number | string | null;
        availablePaymentMethodIds?: string[] | null;
        availableShippingMethodIds?: string[] | null;
        onboardingState?: IOnboardingState | null;
        healthStatus?: THealthStatus;
        domainLinkStatus?: TDomainLinkStatus;
        lastCheckedAt?: Date | string | null;
        lastCheckErrorCode?: string | null;
        isSuspended?: boolean;
        suspendedAt?: Date | string | null;
    }
    interface ISuspensionReq {
        suspended: boolean;
        reason?: (string & tags.MaxLength<500>) | null;
    }
    interface IStatusResponse {
        healthStatus: THealthStatus;
        domainLinkStatus: TDomainLinkStatus;
        lastCheckedAt: Date | string | null;
        lastCheckErrorCode: string | null;
        isSuspended: boolean;
    }
    interface IRequestCheckResponse {
        accepted: boolean;
    }
    interface ISuspensionLogItem {
        id: string;
        websiteId: string;
        suspended: boolean;
        reason: string | null;
        staffId: string;
        createdAt: Date | string;
    }
    interface ICreateRealmReq {
        domain: string;
    }
}

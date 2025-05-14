import { tags } from 'typia';
import { SEOBaseResponse, SEOBase } from '../common.type';
import { ITheme } from './itheme';
export declare namespace IWebsite {
    interface IQueryFindByDomain {
        domain?: string;
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
    }
    interface ICreateRealmReq {
        domain: string;
    }
}

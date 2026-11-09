import { tags } from 'typia';
export declare namespace IAdsCommon {
    type Platform = 'meta' | 'google' | 'tiktok' | 'other';
    type ObjectLevel = 'campaign' | 'adset' | 'ad';
    type InsightSource = 'api' | 'manual' | 'csv';
    type Id = string & tags.Pattern<'^[1-9][0-9]{0,18}$'>;
    type CalendarDate = string & tags.Format<'date'>;
    type CurrencyCode = string & tags.Pattern<'^[A-Za-z]{3}$'>;
    interface IMoney {
        currency: string;
        amount: string;
    }
    interface IPageMeta {
        totalItems: number;
        itemCount: number;
        itemsPerPage: number;
        totalPages: number;
        currentPage: number;
    }
}

import { tags } from 'typia';
import { IAdsCommon } from './iads-common';
export declare namespace IAdsSpend {
    interface IRowInput {
        stat_date: string & tags.MaxLength<10>;
        campaign_name: string & tags.MaxLength<512>;
        campaign_external_id?: string & tags.MaxLength<64>;
        spend: number | (string & tags.MaxLength<24>);
        impressions?: number | (string & tags.MaxLength<20>);
        clicks?: number | (string & tags.MaxLength<20>);
        link_clicks?: number | (string & tags.MaxLength<20>) | null;
        reach?: number | (string & tags.MaxLength<20>) | null;
    }
    interface IManualUpsert {
        ad_account_id: IAdsCommon.Id;
        rows: IRowInput[] & tags.MinItems<1> & tags.MaxItems<5000>;
    }
    interface IImport extends IManualUpsert {
        mode?: 'upsert' | 'replace_range';
        date_from?: IAdsCommon.CalendarDate;
        date_to?: IAdsCommon.CalendarDate;
    }
    interface IDeleteQuery {
        id?: IAdsCommon.Id;
        ad_account_id?: IAdsCommon.Id;
        date_from?: IAdsCommon.CalendarDate;
        date_to?: IAdsCommon.CalendarDate;
        campaign_external_id?: string & tags.MaxLength<64>;
    }
    interface IListQuery {
        ad_account_id?: IAdsCommon.Id;
        platform?: IAdsCommon.Platform;
        level?: IAdsCommon.ObjectLevel;
        source?: IAdsCommon.InsightSource;
        campaign_external_id?: string & tags.MaxLength<64>;
        date_from?: IAdsCommon.CalendarDate;
        date_to?: IAdsCommon.CalendarDate;
        page?: number & tags.Type<'uint32'>;
        limit?: number & tags.Type<'uint32'> & tags.Maximum<500>;
    }
    interface IView {
        id: string;
        ad_account_id: string;
        level: IAdsCommon.ObjectLevel;
        object_external_id: string;
        campaign_external_id: string;
        campaign_name: string | null;
        stat_date: string;
        currency: string;
        spend: string;
        impressions: number;
        clicks: number;
        link_clicks: number | null;
        reach: number | null;
        source: IAdsCommon.InsightSource;
        import_batch_id: string | null;
        synced_at: string;
    }
    interface IPage {
        items: IView[];
        meta: IAdsCommon.IPageMeta;
    }
    interface IWriteResult {
        rows_written: number;
    }
    interface IDeleteResult {
        rows_deleted: number;
    }
    interface IImportResult {
        import_batch_id: string;
        mode: 'upsert' | 'replace_range';
        rows_written: number;
        rows_deleted: number;
        date_from: string;
        date_to: string;
    }
}

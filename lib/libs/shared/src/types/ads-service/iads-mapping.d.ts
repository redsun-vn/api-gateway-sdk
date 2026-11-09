import { tags } from 'typia';
import { IAdsCommon } from './iads-common';
export declare namespace IAdsMapping {
    type TargetType = 'crm_marketing_campaign';
    type Method = 'auto_id' | 'auto_name' | 'manual' | 'ambiguous';
    interface ITarget {
        target_type: TargetType;
        target_id: string;
        utm_value: string;
        title: string | null;
    }
    interface IView {
        ad_account_id: string;
        campaign_external_id: string;
        campaign_name: string | null;
        mapping_id: string | null;
        method: Method | null;
        target_type: TargetType | null;
        target_id: string | null;
        target_utm_value: string | null;
        status: 'mapped' | 'ambiguous' | 'unmapped';
    }
    interface IListQuery {
        ad_account_id?: IAdsCommon.Id;
        status?: 'mapped' | 'ambiguous' | 'unmapped';
        search?: string & tags.MaxLength<100>;
        page?: number & tags.Type<'uint32'>;
        limit?: number & tags.Type<'uint32'> & tags.Maximum<200>;
    }
    interface ITargetQuery {
        search?: string & tags.MaxLength<100>;
    }
    interface IPage {
        items: IView[];
        meta: IAdsCommon.IPageMeta;
    }
    interface ISet {
        ad_account_id: IAdsCommon.Id;
        campaign_external_id: string & tags.MinLength<1> & tags.MaxLength<64>;
        target_id: IAdsCommon.Id;
    }
    interface IClearResult {
        cleared: boolean;
    }
    interface IRematchResult {
        accepted: boolean;
    }
}

import { AdminBaseResponse as BaseResponse } from '../../common.type';
import { CRM_QUOTE_STAGE } from '../../../enum';
import { ICRMDeal } from './deal';
import { IAdminCustomer as ICustomer } from '../icustomer';
import { IUtmSource, IUtmMedium, IUtmCampaign } from '../utm';
import { ICRMTeam } from './team';
export declare namespace ICRMQuote {
    interface ICreate {
        description?: string;
        delivery_note?: string;
        payment_method?: string;
        currency?: string;
        refCode?: string;
        stage?: CRM_QUOTE_STAGE | string;
        customer_id?: number;
        name: string;
        phone?: string;
        email?: string;
        sub_total?: number;
        total?: number;
        tax?: number;
        day_close?: number;
        date_deadline?: string;
        campaign_id?: number;
        medium_id?: number;
        source_id?: number;
        team_id?: number;
        line_items: ICRMDeal.IDealLineItem[];
        deal_id?: number;
        companyId?: number;
    }
    interface IUpdate extends Partial<ICreate> {
        id: number | string;
    }
    interface IResponse extends BaseResponse {
        code: string;
        description?: string | null;
        delivery_note?: string | null;
        payment_method?: string | null;
        currency?: string | null;
        refCode?: string | null;
        stage?: string | null;
        sub_total?: number | string | null;
        total?: number | string | null;
        tax?: number | string | null;
        day_close?: number | string | null;
        date_deadline?: string | null;
        customer_id?: number | string | null;
        customer?: ICustomer.IResponse | null;
        phone?: string | null;
        email?: string | null;
        name?: string | null;
        campaign_id?: number | string | null;
        campaign?: IUtmCampaign.IResponse | null;
        medium_id?: number | string | null;
        medium?: IUtmMedium.IResponse | null;
        source_id?: number | string | null;
        source?: IUtmSource.IResponse | null;
        team_id?: number | string | null;
        team?: ICRMTeam.IResponse | null;
        line_items?: ICRMDeal.IDealLineItem[];
        deal_id?: number | string | null;
        deal?: ICRMDeal.IResponse | null;
    }
}

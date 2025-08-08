import { DEAL_AVAILABLE_PRIORITIES, DEAL_LINE_ITEM_TYPE, DEAL_STATUS, DEAL_TYPE } from '../../../enum';
import { AdminBaseResponse as BaseResponse } from '../../common.type';
import { IAdminCustomer } from '../icustomer';
import { IUtmCampaign, IUtmMedium, IUtmSource } from '../utm';
import { ICrmStage } from './crm-stage';
import { ICRMTeam } from './team';
export declare namespace ICRMDeal {
    interface IDealLineItem {
        item_id?: string | number | null;
        type: DEAL_LINE_ITEM_TYPE | string;
        name?: string;
        price: number;
        discount: number;
        total: number;
        quantity?: number;
        value?: number;
        unit?: string | null;
    }
    interface ICreate {
        companyId?: string;
        name: string;
        description?: string;
        active: boolean;
        currency?: string;
        probability?: number;
        refCode?: string;
        stage_id?: number;
        type?: DEAL_TYPE | string;
        priority?: DEAL_AVAILABLE_PRIORITIES | string;
        status?: DEAL_STATUS | null;
        customer_id?: number;
        phone?: string;
        email?: string;
        address?: string;
        website?: string;
        expected_revenue?: number;
        date_closed?: string;
        date_automation_last?: string;
        date_open?: string;
        day_open?: number;
        day_close?: number;
        date_last_stage_update?: string;
        date_conversion?: string;
        date_deadline?: string;
        campaign_id?: number;
        medium_id?: number;
        source_id?: number;
        team_id?: number;
        line_items: IDealLineItem[];
    }
    interface IUpdate extends Partial<ICreate> {
        id: number | string;
    }
    interface IResponse extends BaseResponse {
        name: string;
        description?: string | null;
        active: boolean;
        currency?: string | null;
        probability?: number | string | null;
        refCode?: string | null;
        stage_id?: number | string | null;
        stage?: ICrmStage.IResponse | null;
        type?: DEAL_TYPE | string | null;
        priority?: DEAL_AVAILABLE_PRIORITIES | string | null;
        status?: DEAL_STATUS | string | null;
        customer_id?: number | string | null;
        customer?: IAdminCustomer.IResponse | null;
        phone?: string | null;
        email?: string | null;
        address?: string | null;
        website?: string | null;
        expected_revenue?: number | string | null;
        date_closed?: string | null;
        date_automation_last?: string | null;
        date_open?: string | null;
        day_open?: number | string | null;
        day_close?: number | string | null;
        date_last_stage_update?: string | null;
        date_conversion?: string | null;
        date_deadline?: string | null;
        campaign_id?: number | string | null;
        campaign?: IUtmCampaign.IResponse | null;
        medium_id?: number | string | null;
        medium?: IUtmMedium.IResponse | null;
        source_id?: number | string | null;
        source?: IUtmSource.IResponse | null;
        team_id?: number | string | null;
        team?: ICRMTeam.IResponse | null;
        line_items?: IDealLineItem[];
    }
}

import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export type StageWinState = 'NONE' | 'WON' | 'LOST';
export interface IStageResponse {
    id: number | string;
    pipeline_id: number | string;
    name: string;
    order_index: number;
    probability: number;
    win_state: StageWinState;
    ui_color: string | null;
}
export declare namespace ICrmPipeline {
    interface IFindAllQuery {
        active?: boolean;
        q?: string & tags.MaxLength<255>;
    }
    interface IPipelineResponse extends BaseResponse {
        shop_id: number | string;
        name: string;
        template_id: number | string;
        template_version: number;
        active: boolean;
        is_default: boolean;
    }
    interface IFindAllResponse {
        items: IPipelineResponse[];
        total: number;
    }
    interface IFindOneResponse extends IPipelineResponse {
        stages: IStageResponse[];
    }
}

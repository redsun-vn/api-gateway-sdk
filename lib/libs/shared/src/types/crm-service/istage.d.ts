import { tags } from 'typia';
export declare namespace IStage {
    interface IUpdateBody {
        expected_updated_at: string;
        name?: string & tags.MinLength<1> & tags.MaxLength<255>;
        ui_color?: (string & tags.Pattern<'^#[0-9a-fA-F]{6}$'>) | null;
        probability?: number & tags.Type<'int32'> & tags.Minimum<0> & tags.Maximum<100>;
        sla_stuck_days?: number & tags.Type<'int32'> & tags.Minimum<0> & tags.Maximum<365>;
        required_fields_to_enter?: Array<{
            key: string;
            validation?: string;
        }> | null;
        allowed_next_stages?: string[];
        allowed_prev_stages?: string[];
    }
    interface IStageResponse {
        id: number | string;
        pipeline_id: number | string;
        name: string;
        order_index: number | string;
        probability: number | string;
        sla_stuck_days: number | string;
        win_state: string;
        required_fields_to_enter: unknown;
        ui_color: string | null;
        updated_at: string;
        allowed_next_stages: string[] | null;
        allowed_prev_stages: string[] | null;
    }
}

import { tags } from 'typia';
export declare namespace IStage {
    interface IUpdateBody {
        expected_updated_at: string;
        name?: string & tags.MinLength<1> & tags.MaxLength<255>;
        ui_color?: (string & tags.Pattern<'^#[0-9a-fA-F]{6}$'>) | null;
        probability?: number & tags.Type<'int32'> & tags.Minimum<0> & tags.Maximum<100>;
        required_fields_to_enter?: Array<{
            key: string;
            validation?: string;
        }> | null;
    }
    interface IStageResponse {
        id: number;
        pipeline_id: number;
        name: string;
        order_index: number;
        probability: number;
        win_state: string;
        required_fields_to_enter: unknown;
        ui_color: string | null;
        updated_at: string;
    }
}

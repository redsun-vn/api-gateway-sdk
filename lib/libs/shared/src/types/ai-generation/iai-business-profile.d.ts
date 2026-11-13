import { tags } from 'typia';
import { IMktOs } from '../crm-service/imkt-os';
type PositiveInt = number & tags.Type<'uint32'> & tags.Minimum<1>;
export declare namespace IAiBusinessProfile {
    interface IQuery {
        version?: PositiveInt;
        brand_voice_id?: PositiveInt;
        tone_set_id?: PositiveInt;
        tone_set_version?: PositiveInt;
        with_default_tone_set?: boolean;
    }
    type IVersionsQuery = IMktOs.IBrandProfileVersionsQuery;
    interface IDraftSaveRequest {
        brand_voice_id?: PositiveInt | null;
        data: IMktOs.IBrandProfileDataInput;
    }
    type IDraftDeleteQuery = IMktOs.IBrandProfileDraftDeleteQuery;
    interface ISaveRequest extends IDraftSaveRequest {
        request_id: string & tags.MinLength<1> & tags.MaxLength<64>;
    }
    type IToneSetId = number & tags.Type<'uint32'> & tags.Minimum<1>;
    interface IToneSetCreateRequest {
        request_id: string & tags.MinLength<1> & tags.MaxLength<64>;
        name: string & tags.MinLength<1> & tags.MaxLength<100>;
        copy_from_id?: PositiveInt;
    }
    interface IToneSetUpdateRequest {
        name?: string & tags.MinLength<1> & tags.MaxLength<100>;
        is_default?: boolean;
    }
    interface IToneSetDeleted {
        success: boolean;
    }
}
export {};

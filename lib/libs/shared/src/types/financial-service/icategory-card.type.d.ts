import { BaseResponse } from '../common.type';
import { CARD_TYPE } from '../../enum';
export declare namespace ICategoryCard {
    interface ICreate {
        type: string & CARD_TYPE;
        code?: string;
        name: string;
        description?: string;
    }
    interface IUpdate {
        name?: string;
        active?: boolean;
        description?: string;
    }
    interface IResponse extends BaseResponse {
        type: string;
        shop_id: number | string;
        active: boolean;
        code: string;
        name: string | null;
        description?: string | null;
        deleted_by?: number | string | null;
    }
}

import { BaseResponse } from '../../common.type';
export declare namespace IHolidayConfig {
    interface ICreate {
        shop_id: number;
        name: string;
        description?: string;
        start_date: string;
        end_date: string;
        salary_multiplier?: number;
        active?: boolean;
        recurring?: boolean;
    }
    type IUpdate = Omit<Partial<ICreate>, 'shop_id'>;
    interface IResponse extends BaseResponse {
        shop_id: number | string;
        name: string;
        description?: string | null;
        start_date: string;
        end_date: string;
        salary_multiplier: number | string | null;
        active: boolean;
        recurring: boolean;
        created_by_id?: string | null;
        updated_by_id?: string | null;
    }
}

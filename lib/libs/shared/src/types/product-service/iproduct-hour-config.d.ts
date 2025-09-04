import { BaseResponse } from '../common.type';
export declare enum FirstHourPriority {
    FIRST_HOUR = "FIRST_HOUR",
    SPECIAL_HOUR = "SPECIAL_HOUR"
}
export declare namespace IProductHourConfig {
    interface ISpecialHourRange {
        name?: string;
        from: string;
        to: string;
        price: number;
        dayOfWeek: number[];
    }
    interface ICreate {
        product_id: number;
        variant_id: number;
        enableFirstHour?: boolean;
        firstHourPrice?: number;
        firstHourMinutes?: number;
        enableSpecialTime?: boolean;
        specialHourRanges?: ISpecialHourRange[] | null;
        firstHourPriority?: FirstHourPriority;
    }
    interface IUpdate {
        enableFirstHour?: boolean;
        firstHourPrice?: number;
        firstHourMinutes?: number;
        enableSpecialTime?: boolean;
        specialHourRanges?: ISpecialHourRange[] | null;
        firstHourPriority?: FirstHourPriority;
    }
    interface IResponse extends BaseResponse {
        product_id: number | string;
        variant_id: number | string;
        enableFirstHour: boolean;
        firstHourPrice: number | string;
        firstHourMinutes: number | string;
        enableSpecialTime: boolean;
        specialHourRanges: ISpecialHourRange[] | null;
        firstHourPriority: FirstHourPriority;
    }
}

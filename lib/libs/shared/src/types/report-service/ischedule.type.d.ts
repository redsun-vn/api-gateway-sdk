import { TaskTarget } from '../../enum';
export declare namespace ISchedule {
    interface IScheduleResponse {
        _id: string;
        target: TaskTarget;
        sequenece: number;
        success: number;
        failure: number;
        retry: number;
        lastDay: string;
        __v?: number | string | null;
    }
}

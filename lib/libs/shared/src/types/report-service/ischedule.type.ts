/* eslint-disable @typescript-eslint/no-namespace */

import { TaskTarget } from '../../enum';

export namespace ISchedule {
	export interface IScheduleResponse {
		_id: string;
		target: TaskTarget;
		sequence: number;
		success: number;
		failure: number;
		retry: number;
		lastDay: string;
		__v?: number | string | null;
	}
}

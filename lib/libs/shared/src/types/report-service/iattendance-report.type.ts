/* eslint-disable @typescript-eslint/no-namespace */
enum UNIT_TIME {
	WEEK = 'week',
	MONTH = 'month',
	QUARTER = 'quarter',
	YEAR = 'year',
}

interface IReportQuery {
	limit: number;
	page: number;
	shop_id: string;
	branch_id?: string;
	user_id?: string;
	startDate?: string;
	endDate?: string;
}
export namespace IAttendanceReport {
	export interface IQueryShopReport extends IReportQuery {
		unitTime?: string & UNIT_TIME;
	}

	export interface IOverviewReport {
		shop_id: number;
		branch_id?: number;
		user_id?: string;
		timeOfDay?: string;
		attendanceType?: string;
		shift_id?: number;
		count: number;
		isEarlyOut?: boolean;
		isLateIn?: boolean;
		earlyTotalTime: number;
		lateTotalTime: number;
		totalShiftInDay: number;

		day?: number;
		week?: number;
		month?: number;
		quarter?: number;
		year?: number;
		date?: string;
	}
}

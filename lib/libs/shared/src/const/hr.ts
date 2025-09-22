import { ELASTIC_INDEX } from './elastic-index';
import { FieldMappingExternalType } from './report';

export const ATTENDANCE_DETAIL_HEADER_DATA_EXPORT: string[] = [
	'Nhân viên',
	'Chi nhánh',
	'Ca làm việc',
	'Chấm công vào',
	'Chấm công ra',
	'Tổng giờ làm việc',
	'Đi muộn',
	'Về sớm',
];

export const ATTENDANCE_DETAIL_HEADER_MAPPING_KEY: { [key: string]: string } = {
	'Nhân viên': 'staffName',
	'Chi nhánh': 'branchName',
	'Ca làm việc': 'shiftName',
	'Chấm công vào': 'checkInDate',
	'Chấm công ra': 'checkOutDate',
	'Tổng giờ làm việc': 'totalWorkeHour',
	'Đi muộn': 'isLateIn',
	'Về sớm': 'isEarlyOut',
};

export const REPORT_HEADER_ATTENDANCE_MAPPING: { [key: string]: string } = {
	Ngày: 'date',
	'Chi nhánh': 'branchName',
	'Nhân viên': 'staffName',
	'Ca làm việc': 'shiftName',
	'Sô lần': 'count',
	'Tổng số phút đi muộn': 'lateTotalTime',
	'Tổng số phút về sớm': 'earlyTotalTime',
};

export const reportHeaderAttendanceByField = Object.fromEntries(
	Object.entries(REPORT_HEADER_ATTENDANCE_MAPPING).map((a) => a.reverse()),
);

export const fieldDataReportHRMapping: FieldMappingExternalType[] = [
	{
		key: 'branch_id',
		set: new Set<string>(),
		index: ELASTIC_INDEX.BRANCH,
		isShopId: true,
	},
	{
		key: 'user_id',
		set: new Set<string>(),
		index: ELASTIC_INDEX.STAFF,
		isShopId: true,
		fieldFilter: 'user_id',
	},
	{
		key: 'shift_id',
		set: new Set<string>(),
		index: ELASTIC_INDEX.HR_ATTENDANCE_SHIFT,
		isShopId: true,
	},
];

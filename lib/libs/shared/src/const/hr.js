"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fieldDataReportHRMapping = exports.reportHeaderAttendanceByField = exports.REPORT_HEADER_ATTENDANCE_MAPPING = exports.ATTENDANCE_DETAIL_HEADER_MAPPING_KEY = exports.ATTENDANCE_DETAIL_HEADER_DATA_EXPORT = void 0;
const elastic_index_1 = require("./elastic-index");
exports.ATTENDANCE_DETAIL_HEADER_DATA_EXPORT = [
    'Nhân viên',
    'Chi nhánh',
    'Ca làm việc',
    'Chấm công vào',
    'Chấm công ra',
    'Tổng giờ làm việc',
    'Đi muộn',
    'Về sớm',
];
exports.ATTENDANCE_DETAIL_HEADER_MAPPING_KEY = {
    'Nhân viên': 'staffName',
    'Chi nhánh': 'branchName',
    'Ca làm việc': 'shiftName',
    'Chấm công vào': 'checkInDate',
    'Chấm công ra': 'checkOutDate',
    'Tổng giờ làm việc': 'totalWorkeHour',
    'Đi muộn': 'isLateIn',
    'Về sớm': 'isEarlyOut',
};
exports.REPORT_HEADER_ATTENDANCE_MAPPING = {
    Ngày: 'date',
    'Chi nhánh': 'branchName',
    'Nhân viên': 'staffName',
    'Ca làm việc': 'shiftName',
    'Sô lần': 'count',
    'Tổng số phút đi muộn': 'lateTotalTime',
    'Tổng số phút về sớm': 'earlyTotalTime',
};
exports.reportHeaderAttendanceByField = Object.fromEntries(Object.entries(exports.REPORT_HEADER_ATTENDANCE_MAPPING).map((a) => a.reverse()));
exports.fieldDataReportHRMapping = [
    {
        key: 'branch_id',
        set: new Set(),
        index: elastic_index_1.ELASTIC_INDEX.BRANCH,
        isShopId: true,
    },
    {
        key: 'user_id',
        set: new Set(),
        index: elastic_index_1.ELASTIC_INDEX.STAFF,
        isShopId: true,
        fieldFilter: 'user_id',
    },
    {
        key: 'shift_id',
        set: new Set(),
        index: elastic_index_1.ELASTIC_INDEX.HR_ATTENDANCE_SHIFT,
        isShopId: true,
    },
];
//# sourceMappingURL=hr.js.map
export declare namespace IHRReport {
    interface ISummary {
        total_employees: number;
        active_employees: number;
        new_employees_this_month: number;
        attendance_rate: number;
        present_today: number;
        total_staff_today: number;
        total_salary: number;
        salary_change_percentage: number;
        total_working_hours: number;
        overtime_hours: number;
    }
    interface ISummaryResponse {
        summary: ISummary;
        date: string;
        month: number;
        year: number;
    }
    interface IDailyAttendance {
        day_of_week: string;
        day_of_week_number: number;
        date: string;
        present: number;
        absent: number;
        late: number;
        early_leave: number;
        on_leave: number;
        total: number;
    }
    interface IDailyAttendanceResponse {
        week_data: IDailyAttendance[];
        period: 'week' | 'month';
        start_date: string;
        end_date: string;
        summary: {
            total_present: number;
            total_absent: number;
            total_late: number;
            total_early_leave: number;
            total_on_leave: number;
            average_attendance_rate: number;
        };
    }
    type EmployeeWorkStatus = 'working' | 'break' | 'absent' | 'on_leave' | 'not_started' | 'off_shift';
    interface ICurrentEmployee {
        staff_id: number | string;
        user_id: string;
        staff_code: string;
        full_name: string;
        avatar_id?: string | null;
        position?: string | null;
        department_id?: number | string | null;
        department_name?: string | null;
        department_badge_class?: string;
        work_status: EmployeeWorkStatus;
        status_label: string;
        shift_id?: number | string | null;
        shift_name?: string | null;
        shift_time?: string | null;
        check_in_time?: string | null;
        check_out_time?: string | null;
        performance_score?: number | null;
        is_online: boolean;
    }
    interface ICurrentEmployeeFilter {
        shop_id: number;
        branch_id?: number;
        department_id?: number;
        work_status?: EmployeeWorkStatus;
        date?: string;
    }
    interface ICurrentEmployeeResponse {
        employees: ICurrentEmployee[];
        total: number;
        by_status: {
            working: number;
            break: number;
            absent: number;
            on_leave: number;
            not_started: number;
            off_shift: number;
        };
        by_department: {
            department_id: number | string;
            department_name: string;
            count: number;
        }[];
    }
    interface IPayrollByDepartment {
        department_id: number | string;
        department_name: string;
        staff_count: number;
        total_salary: number;
        badge_color?: string;
    }
    interface IMonthlyPayroll {
        total_salary_cost: number;
        base_salary_total: number;
        kpi_bonus_total: number;
        allowance_total: number;
        insurance_total: number;
        overtime_total: number;
        penalty_total: number;
        net_salary_total: number;
        by_department: IPayrollByDepartment[];
        payment_progress: {
            paid_amount: number;
            total_amount: number;
            percentage: number;
            remaining_amount: number;
            expected_payment_date?: string | null;
        };
        status_summary: {
            draft: number;
            pending: number;
            approved: number;
            paid: number;
        };
    }
    interface IMonthlyPayrollResponse {
        payroll: IMonthlyPayroll;
        month: number;
        year: number;
    }
    interface IWorkingHoursAnalysis {
        average_working_hours_per_employee: number;
        total_working_hours: number;
        total_expected_hours: number;
        overtime_rate: number;
        overtime_hours: number;
        leave_rate: number;
        leave_hours: number;
        absent_rate: number;
        absent_hours: number;
        late_count: number;
        early_leave_count: number;
        late_minutes_total: number;
        early_leave_minutes_total: number;
    }
    interface IWorkingHoursAnalysisResponse {
        analysis: IWorkingHoursAnalysis;
        month: number;
        year: number;
    }
    interface IDepartmentPerformance {
        department_id: number | string;
        department_name: string;
        department_icon?: string;
        staff_count: number;
        performance_score: number;
        performance_change: number;
        attendance_rate: number;
        productivity_score: number;
        quality_score: number;
    }
    interface IDepartmentPerformanceResponse {
        departments: IDepartmentPerformance[];
        overall_performance: number;
        month: number;
        year: number;
    }
    interface IHRDashboard {
        summary: ISummaryResponse;
        daily_attendance: IDailyAttendanceResponse;
        current_employees: ICurrentEmployeeResponse;
        monthly_payroll: IMonthlyPayrollResponse;
        working_hours: IWorkingHoursAnalysisResponse;
        department_performance: IDepartmentPerformanceResponse;
    }
    interface IHRReportRequest {
        shop_id: number | string;
        branch_id?: number;
        month?: number;
        year?: number;
        date?: string;
    }
    interface IDateRangeRequest extends IHRReportRequest {
        start_date: string;
        end_date: string;
    }
}

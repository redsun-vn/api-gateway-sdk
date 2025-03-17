export declare namespace ISalaryPayrollAnalysis {
    interface IResponse {
        id: number | string;
        shop_id: number | string;
        staff_id: number | string;
        staff_code: string;
        department_id: number | string;
        month: number | string;
        year: number | string;
        basic_wage: number | string;
        allowance_amount: number | string;
        overtime_amount: number | string;
        bonus_amount: number | string;
        insurance_amount: number | string;
        insurance_employer_amount: number | string;
        union_fee: number | string;
        tax_amount: number | string;
        penalty_amount: number | string;
        advance_amount: number | string;
        gross_wage: number | string;
        net_wage: number | string;
        working_days: number | string;
        total_hours: number | string;
        late_minutes: number | string;
        early_leave_minutes: number | string;
        payment_date: string | null;
        payment_method: string | null;
        created_at: Date | string;
        updated_at: Date | string;
    }
    interface IResponseByDateRangeSummary {
        department_id?: number | string;
        total_payslips: number | string;
        total_basic_wage: number | string;
        total_allowance: number | string;
        total_overtime: number | string;
        total_bonus: number | string;
        total_insurance: number | string;
        total_tax: number | string;
        total_penalty: number | string;
        total_advance: number | string;
        total_gross_wage: number | string;
        total_net_wage: number | string;
        total_working_days: number | string;
        total_working_hours: number | string;
        total_late_minutes: number | string;
        total_early_leave_minutes: number | string;
    }
    interface IResponseByDateRange {
        summary: IResponseByDateRangeSummary;
        departmentAnalysis: any;
        monthlyAnalysis: any;
        details: IResponse[];
    }
    interface IResponseByDepartment {
        summary: IResponseByDateRangeSummary;
        staffAnalysis: any;
        monthlyAnalysis: any;
        details: IResponse[];
    }
    interface IResponseByTrend {
        year: number | string;
        trend: any;
        total_gross_wage: number | string;
        total_net_wage: number | string;
        total_payslips: number | string;
    }
    interface IResponseByCostAnalysis {
        year: number | string;
        departments: any;
        total_gross_wage: number | string;
        total_net_wage: number | string;
        total_staff: number | string;
        average_gross_wage_per_staff: number | string;
    }
    interface IResponseBySummary {
        month: number | string;
        year: number | string;
        departments: any;
        total_payslips: number | string;
        total_basic_wage: number | string;
        total_allowance: number | string;
        total_overtime: number | string;
        total_bonus: number | string;
        total_insurance: number | string;
        total_tax: number | string;
        total_penalty: number | string;
        total_advance: number | string;
        total_gross_wage: number | string;
        total_net_wage: number | string;
        total_working_days: number | string;
        total_working_hours: number | string;
        total_late_minutes: number | string;
        total_early_leave_minutes: number | string;
    }
}

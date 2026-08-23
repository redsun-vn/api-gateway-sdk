import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export declare enum EContractTypeCode {
    PROBATION = "PROBATION",
    INTERNSHIP = "INTERNSHIP",
    FIXED_TERM = "FIXED_TERM",
    INDEFINITE = "INDEFINITE",
    ADDENDUM = "ADDENDUM",
    SERVICE = "SERVICE",
    OTHER = "OTHER"
}
export declare enum EContractStatus {
    DRAFT = "DRAFT",
    ACTIVE = "ACTIVE",
    EXPIRED = "EXPIRED",
    TERMINATED = "TERMINATED",
    SUPERSEDED = "SUPERSEDED"
}
export declare enum EExpiryStage {
    D60 = "D60",
    D30 = "D30",
    D7 = "D7",
    OVERDUE = "OVERDUE"
}
export declare enum EExpiryFilter {
    IN_60 = "60",
    IN_30 = "30",
    IN_7 = "7",
    OVERDUE = "OVERDUE"
}
export declare namespace IStaffContractType {
    interface ICreateInput {
        name: string & tags.MaxLength<100>;
        code: EContractTypeCode;
        default_duration_months?: (number & tags.Type<'int32'> & tags.Minimum<1> & tags.Maximum<120>) | null;
        max_probation_days?: (number & tags.Type<'int32'> & tags.Minimum<1> & tags.Maximum<180>) | null;
        requires_end_date?: boolean;
        requires_attachment?: boolean;
        description?: string | null;
        sort_order?: number;
        active?: boolean;
    }
    interface IUpdateInput {
        name?: string & tags.MaxLength<100>;
        default_duration_months?: (number & tags.Type<'int32'> & tags.Minimum<1> & tags.Maximum<120>) | null;
        max_probation_days?: (number & tags.Type<'int32'> & tags.Minimum<1> & tags.Maximum<180>) | null;
        requires_end_date?: boolean;
        requires_attachment?: boolean;
        description?: string | null;
        sort_order?: number;
        active?: boolean;
    }
    interface IListQuery {
        active?: boolean;
    }
    interface IResponse extends BaseResponse {
        shop_id: number | string;
        name: string;
        code: EContractTypeCode;
        default_duration_months: number | null;
        max_probation_days: number | null;
        requires_end_date: boolean;
        requires_attachment: boolean;
        description: string | null;
        sort_order: number;
        active: boolean;
    }
}
export declare namespace IStaffContract {
    interface IWarning {
        code: string;
        params?: Record<string, string | number | null>;
    }
    interface ICreateInput {
        staff_id: string;
        contract_type_id: string;
        parent_contract_id?: string | null;
        contract_number?: string | null;
        sign_date?: string | null;
        start_date: string;
        end_date?: string | null;
        position?: string | null;
        department_id?: string | null;
        base_salary?: (number & tags.Minimum<0>) | null;
        file_id?: string | null;
        note?: string | null;
    }
    interface IUpdateInput {
        contract_type_id?: string;
        contract_number?: string | null;
        sign_date?: string | null;
        start_date?: string;
        end_date?: string | null;
        position?: string | null;
        department_id?: string | null;
        base_salary?: (number & tags.Minimum<0>) | null;
        file_id?: string | null;
        note?: string | null;
    }
    interface IRenewInput {
        contract_type_id: string;
        contract_number?: string | null;
        sign_date?: string | null;
        start_date: string;
        end_date?: string | null;
        position?: string | null;
        department_id?: string | null;
        base_salary?: (number & tags.Minimum<0>) | null;
        file_id?: string | null;
        note?: string | null;
    }
    interface ITerminateInput {
        terminated_at: string;
        termination_reason?: string | null;
    }
    interface IResponse extends BaseResponse {
        shop_id: number | string;
        staff_id: number | string;
        contract_type_id: number | string | null;
        code: EContractTypeCode;
        parent_contract_id: number | string | null;
        contract_number: string | null;
        sign_date: string | null;
        start_date: string;
        end_date: string | null;
        status: EContractStatus;
        terminated_at: string | null;
        termination_reason: string | null;
        terminated_by: string | null;
        closed_reason: string | null;
        position: string | null;
        department_id: number | string | null;
        base_salary: number | string | null;
        file_id: string | null;
        note: string | null;
        is_legacy: boolean;
        expiry_stage: EExpiryStage | null;
        remaining_days: number | null;
        contract_type?: IStaffContractType.IResponse | null;
        created_by: string | null;
        updated_by: string | null;
    }
    interface IListResponse {
        items: IResponse[];
        total: number;
    }
    interface IMutationResponse {
        contract: IResponse;
        warnings: IWarning[];
    }
    interface IStageSummary {
        expiring_60: number;
        expiring_30: number;
        expiring_7: number;
        overdue: number;
    }
    interface ISummary {
        by_status: Record<string, number>;
        by_code: Record<string, number>;
        by_stage: IStageSummary;
    }
    interface IListQuery {
        staff_id?: string;
        contract_type_id?: string;
        department_id?: string;
        status?: EContractStatus;
        expiry_stage?: EExpiryFilter;
        keyword?: string;
        page?: number;
        limit?: number;
    }
    interface IExportQuery {
        staff_id?: string;
        contract_type_id?: string;
        department_id?: string;
        status?: EContractStatus;
        expiry_stage?: EExpiryFilter;
        keyword?: string;
        format?: 'xlsx' | 'csv';
    }
    interface IExportEnumLabels {
        code?: Record<string, string>;
        status?: Record<string, string>;
        expiry_stage?: Record<string, string>;
    }
    interface IExportLabels {
        columns: string[];
        enums?: IExportEnumLabels;
    }
    interface IExportRow {
        fields: string[];
        rows: Record<string, string>[];
        truncated: boolean;
    }
    interface IFileUrlResponse {
        url: string;
        expiresAt: number | null;
    }
}

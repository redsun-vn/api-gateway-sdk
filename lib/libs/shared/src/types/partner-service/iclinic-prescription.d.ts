import { BaseResponse } from '../common.type';
export declare namespace IClinicPrescription {
    interface IItem {
        drug_name?: string;
        strength?: string;
        route?: string;
        dosage?: string;
        duration_days?: number;
        quantity?: number;
        unit?: string;
        instructions?: string;
        product_id?: number;
        variant_id?: number;
        unit_price?: number;
    }
    interface ICreate {
        visit_id: string;
        shop_id: number | string;
        branch_id?: string;
        doctor_id?: string;
        items?: IItem[];
        notes?: string;
    }
    interface IUpdate {
        items?: IItem[];
        notes?: string;
    }
    interface ICancel {
        reason: string;
    }
    interface IResponse extends BaseResponse {
        visit_id?: string | null;
        doctor_id?: string | null;
        patient_id?: string | null;
        shop_id: string;
        branch_id?: string | null;
        prescription_code?: string | null;
        status?: string | null;
        patient_name_snapshot?: string | null;
        items?: IItem[] | null;
        issued_at?: string | null;
        printed_at?: string | null;
        snapshot_json?: Record<string, unknown> | null;
        notes?: string | null;
    }
    interface IDetailResponse extends IResponse {
        notes?: string | null;
        snapshot_json?: Record<string, unknown> | null;
    }
    interface IQuery {
        visitId?: string;
        status?: string;
        page?: number;
        limit?: number;
    }
}

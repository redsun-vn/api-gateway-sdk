import { BaseResponse } from '../common.type';
export declare namespace IClinicVisit {
    interface ICreate {
        patient_id: string;
        doctor_id?: string;
        branch_id?: string;
        shop_id: number | string;
        reservation_id?: string;
        chief_complaint?: string;
    }
    interface IUpdate {
        chief_complaint?: string;
        anamnesis?: string;
        vitals?: Record<string, unknown>;
        diagnosis?: string;
        treatment_plan?: string;
        total_amount?: number | string;
        doctor_id?: string;
        branch_id?: string;
        icd10_codes?: string[];
        patient_advice?: string;
        follow_up_at?: string;
    }
    interface IPendingPayment {
        id: string;
        totalAmount: number;
        userId: string;
        pos_session_id: string;
        price_book_id: number;
        sale_channel_id: number;
        table_reservations?: Array<{
            table_id: number;
            effective_at?: string;
            people_count?: number;
            uuid?: string;
            name?: string;
            reservation_id?: number;
        }>;
    }
    interface IAmend {
        changes?: Partial<IUpdate>;
        reason: string;
        staffPermissions?: string[];
    }
    interface ICancel {
        reason?: string;
    }
    interface IResponse extends BaseResponse {
        shop_id: string;
        branch_id?: string | null;
        doctor_id?: string | null;
        patient_id?: string | null;
        reservation_id?: string | null;
        order_id?: string | null;
        parent_visit_id?: string | null;
        status?: string | null;
        industry_type?: string | null;
        chief_complaint?: string | null;
        diagnosis?: string | null;
        treatment_plan?: string | null;
        anamnesis?: string | null;
        patient_name_snapshot?: string | null;
        doctor_name_snapshot?: string | null;
        icd10_codes?: string[] | null;
        patient_advice?: string | null;
        follow_up_at?: string | null;
        total_amount?: number | null;
        has_prescription?: boolean | null;
        signed_at?: string | null;
        amendment_closes_at?: string | null;
    }
    interface IDetailResponse extends IResponse {
        vitals?: Record<string, unknown> | null;
    }
    interface IQuery {
        patientId?: string;
        shopId?: number;
        status?: string;
        branchId?: string;
        page?: number;
        limit?: number;
    }
    interface IVisitPhiQuery {
        include_phi?: boolean;
    }
}

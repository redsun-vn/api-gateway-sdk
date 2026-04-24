import { BaseResponse } from '../common.type';
export declare namespace IClinicPatient {
    interface ICreate {
        partner_id: number | string;
        shop_id: number | string;
        branch_id?: string;
        full_name?: string;
        phone?: string;
        gender?: string;
        blood_type?: string;
        birth_date?: string;
        bhyt_id?: string;
        allergies?: Record<string, unknown>[];
        chronic_conditions?: Record<string, unknown>[];
        emergency_contact?: Record<string, unknown>;
    }
    type IUpdate = Partial<ICreate>;
    interface ISignConsent {
        version: string;
    }
    interface IResponse extends BaseResponse {
        partner_id?: string | null;
        shop_id: string;
        branch_ids?: string[] | null;
        full_name?: string | null;
        phone?: string | null;
        gender?: string | null;
        blood_type?: string | null;
        birth_date?: string | null;
        has_profile?: boolean | null;
        consent_signed_at?: string | null;
    }
    interface IDetailResponse extends IResponse {
        bhyt_id?: string | null;
        bhyt_id_present?: boolean | null;
        allergies?: Record<string, unknown>[] | null;
        chronic_conditions?: Record<string, unknown>[] | null;
        emergency_contact?: Record<string, unknown> | null;
    }
    interface IQuery {
        shopId?: string;
        page?: number;
        limit?: number;
    }
    interface IProfileQuery {
        include_phi?: boolean;
    }
}

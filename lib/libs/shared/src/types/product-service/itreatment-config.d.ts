import { tags } from 'typia';
import { TreatmentType } from '../../enum/treatment';
import { BaseResponse } from '../common.type';
export declare namespace ITreatmentConfig {
    interface ICreate {
        product_id: number & tags.Type<'uint64'>;
        shop_id: number & tags.Type<'uint64'>;
        treatmentType: TreatmentType;
        expiryDays?: number | null;
        allowSelfCheckin?: boolean;
        steps?: ITreatmentStepInput[];
    }
    interface IUpdate {
        treatmentType?: TreatmentType;
        expiryDays?: number | null;
        allowSelfCheckin?: boolean;
        steps?: ITreatmentStepInput[];
    }
    interface IResponse extends BaseResponse {
        product_id: number | string;
        shop_id: number | string;
        treatmentType: TreatmentType;
        expiryDays: number | null;
        allowSelfCheckin: boolean;
        steps?: ITreatmentStepResponse[];
    }
}
export interface ITreatmentStepInput {
    stepOrder: number;
    linkedProductId: number & tags.Type<'uint64'>;
    linkedVariantId: number & tags.Type<'uint64'>;
    name: string & tags.MinLength<1>;
    description?: string | null;
    durationMinutes?: number | null;
}
export interface ITreatmentStepResponse extends BaseResponse {
    treatment_config_id: number | string;
    shop_id: number | string;
    stepOrder: number;
    linkedProductId: number | string;
    linkedVariantId: number | string;
    name: string;
    description: string | null;
    durationMinutes: number | null;
}
export interface ITreatmentVariantConfigInput {
    variant_id: number & tags.Type<'uint64'>;
    product_id: number & tags.Type<'uint64'>;
    shop_id: number & tags.Type<'uint64'>;
    totalSessions: number;
}
export interface ITreatmentVariantConfigResponse extends BaseResponse {
    variant_id: number | string;
    product_id: number | string;
    shop_id: number | string;
    totalSessions: number;
}

import { CATEGORY_BUSINESS_TYPE_ENUMS, RATING_CRITERIA_CONTEXT_ENUMS } from '../../enum';
import { BaseResponse } from '../common.type';
export declare namespace IRatingCriteriaTemplate {
    interface ICreate {
        shopId: number;
        businessType: CATEGORY_BUSINESS_TYPE_ENUMS;
        criteriaContext?: RATING_CRITERIA_CONTEXT_ENUMS;
        criteriaCode: string;
        criteriaName: string;
        description?: string | null;
        weight?: number;
        displayOrder?: number;
        isRequired?: boolean;
        icon?: string | null;
        minScore?: number;
        maxScore?: number;
    }
    interface IUpdate {
        criteriaName?: string;
        criteriaContext?: RATING_CRITERIA_CONTEXT_ENUMS;
        description?: string | null;
        weight?: number;
        displayOrder?: number;
        isActive?: boolean;
        isRequired?: boolean;
        icon?: string | null;
        minScore?: number;
        maxScore?: number;
    }
    interface IResponse extends BaseResponse {
        shop_id: number | string;
        businessType: CATEGORY_BUSINESS_TYPE_ENUMS;
        criteriaContext?: RATING_CRITERIA_CONTEXT_ENUMS | null;
        criteriaCode: string;
        criteriaName: string;
        description: string | null;
        weight: number;
        displayOrder: number;
        isActive: boolean;
        isRequired: boolean;
        isSystem: boolean;
        icon: string | null;
        minScore: number | string;
        maxScore: number | string;
    }
    interface IBulkCreate {
        shopId: number;
        businessType: CATEGORY_BUSINESS_TYPE_ENUMS;
        criteria: Omit<ICreate, 'shopId' | 'businessType'>[];
    }
    interface IReorderRequest {
        criteriaId: number;
        newOrder: number;
    }
    interface IIsActiveRequest {
        isActive: boolean;
    }
    interface IReorderRequest {
        reorderData: IRatingCriteriaTemplate.IReorderRequest[];
    }
    interface IResetRequest {
        businessType: CATEGORY_BUSINESS_TYPE_ENUMS;
    }
    interface ICloneRequest {
        sourceShopId: number;
        businessType: CATEGORY_BUSINESS_TYPE_ENUMS;
    }
    interface IQueryTemplateCount {
        businessType?: string;
    }
}

import { tags } from 'typia';
import { TreatmentType, TreatmentCardStatus, TreatmentProductItemType, CheckInType, SessionLogStatus } from '../../enum/treatment';
import { BaseResponse } from '../common.type';
import { IPartner } from '../partner-service';
import { IStaff } from '../istaff';
export declare namespace ITreatmentCard {
    interface IQuery {
        customer_id?: string;
        status?: string;
    }
    interface IUpdate {
        id: number & tags.Type<'uint64'>;
        updated_by?: number & tags.Type<'uint64'>;
        sessionsTotal?: number;
        expiryDate?: (string & tags.Format<'date'>) | null;
        status?: TreatmentCardStatus;
        customer_id?: string;
    }
    interface ICheckIn {
        treatmentCardId: number & tags.Type<'uint64'>;
        shop_id: number & tags.Type<'uint64'>;
        checkedInBy: number & tags.Type<'uint64'>;
        checkedInType: CheckInType;
        stepNumber?: number;
        staffId?: number & tags.Type<'uint64'>;
        reservationId?: number & tags.Type<'uint64'>;
        notes?: string;
        consumedItems?: IConsumedItemInput[];
        schedule?: {
            branch_id: number;
            partner_id: number;
            startDate: string;
            endDate: string;
        };
    }
    interface ICheckInRequest extends Omit<ICheckIn, 'treatmentCardId' | 'shop_id'> {
    }
    interface ICancelSession {
        sessionLogId: number & tags.Type<'uint64'>;
        updatedBy: number & tags.Type<'uint64'>;
        status: SessionLogStatus;
    }
    interface ICancelCard {
        treatmentCardId: number & tags.Type<'uint64'>;
        shop_id: number & tags.Type<'uint64'>;
        cancelledBy: number & tags.Type<'uint64'>;
        productItems?: {
            product_id: number;
            variant_id: number;
            quantity: number;
            item_type: TreatmentProductItemType;
            step_id?: number | null;
        }[];
    }
    interface ICancelCardRequest extends Omit<ICancelCard, 'treatmentCardId' | 'shop_id'> {
    }
    interface IResponse extends BaseResponse {
        shop_id: number | string;
        code: string | null;
        customer_id: number | string | null;
        order_id: number | string;
        product_id: number | string;
        variant_id: number | string;
        sessionsTotal: number;
        sessionsUsed: number;
        treatmentType: TreatmentType;
        purchasedAt: string;
        expiryDate: string | null;
        status: TreatmentCardStatus;
        customer?: IPartner.IPartnerResponse | null;
        sessionLogs?: ISessionLogResponse[];
    }
    interface ISessionLogResponse extends BaseResponse {
        treatmentCardId: number | string;
        shop_id: number | string;
        stepNumber: number | null;
        checkInAt: string;
        checkedInBy: number | string;
        checkedInType: CheckInType;
        staffId: number | string | null;
        reservationId: number | string | null;
        notes: string | null;
        status: SessionLogStatus;
        consumedItems?: IConsumedItemResponse[];
        staff?: IStaff.IStaffResponse | null;
    }
    interface IConsumedItemInput {
        product_id: number;
        variant_id: number;
        quantityUsed: number;
    }
    interface IConsumedItemResponse extends BaseResponse {
        treatmentSessionLogId: number | string;
        product_id: number | string;
        variant_id: number | string;
        quantityUsed: number;
        shop_id: number | string;
    }
}

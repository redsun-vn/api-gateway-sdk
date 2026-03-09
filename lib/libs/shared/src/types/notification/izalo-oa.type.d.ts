import { BaseResponse } from '../common.type';
export declare namespace IZaloOA {
    interface IGetAccessTokenFromRefreshToken {
        grant_type: 'refresh_token';
        app_id: string;
        refresh_token: string;
    }
    interface IGetAccessTokenFromAuthCode {
        grant_type: 'authorization_code';
        app_id: string;
        code: string;
        code_verifier?: string;
    }
    type IGetAccessTokenBody = IGetAccessTokenFromRefreshToken | IGetAccessTokenFromAuthCode;
    interface IAccessTokenSuccess {
        access_token: string;
        refresh_token: string;
        expires_in: string;
    }
    interface IAccessTokenError {
        error_name: string;
        error_reason: string;
        ref_doc: string;
        error_description: string;
        error: number;
    }
    type IAccessTokenResponse = IAccessTokenSuccess | IAccessTokenError;
    interface IZNSTemplateGetRequest {
        shop_id: number;
        templateId: string;
    }
    interface IZNSTemplateListRequest {
        shop_id: number;
        offset?: number;
        limit?: number;
        status?: number;
    }
    interface IZNSTemplateSendRequest {
        access_token?: string;
        phone: string;
        template_id: string;
        template_data: Record<string, any>;
        tracking_id?: string;
        mode?: 'development';
    }
    interface IZNSTemplateSendResponse {
        error: number;
        message: string;
        data?: {
            msg_id: string;
            sent_time: string;
            quota?: {
                dailyQuota: string;
                remainingQuota: string;
            };
        };
    }
    interface IZNSTemplateInfo {
        templateId: number | string;
        templateName: string;
        status: string & ('DISABLE' | 'ENABLE' | 'PENDING_REVIEW' | 'REJECT' | 'DELETE');
        listParams: {
            name: string;
            require: boolean;
            type: string;
            maxLength: number;
            minLength: number;
            acceptNull: boolean;
        }[];
        reason?: string;
        timeout: number;
        previewUrl: string;
        templateQuality: 'HIGH' | 'MEDIUM' | 'LOW' | 'UNDEFINED' | 'null';
        templateTag: 'TRANSACTION' | 'CUSTOMER_CARE' | 'PROMOTION';
        price: string;
        applyTemplateQuota?: boolean;
        templateDailyQuota?: string;
        templateRemainingQuota?: boolean;
    }
    interface IZNSTemplateListItem {
        templateId: number;
        templateName: string;
        createdTime: number;
        status: 'PENDING_REVIEW' | 'DISABLE' | 'ENABLE' | 'REJECT';
        templateQuality: 'HIGH' | 'MEDIUM' | 'LOW' | 'UNDEFINED';
    }
    type TransactionTemplateType = 'transaction_billing' | 'transaction_order' | 'transaction_reward' | 'transaction_contract' | 'transaction_booking' | 'transaction_membership' | 'transaction_event' | 'transaction_transaction' | 'transaction_account' | 'transaction_internal' | 'transaction_partnership' | 'transaction_education' | 'transaction_rating';
    interface IOATransactionElement {
        type: 'header' | 'text' | 'table';
        content?: string;
        align?: 'left' | 'center' | 'right';
        key?: string;
        value?: string;
        style?: 'green' | 'blue' | 'yellow' | 'red' | 'grey';
    }
    interface IOATransactionButton {
        title: string;
        image_icon?: string;
        type: 'oa.open.url' | 'oa.query.hide' | 'oa.query.show' | 'oa.open.phone' | 'oa.open.sms';
        payload: string | {
            url: string;
        } | {
            phone_code: string;
        };
    }
    interface IOATransactionPayload {
        template_type: TransactionTemplateType;
        language?: 'VI' | 'EN';
        elements: IOATransactionElement[];
        buttons?: IOATransactionButton[];
    }
    interface IOATransactionMessage {
        recipient: {
            user_id: string;
        };
        message: {
            attachment: {
                type: 'template';
                payload: IOATransactionPayload;
            };
        };
    }
    interface ISendMessageResponse {
        error: number;
        message: string;
        data?: {
            message_id: string;
            user_id: string;
        };
    }
    interface IAppointmentReminder {
        shop_id: number;
        customer_phone: string;
        customer_name: string;
        appointment_time: Date | string;
        service_name?: string | null;
        branch_name?: string | null;
        branch_address?: string | null;
        note?: string | null;
        zalo_template_id?: string | null;
        remind_before_minutes?: number | null;
        status?: AppointmentReminderStatus;
    }
    interface IAppointmentReminderResponse extends BaseResponse {
        shop_id: number;
        customer_phone: string;
        customer_name: string;
        appointment_time: Date | string;
        service_name?: string | null;
        branch_name?: string | null;
        branch_address?: string | null;
        note?: string | null;
        zalo_template_id?: string | null;
        remind_before_minutes?: number | null;
        status: AppointmentReminderStatus;
        error_message?: string | null;
        tracking_id?: string | null;
    }
    enum AppointmentReminderStatus {
        PENDING = "pending",
        SENT = "sent",
        FAILED = "failed",
        CANCELLED = "cancelled"
    }
    interface IShopZaloOAConfig {
        shop_id: number | string;
        oa_id?: string | null;
        app_id: string;
        secret_key: string;
        refresh_token: string;
        access_token?: string | null;
        access_token_expires_at?: Date | null;
        zns_template_id?: string | null;
        remind_before_minutes?: number | null;
        is_active: boolean;
    }
    interface ICreateShopZaloOAConfig {
        shop_id: number;
        oa_id?: string;
        app_id: string;
        secret_key: string;
        refresh_token: string;
        zns_appointment_template_id?: string;
        remind_before_minutes?: number;
    }
    interface IUpdateShopZaloOAConfig {
        shop_id: number;
        oa_id?: string;
        app_id?: string;
        secret_key?: string;
        refresh_token?: string;
        zns_appointment_template_id?: string;
        remind_before_minutes?: number;
        is_active?: boolean;
    }
    interface IToggleShopZaloOA {
        shop_id: number;
        is_active: boolean;
    }
    interface IVerifyShopZaloOAResult {
        is_valid: boolean;
        oa_name?: string;
        quota?: {
            dailyQuota: string;
            remainingQuota: string;
        };
        error?: string;
    }
}

import { BaseResponse } from '../common.type';
export declare namespace ITomotekOrder {
    interface ICreate {
        branch_id?: number;
        payment_method_id: number;
        tomotek_config_id: number;
        billNumber?: string;
        transactionAmount: number;
        transResponseStatusCode?: number;
        transactionPurpose?: string;
        qrCodeType: number;
    }
    interface IUpdate {
        payment_method_id?: number;
        tomotek_config_id?: number;
        billNumber?: string;
        transactionAmount?: number;
        transResponseStatusCode?: number;
        transactionPurpose?: string;
        qrCodeType?: number;
    }
    interface IResponse extends BaseResponse {
        shop_id: number | string;
        branch_id: number | string;
        payment_method_id: number | string;
        tomotek_config_id: number | string;
        billNumber: string;
        transactionAmount: number;
        transResponseStatusCode: number;
        transactionPurpose: string;
        qrCodeType: number;
        requestAt?: string | null;
    }
}

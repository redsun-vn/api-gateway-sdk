import { tags } from 'typia';
import { BaseResponse } from '../common.type';
export declare namespace IPaymentGateway {
    interface ICreatePaymentGateway {
        shop_id?: number & tags.Type<'uint32'>;
        name: string;
        abbreviation: string;
        code: string;
        rateFee: number;
        currency?: string;
        gatewayCountry?: string;
        formattedGateway: string;
        active?: boolean;
        international?: boolean;
    }
    interface IUpdatePaymentGateway {
        name?: string;
        abbreviation?: string;
        code?: string;
        rateFee?: number;
        currency?: string;
        gatewayCountry?: string;
        formattedGateway?: string;
        active?: boolean;
        international?: boolean;
    }
    interface IPaymentGatewayResponse extends BaseResponse {
        shop_id: number | string | null;
        name: string;
        abbreviation: string;
        code: string;
        rateFee: number | string;
        currency?: string;
        gatewayCountry?: string;
        formattedGateway: string;
        active?: boolean | string;
        international?: boolean | string;
    }
}

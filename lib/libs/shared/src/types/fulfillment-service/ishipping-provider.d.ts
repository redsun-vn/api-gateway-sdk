export declare namespace IShippingProvider {
    interface IOrderFee {
        total: number;
        service_fee: number;
    }
    enum ShippingProviderCode {
        GHTK = "ghtk",
        GHN = "ghn"
    }
    interface GhtkOrderFeeDto {
        pick_province: string;
        pick_district: string;
        pick_ward?: string;
        pick_address?: string;
        province: string;
        district: string;
        ward?: string;
        address: string;
        weight: number;
        value: number;
        transport?: string;
    }
    interface GhnOrderFeeDto {
        service_id: number;
        insurance_value: number;
        from_district_id: number;
        to_district_id: number;
        to_ward_code: number;
        height: number;
        length: number;
        weight: number;
        width: number;
    }
    type OrderFeeDto = GhtkOrderFeeDto | GhnOrderFeeDto;
}

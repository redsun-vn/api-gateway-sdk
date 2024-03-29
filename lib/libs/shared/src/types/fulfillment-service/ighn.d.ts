export declare namespace IGhnDto {
    interface IOrderFeeRequest {
        from_district_id: number;
        to_district_id: number;
        to_ward_code: string;
        height: number;
        length: number;
        weight: number;
        width: number;
        items: {
            name: string;
            quantity: number;
            height: number;
            weight: number;
            length: number;
            width: number;
        }[];
    }
    interface IProvince {
        ProvinceID: number;
        ProvinceName: string;
        NameExtension?: string[];
    }
    interface IDistrict {
        ProvinceID: number;
        DistrictID: number;
        DistrictName: string;
        NameExtension?: string[];
    }
    interface IWard {
        WardCode: string;
        DistrictID: number;
        WardName: string;
        NameExtension?: string[];
    }
    interface IShiftSchedule {
        id: number;
        title: string;
        from_time: number;
        to_time: number;
    }
    interface IOrderInfo {
        shop_id: string | number | null;
        client_id: string | number | null;
        return_name: string | number | null;
        return_phone: string | number | null;
        return_address: string | number | null;
        return_ward_code: string | number | null;
        return_district_id: string | number | null;
        return_location: string[] | number[] | null;
    }
}

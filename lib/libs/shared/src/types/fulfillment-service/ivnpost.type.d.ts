export declare namespace IVnPostDTO {
    interface IProvince {
        provinceCode: string;
        provinceName: string;
    }
    interface IDistrict {
        districtCode: string;
        districtName: string;
        provinceCode: string;
    }
    interface IWard {
        districtCode: string;
        communeName: string;
        communeCode: string;
    }
    interface IOrderFeeRequest {
        senderProvinceCode: string;
        senderProvinceName?: string;
        senderDistrictCode: string;
        senderDistrictName?: string;
        senderCommuneCode: string;
        senderCommuneName?: string;
        receiverProvinceCode: string;
        receiverProvinceName?: string;
        receiverDistrictCode: string;
        receiverDistrictName?: string;
        receiverCommuneCode: string;
        receiverCommuneName?: string;
        weight: number;
        width: number;
        length: number;
        height: number;
    }
}

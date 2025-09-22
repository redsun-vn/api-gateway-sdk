/* eslint-disable @typescript-eslint/no-namespace */
export namespace IVnPostDTO {
	export interface IProvince {
		provinceCode: string;
		provinceName: string;
	}

	export interface IDistrict {
		districtCode: string;
		districtName: string;
		provinceCode: string;
	}

	export interface IWard {
		districtCode: string;
		communeName: string;
		communeCode: string;
	}

	export interface IOrderFeeRequest {
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

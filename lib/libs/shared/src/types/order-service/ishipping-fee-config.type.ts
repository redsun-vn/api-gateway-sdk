/* eslint-disable @typescript-eslint/no-namespace */
import { FEE_CALCULATION_TYPE, MARKUP_TYPE } from '../../enum';
import { BaseResponse } from '../common.type';

export namespace IShippingFeeConfig {
	export interface ICreate {
		provider_code?: string; // Mã nhà cung cấp vận chuyển (VD: GHN, GHTK, J&T)
		configName: string; // Tên cấu hình
		description?: string; // Mô tả cấu hình (không bắt buộc)
		active?: boolean; // Trạng thái kích hoạt
		priority?: number; // Độ ưu tiên (số càng thấp càng ưu tiên)
		countryCode?: string; // Mã quốc gia (VN, US, ...)
		applyAllProvinces?: boolean; // Áp dụng cho tất cả tỉnh/thành
		provinceCodes?: string[]; // Danh sách mã tỉnh/thành áp dụng
		districtCodes?: string[]; // Danh sách mã quận/huyện áp dụng
		wardCodes?: string[]; // Danh sách mã phường/xã áp dụng
		feeCalculationType: string & FEE_CALCULATION_TYPE; // Loại tính phí (cố định, theo trọng lượng, khoảng cách...)
		minOrderValue?: number; // Giá trị đơn hàng tối thiểu
		maxOrderValue?: number; // Giá trị đơn hàng tối đa
		baseFee?: number; // Phí cơ bản
		useProviderFee?: boolean; // Sử dụng phí của nhà cung cấp
		feeMarkupType?: string & MARKUP_TYPE; // Loại phí phụ thu (%, số tiền cố định)
		feeMarkupValue?: number; // Giá trị phí phụ thu
		minWeight?: number;
		maxWeight?: number;
		minDimensions?: { length: number; width: number; height: number }; // Tối thiểu 5x5x1 cm
		maxDimensions?: { length: number; width: number; height: number }; // Tối đa 100x80x50 cm
		freeShippingEnabled?: boolean;
		freeShippingMinValue?: number;
		applyFromDate?: Date; // Ngày bắt đầu áp dụng
		applyToDate?: Date; // Ngày kết thúc áp dụng
		applyWeekdays?: number[]; // Các ngày trong tuần áp dụng (0=CN, 1=T2...)
		applyHours?: { from: string; to: string }; // Khung giờ áp dụng
		customerGroups?: string[]; // Nhóm khách hàng áp dụng
		excludeCustomerGroups?: string[]; // Nhóm khách hàng loại trừ
		productCategories?: string[]; // Danh mục sản phẩm áp dụng
		excludeProductCategories?: string[]; // Danh mục sản phẩm loại trừ
		productTags?: string[]; // Thẻ sản phẩm áp dụng
		customFormula?: string; // Công thức tính phí tùy chỉnh
		additionalConfig?: Record<string, any>; // Cấu hình bổ sung (dạng key-value)
		codEnabled?: boolean; // Bật tính năng thu hộ
		codFeeType?: string & MARKUP_TYPE; // Loại phí thu hộ (%, số tiền cố định)
		codFeeValue?: number; // Giá trị phí thu hộ
		maxCodValue?: number; // Giá trị thu hộ tối đa
		createdBy?: number;
	}

	export interface IResponse extends BaseResponse {
		provider_code: string | null;
		configName: string | null;
		description: string | null;
		active: boolean | null;
		priority: number | null;
		countryCode: string | null;
		applyAllProvinces: boolean | null;
		provinceCodes: string[] | null;
		districtCodes: string[] | null;
		wardCodes: string[] | null;
		feeCalculationType: string | null;
		minOrderValue: number | string | null;
		maxOrderValue: number | string | null;
		baseFee: number | string | null;
		useProviderFee: boolean | null;
		feeMarkupType?: string | null;
		feeMarkupValue: number | string | null;
		minWeight: number | string | null;
		maxWeight: number | string | null;
		minDimensions: { length: number; width: number; height: number } | null;
		maxDimensions: { length: number; width: number; height: number } | null;
		freeShippingEnabled: boolean | null;
		freeShippingMinValue: number | string | null;
		applyFromDate: Date | null;
		applyToDate: Date | null;
		applyWeekdays: number[] | null;
		applyHours: { from: string; to: string } | null;
		customerGroups: string[] | null;
		excludeCustomerGroups: string[] | null;
		productCategories: string[] | null;
		excludeProductCategories: string[] | null;
		productTags: string[] | null;
		customFormula: string | null;
		additionalConfig: Record<string, any> | null;
		codEnabled: boolean | null;
		codFeeType?: string | null;
		codFeeValue: number | string | null;
		maxCodValue: number | string | null;
		createdBy?: number | string | null;
		updatedBy?: number | string | null;
	}

	export interface IUpdate extends Partial<ICreate> {
		updatedBy?: number | string;
	}

	export interface IFeeCalculationRequest {
		shop_id: number;
		draft_order_id?: number;
		provider_code?: string;
		orderValue?: number;
		weight?: number;
		dimensions?: { length: number; width: number; height: number };
		fromAddress?: {
			province?: string;
			district?: string;
			ward?: string;
		};
		toAddress?: {
			province: string;
			district?: string;
			ward?: string;
		};
		productCategories?: string[];
		productTags?: string[];
		customerGroup?: string;
		isCod?: boolean;
		codValue?: number;
	}

	export interface IFeeCalculationResponse {
		baseFee: number;
		shippingFee: number;
		codFee: number;
		totalFee: number;
		isFreeShipping: boolean;
		configUsed: IResponse;
		breakdown: {
			providerFee?: number;
			markup?: number;
			discount?: number;
		};
	}
}

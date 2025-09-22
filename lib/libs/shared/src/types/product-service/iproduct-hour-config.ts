/* eslint-disable @typescript-eslint/no-namespace */

import { BaseResponse } from '../common.type';

export enum FirstHourPriority {
	FIRST_HOUR = 'FIRST_HOUR', // luôn tính giá giờ đầu tiên trước, sau đó tới đặc biệt
	SPECIAL_HOUR = 'SPECIAL_HOUR', // luôn tính giá đặc biệt nếu bắt đầu trùng với giờ đặc biệt có cấu hình
}

export namespace IProductHourConfig {
	export interface ISpecialHourRange {
		name?: string; // tên khung giờ, ví dụ "Giờ vàng"
		from: string; // giờ bắt đầu, ví dụ "18:00"
		to: string; // giờ kết thúc, ví dụ "22:00"
		price: number; // giá áp dụng cho khung giờ này
		dayOfWeek: number[]; // Ngày trong tuần áp dụng (0-6 với 0 là Chủ Nhật)
	}

	export interface ICreate {
		product_id: number;
		variant_id: number;
		enableFirstHour?: boolean; // Cho phép giá giờ đầu tiên
		firstHourPrice?: number; // Giá giờ đầu tiên
		firstHourMinutes?: number; // Số phút tính là giờ đầu tiên (mặc định: 60 phút)
		enableSpecialTime?: boolean; // Cho phép Giá đặc biệt cho từng khung giờ cụ thể
		specialHourRanges?: ISpecialHourRange[] | null; // Danh sách khung giờ đặc biệt
		firstHourPriority?: FirstHourPriority; // Trường hợp giờ đầu tiên và giờ đặc biệt trùng nhau
	}

	export interface IUpdate {
		enableFirstHour?: boolean; // Cho phép giá giờ đầu tiên
		firstHourPrice?: number; // Giá giờ đầu tiên
		firstHourMinutes?: number; // Số phút tính là giờ đầu tiên (mặc định: 60 phút)
		enableSpecialTime?: boolean; // Cho phép Giá đặc biệt cho từng khung giờ cụ thể
		specialHourRanges?: ISpecialHourRange[] | null; // Danh sách khung giờ đặc biệt
		firstHourPriority?: FirstHourPriority; // Trường hợp giờ đầu tiên và giờ đặc biệt trùng nhau
	}

	export interface IResponse extends BaseResponse {
		product_id: number | string;
		variant_id: number | string;
		enableFirstHour: boolean;
		firstHourPrice: number | string;
		firstHourMinutes: number | string;
		enableSpecialTime: boolean;
		specialHourRanges: ISpecialHourRange[] | null;
		firstHourPriority: FirstHourPriority;
	}
}

import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { CARD_TYPE, PAYMENT_CARD_STATUS } from '../../enum';
/* eslint-disable @typescript-eslint/no-namespace */

export namespace IPaymentCard {
	export interface ICreate {
		branch_id?: number & tags.Type<'uint64'>;
		category_card_id: number & tags.Type<'uint64'>;
		payment_method_id: number & tags.Type<'uint64'>;
		partner_id?: number & tags.Type<'uint64'>;
		target?: string;
		target_id?: number & tags.Type<'uint64'>;
		type: string & CARD_TYPE;
		code?: string;
		referenceCode?: string;
		status?: string & PAYMENT_CARD_STATUS;
		name: string;
		note?: string;
		amount: number;
		currency?: string;
		taxNumber?: number;
		archivedDate?: string;
	}

	export interface IUpdate extends Partial<ICreate> {}

	export interface IResponse extends BaseResponse {
		active: boolean;
		shop_id: number | string; // shop
		branch_id?: number | string | null; // chi nhánh
		category_card_id?: number | string | null; // mã danh mục phiếu
		payment_method_id: number | string; // id phương thức thanh toán
		staff_id?: number | string | null; // nhân viên lập chi thu
		partner_id?: number | string | null; // mã đối tác
		target?: string | null; // nguồn chi/chu
		target_id?: number | string | null; // id nguồn chi/chu
		referenceCode?: string | null; // mã nguồn tham chiếu
		type: string; // loại phiếu receipt-(thu) chi-(payment)
		code: string; // mã phiếu (tự gen hoặc nhập tay unique)
		status: string; // paid - unpaid
		name: string | null; // tên phiếu thu chi
		note: string | null; // ghi chú
		amount: number | string; // số tiền
		currency: string; // đơn vị tiền tệ
		taxNumber: number | string; // giá trị thuế
		taxCode?: string | null; // mã số thuế
		archivedDate?: string | null; // ngày lưu trữ
	}

	export interface IResponseReport {
		shop_id: number;
		branch_id?: number | string;
		category_card_id?: number | string;
		payment_method_id?: number | string;
		staff_id?: number | string;
		partner_id?: number | string;
		totalAmount: number; // giá trị
		type?: string; // loại phiếu receipt-(thu) chi-(payment)
		target?: string; // nguồn chi/chu
		currency?: string;
		day?: number;
		week?: number;
		month?: number;
		quarter?: number;
		year?: number;
		date?: string;
	}
}

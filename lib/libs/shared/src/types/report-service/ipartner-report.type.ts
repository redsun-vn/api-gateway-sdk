/* eslint-disable @typescript-eslint/no-namespace */

export namespace IPartnerReport {
	export interface IPartnerOrderReportResponse {
		partner_id: number | string;
		shop_id: number | string;
		lastDateOrder: string | null;
		totalPayment: number;
		totalOrder: number;
		week?: number;
		month?: number;
		quarter?: number;
		year?: number;
		products:
			| {
					quantity: number;
					product_id: string | number;
					variant_id: string | number;
			  }[]
			| null;
	}

	export interface IPartnerReportResponse {
		shop_id: number | string;
		branch_id: number | string;
		province?: string;
		totalPartner: number;
		day?: number;
		week?: number;
		month?: number;
		quarter?: number;
		year?: number;
	}
}

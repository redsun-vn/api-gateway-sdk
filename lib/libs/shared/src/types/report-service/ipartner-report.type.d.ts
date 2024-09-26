export declare namespace IPartnerReport {
    interface IPartnerReportResponse {
        partner_id: number | string;
        shop_id: number | string;
        lastDateOrder: string;
        totalPayment: number;
        totalOrder: number;
        week?: number;
        month?: number;
        quarter?: number;
        year?: number;
        products: {
            quantity: number;
            product_id: string | number;
            variant_id: string | number;
        }[] | null;
    }
}

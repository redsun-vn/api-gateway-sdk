export declare namespace IShippingProvider {
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

export declare namespace IStaffApiKey {
    interface ICreateBody {
        name: string;
        expires_in_days?: number | null;
    }
    interface IListItem {
        id: number | string;
        name: string;
        key_id: string;
        scopes: string[];
        active: boolean;
        expires_at: Date | string | null;
        last_used_at: Date | string | null;
        last_used_ip: string | null;
        revoked_at: Date | string | null;
        created_at: Date | string;
    }
    interface ICreateResponse extends IListItem {
        plain_key: string;
    }
    interface ICreateInput extends ICreateBody {
        shop_id: number | string;
        staff_id: number | string;
    }
    interface IListInput {
        shop_id: number | string;
        staff_id: number | string;
    }
    interface IRevokeInput {
        id: number | string;
        shop_id: number | string;
        staff_id: number | string;
    }
}

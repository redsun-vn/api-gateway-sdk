export declare namespace IVisibleStaff {
    interface IResolveRequest {
        shop_id: string;
        viewer_staff_id: string;
    }
    interface IResolveResponse {
        all: boolean;
        staff_ids: number[];
        managed_branch_ids: number[];
        managed_department_ids: number[];
    }
}

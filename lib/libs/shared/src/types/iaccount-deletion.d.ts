import { tags } from 'typia';
export declare namespace IAccountDeletion {
    interface IDeleteRequest {
        password: string & tags.MinLength<1> & tags.MaxLength<256>;
    }
    interface IRpcInput {
        user_id: string;
    }
    interface IMembership {
        shop_id: number | string;
        staff_id: number | string;
    }
    interface IRpcResponse {
        memberships: IMembership[];
        soft_deleted_shop_ids: Array<number | string>;
    }
    interface IPendingJob {
        sub: string;
        user_id: string;
        realm: string;
        brand: string;
    }
    type TProgress = {
        stage: 'memberships_done';
        memberships: IMembership[];
    } | {
        stage: 'done';
    };
}

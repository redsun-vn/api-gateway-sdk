import { tags } from 'typia';
export declare namespace IPricebook {
    interface IReqCreatePricebook {
        name: string;
        effectiveAt: string;
        expiredAt: string;
        active: boolean;
        userId?: string;
    }
    interface ICreatePricebook extends IReqCreatePricebook {
        shop_id: number & tags.Type<'uint32'>;
    }
    interface IUpdatePricebook {
        id?: string;
        name?: string;
        effectiveAt?: string;
        expiredAt?: string;
        active?: boolean;
        userId?: string;
    }
    interface IPricebookResponse {
        id: number | string | null;
        shop_id: string | number | null;
        name: string;
        active: boolean;
        effectiveAt: string;
        expiredAt: string;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | undefined | null;
        updatedBy?: string | undefined | null;
    }
    interface IDeletePricebook {
        id: string;
    }
}

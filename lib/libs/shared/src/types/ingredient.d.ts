import { tags } from 'typia';
import { BaseResponse } from './common.type';
export declare namespace IIngredient {
    interface IReqCreateIngredient {
        uom_id: number & tags.Type<'uint32'>;
        name: string;
        totalInventory?: number;
        quantityAvailable?: number;
        unitPrice: number;
        expiredAt: string;
        userId?: string;
    }
    interface ICreateIngredient extends IReqCreateIngredient {
        shop_id: number & tags.Type<'uint32'>;
    }
    interface IUpdateIngredient {
        id?: string;
        name?: string;
        totalInventory?: number;
        quantityAvailable?: number;
        unitPrice?: number;
        expiredAt?: string;
        userId?: string;
    }
    interface IIngredientResponse extends BaseResponse {
        shop_id: string | number | null;
        uom_id: string | number | null;
        name: string;
        totalInventory?: number | null;
        quantityAvailable?: number | null;
        unitPrice: string | number | null;
        expiredAt: string;
        createdBy?: string | undefined | null;
        updatedBy?: string | undefined | null;
    }
    interface IDeleteIngredient {
        id: string;
    }
}

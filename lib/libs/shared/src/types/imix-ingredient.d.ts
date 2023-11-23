import { tags } from 'typia';
import { BaseResponse } from './common.type';
export declare namespace IMixIngredient {
    interface IReqCreateMixIngredient {
        ingredient_id: number & tags.Type<'uint32'>;
        selection_id: number & tags.Type<'uint32'>;
        amount: number;
        userId?: string;
    }
    interface ICreateMixIngredient extends IReqCreateMixIngredient {
        shop_id: number & tags.Type<'uint32'>;
    }
    interface IUpdateMixIngredient {
        id?: string;
        amount?: number;
        userId?: string;
    }
    interface IMixIngredientResponse extends BaseResponse {
        shop_id: string | number | null;
        ingredient_id: string | number | null;
        selection_id: string | number | null;
        amount: string | number | null;
        createdBy: string | undefined | null;
        updatedBy: string | undefined | null;
    }
    interface IDeleteMixIngredient {
        id: string;
    }
}

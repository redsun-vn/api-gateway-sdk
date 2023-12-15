import { tags } from 'typia';
import { BaseResponse } from './common.type';
import { IMixIngredient } from './imix-ingredient';
import { IUomUom } from './iuom-uom';
export declare namespace IIngredient {
    interface IReqCreateIngredient {
        uom_uom_id: number & tags.Type<'uint32'>;
        name: string;
        totalInventory?: number | null;
        quantityAvailable?: number | null;
        unitPrice?: number | null;
        expiredAt: (string & tags.Format<'date-time'>) | null;
        userId?: string;
    }
    interface ICreateIngredient extends IReqCreateIngredient {
        shop_id: number & tags.Type<'uint32'>;
    }
    interface IUpdateIngredient {
        id?: string;
        uom_uom_id?: number & tags.Type<'uint32'>;
        name?: string;
        totalInventory?: number | null;
        quantityAvailable?: number | null;
        unitPrice?: number | null;
        expiredAt?: (string & tags.Format<'date-time'>) | null;
        userId?: string;
    }
    interface IIngredientResponse extends BaseResponse {
        shop_id: string | number | null;
        uom_uom_id?: string | number | null;
        name: string;
        totalInventory?: number | null;
        quantityAvailable?: number | null;
        unitPrice?: string | number | null;
        expiredAt?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        mixIngredients?: IMixIngredient.IMixIngredientResponse[];
        uomUom?: IUomUom.IDetailUomUomResponse;
    }
    interface IDeleteIngredient {
        id: string;
    }
}

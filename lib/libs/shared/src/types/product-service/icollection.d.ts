import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IProduct } from './iproduct';
import { ICondition } from './icondition';
export declare namespace ICollection {
    interface IInputCondition {
        referentType: string;
        referent_id: number & tags.Type<'uint64'>;
        value: string;
    }
    interface IResponseCondition {
        id: string;
        referentType: string;
        referent_id: string | number | null;
        shop_id: string | number | null;
        value: string;
    }
    interface IReqCreateCollection {
        image_id?: number & tags.Type<'uint64'>;
        name: string;
        icon?: string;
        active?: boolean;
        htmlContent?: string;
        description?: string;
        salesChannel?: IProduct.ISalesChannel[];
        type: string;
        allowAllConditions: boolean;
        conditions: IInputCondition[];
        userId?: string;
    }
    interface ICreateCollection extends IReqCreateCollection {
        shop_id: number & tags.Type<'uint64'>;
    }
    interface IUpdateCollection {
        image_id?: number & tags.Type<'uint64'>;
        icon?: string;
        name?: string;
        active?: boolean;
        htmlContent?: string;
        description?: string;
        salesChannel?: IProduct.ISalesChannel[];
        type?: string;
        allowAllConditions?: boolean;
        conditions?: IInputCondition[];
        userId?: string;
    }
    interface IDetailCollectionResponse extends BaseResponse {
        name: string;
        shop_id?: string | number | null;
        image_id?: string | number | null;
        icon?: string | undefined | null;
        htmlContent?: string | undefined | null;
        description?: string | null | undefined;
        salesChannel?: IProduct.ISalesChannel[] | null;
        type?: string;
        active?: boolean;
        allowAllConditions?: boolean;
        conditions?: ICondition.IDetailConditionResponse[] | null;
        userId?: string | undefined | null;
        createdBy: string | undefined | null;
        updatedBy: string | undefined | null;
    }
}

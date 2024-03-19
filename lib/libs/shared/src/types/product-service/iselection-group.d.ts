import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { ISelection } from './iselection';
export declare namespace ISelectionGroup {
    interface IReqCreateSelectionGroup {
        image_id?: number & tags.Type<'uint64'>;
        name: string;
        active?: boolean;
        icon?: string | null;
        userId?: string;
    }
    interface ICreateSelectionGroup extends IReqCreateSelectionGroup {
        shop_id: number & tags.Type<'uint64'>;
    }
    interface IUpdateSelectionGroup {
        id?: string;
        image_id?: number & tags.Type<'uint64'>;
        name?: string;
        active?: boolean;
        icon?: string | null | undefined;
        userId?: string;
    }
    interface ISelectionGroupResponse extends BaseResponse {
        shop_id: number | string | null;
        image_id?: number | string | null;
        name: string;
        active: boolean;
        icon?: string | null;
        createdBy: string | undefined | null;
        updatedBy: string | undefined | null;
        selections?: ISelection.ISelectionResponse[] | null;
    }
    interface IDeleteSelectionGroup {
        id: string;
    }
}

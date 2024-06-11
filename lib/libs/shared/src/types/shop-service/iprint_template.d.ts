import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { ICategoryPrintTemplate } from './icategory-print_template';
export declare namespace IPrintTemplate {
    interface ICreateAdmin {
        name: string;
        content: string;
        active?: boolean;
        isDefault?: boolean;
        size: string;
        category_print_template_id: number & tags.Type<'uint64'>;
    }
    interface ICreateShop {
        name: string;
        content: string;
        active?: boolean;
        isDefault?: boolean;
        size: string;
        branch_id: number & tags.Type<'uint64'>;
        category_print_template_id: number & tags.Type<'uint64'>;
    }
    interface IUpdate {
        name?: string;
        content?: string;
        active?: boolean;
        isDefault?: boolean;
        size?: string;
    }
    interface IPrintTemplateResponse extends BaseResponse {
        name: string;
        type?: string | null;
        category_print_template_id: number | string;
        size: string;
        active: boolean;
        shop_id?: number | null | string;
        branch_id?: number | null | string;
        target: string;
        content: string;
        isDefault: boolean;
        categoryPrintTemplate?: ICategoryPrintTemplate.ICategoryPrintTemplateResponse;
    }
}

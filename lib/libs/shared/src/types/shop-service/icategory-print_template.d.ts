import { BaseResponse } from '../common.type';
import { IPrintTemplate } from './iprint_template';
export declare namespace ICategoryPrintTemplate {
    interface ICreate {
        name: string;
        type: string;
        active?: boolean;
    }
    interface IUpdate extends Partial<ICreate> {
    }
    interface ICategoryPrintTemplateResponse extends BaseResponse {
        name: string;
        type: string;
        active: boolean;
        printTemplate?: IPrintTemplate.IPrintTemplateResponse[];
    }
}

import { tags } from 'typia';
import { BaseResponse } from './common.type';
export declare namespace IPosPrinter {
    interface ICreate {
        name: string;
        ip: string & tags.Format<'ipv4'>;
    }
    interface IUpdate extends Partial<ICreate> {
    }
    interface IPosPrinterResponse extends BaseResponse {
        name: string;
        ip: string;
    }
}

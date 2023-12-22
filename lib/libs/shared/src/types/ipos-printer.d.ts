import { tags } from 'typia';
import { BaseResponse } from './common.type';
export declare namespace IPosPrinter {
    interface ICreate {
        name: string;
        ip: string & tags.Format<'ipv4'>;
        branch_id: number & tags.Type<'uint32'>;
    }
    interface IUpdate {
        name?: string;
        ip?: string;
    }
    interface IPosPrinterResponse extends BaseResponse {
        name: string;
        ip: string;
        shop_id?: string | number | null;
        branch_id?: string | number | null;
    }
}

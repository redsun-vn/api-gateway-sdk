import { BaseResponse } from '../common.type';
import { ITable } from './itable';
export declare namespace IEMenuQRItem {
    interface ICreate {
        shop_id: number | string;
        branch_id: number | string;
        table_id: number | string;
    }
    type IUpdate = Partial<ICreate>;
    interface IResponse extends BaseResponse {
        uuid: string;
        shop_id: number | string;
        branch_id: number | string;
        table_id: number | string;
    }
    interface IResponseWithTable extends IResponse {
        table: ITable.ITableResponse;
    }
}

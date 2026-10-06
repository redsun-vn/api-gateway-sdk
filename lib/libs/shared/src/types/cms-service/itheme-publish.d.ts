import { tags } from 'typia';
import { IPage } from '../common.type';
export declare namespace IThemePublish {
    interface ISubmitReq {
        note?: string & tags.MaxLength<2000>;
    }
    interface IApproveReq {
        ids: (string & tags.Format<'uuid'>)[] & tags.MinItems<1> & tags.MaxItems<100>;
    }
    interface IReturnReq extends IApproveReq {
        reason: string & tags.MinLength<1> & tags.MaxLength<2000>;
    }
    interface IPricingReq {
        mode: 'free' | 'paid';
        listPrice?: number & tags.Type<'uint32'> & tags.Maximum<99999999>;
        promoPrice?: number & tags.Type<'uint32'> & tags.Maximum<99999999>;
        promoEndDate?: string & tags.Format<'date'>;
        note?: string & tags.MaxLength<2000>;
    }
    interface IIdsQuery {
        ids: string & tags.MinLength<36> & tags.MaxLength<3699>;
    }
    interface ILogQuery {
        page?: number & tags.Type<'uint32'> & tags.Minimum<1>;
        limit?: number & tags.Type<'uint32'> & tags.Minimum<1> & tags.Maximum<100>;
    }
    interface IReindexReq {
        themeId?: string & tags.Format<'uuid'>;
    }
    interface IReindexSystemResult {
        total: number;
        ok: number;
        failed: number;
    }
    interface IReindexContentResult {
        pages: number;
        documents: number;
    }
    type IReindexResult = IReindexSystemResult | IReindexContentResult;
    interface IPriceResponse {
        themeId: string;
        listPrice: number;
        salePrice: number | null;
        promoEndAt: string | null;
        pricebookCode: string | null;
    }
    type IDownloadCounts = Record<string, number>;
    type LogAction = 'submit' | 'update_note' | 'approve' | 'return' | 'price' | 'publish' | 'stop' | 'discard';
    interface IPriceSnapshot {
        mode: 'free' | 'paid';
        listPrice: number;
        promoPrice: number | null;
        promoEndAt: string | null;
    }
    interface ILogResponse {
        id: string;
        themeId: string;
        themeName: string;
        action: LogAction;
        fromStatus: string | null;
        toStatus: string | null;
        version: string;
        isUpdate: boolean;
        actorId: number | string;
        actorName: string;
        note: string | null;
        priceSnapshot: IPriceSnapshot | null;
        createdAt: string;
    }
    interface ILogPage {
        items: ILogResponse[];
        meta: IPage.IMeta;
    }
    interface IActor {
        id: number;
        name: string;
    }
}

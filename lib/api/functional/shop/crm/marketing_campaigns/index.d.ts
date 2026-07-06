import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { IMarketingCampaign } from "../../../../../libs/shared/src/types/crm-service/imarketing-campaign";
export declare function listCampaigns(connection: IConnection, query: listCampaigns.Query): Promise<listCampaigns.Output>;
export declare namespace listCampaigns {
    type Query = Resolved<IMarketingCampaign.IListQueryRequest>;
    type Output = Primitive<IResponse<IResponsePagination<IMarketingCampaign.ICampaignItem>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/marketing-campaigns";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: listCampaigns.Query) => string;
}
export declare function report(connection: IConnection, query: report.Query): Promise<report.Output>;
export declare namespace report {
    type Query = Resolved<IMarketingCampaign.IReportInputRequest>;
    type Output = Primitive<IResponse<IMarketingCampaign.IReportResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/marketing-campaigns/report";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: report.Query) => string;
}
export declare function updateCampaign(connection: IConnection, id: number, body: updateCampaign.Input): Promise<updateCampaign.Output>;
export declare namespace updateCampaign {
    type Input = Resolved<IMarketingCampaign.IUpdateInputRequest>;
    type Output = Primitive<IResponse<IMarketingCampaign.ICampaignItem>>;
    const METADATA: {
        readonly method: "PATCH";
        readonly path: "/shop/crm/marketing-campaigns/:id";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}

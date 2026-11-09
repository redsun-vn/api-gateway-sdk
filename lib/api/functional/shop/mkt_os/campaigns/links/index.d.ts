import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IMktOsResults } from "../../../../../../libs/shared/src/types/crm-service/imkt-os-results";
export declare function list(connection: IConnection, id: number): Promise<list.Output>;
export declare namespace list {
    type Output = Primitive<IResponse<IMktOsResults.ICampaignLinkList>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/campaigns/:id/links";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
export declare function create(connection: IConnection, id: number, body: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<IMktOsResults.ICampaignLinkCreateRequest>;
    type Output = Primitive<IResponse<IMktOsResults.ICampaignLinkSaved>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/campaigns/:id/links";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: number) => string;
}
export declare function update(connection: IConnection, id: number, linkId: number, body: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<IMktOsResults.ICampaignLinkUpdateRequest>;
    type Output = Primitive<IResponse<IMktOsResults.ICampaignLinkSaved>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/mkt-os/campaigns/:id/links/:linkId";
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
    const path: (id: number, linkId: number) => string;
}
export declare function enable(connection: IConnection, id: number, linkId: number): Promise<enable.Output>;
export declare namespace enable {
    type Output = Primitive<IResponse<IMktOsResults.ICampaignLinkSaved>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/campaigns/:id/links/:linkId/enable";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: number, linkId: number) => string;
}
export declare function disable(connection: IConnection, id: number, linkId: number): Promise<disable.Output>;
export declare namespace disable {
    type Output = Primitive<IResponse<IMktOsResults.ICampaignLinkSaved>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/campaigns/:id/links/:linkId/disable";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: number, linkId: number) => string;
}

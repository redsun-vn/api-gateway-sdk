import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { IOmnichannel } from "../../../../../../../libs/shared/src/types/omnichannel-service/omnichannel.type";
export declare function bulkCreate(connection: IConnection, body: bulkCreate.Input): Promise<bulkCreate.Output>;
export declare namespace bulkCreate {
    type Input = Resolved<IOmnichannel.MappingBulkCreateDto>;
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/omnichannel/orders/mapping/bulk-create";
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
    const path: () => string;
}

import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmScoringRule } from "../../../../../../libs/shared/src/types/crm-service/iscoring-rule";
export declare function getFields(connection: IConnection): Promise<getFields.Output>;
export declare namespace getFields {
    type Output = Primitive<IResponse<ICrmScoringRule.IFieldCatalogResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/scoring-rules/fields";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}

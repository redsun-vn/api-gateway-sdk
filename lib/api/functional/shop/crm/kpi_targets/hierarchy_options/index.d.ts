import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IKpiTargetHierarchyOptions } from "../../../../../../libs/shared/src/types/crm-service/kpi-target";
export declare function hierarchyOptions(connection: IConnection): Promise<hierarchyOptions.Output>;
export declare namespace hierarchyOptions {
    type Output = Primitive<IResponse<IKpiTargetHierarchyOptions>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/kpi-targets/hierarchy-options";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}

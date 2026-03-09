import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IZaloOA } from "../../../../../../libs/shared/src/types/notification/izalo-oa.type";
export declare function getTemplateInfo(connection: IConnection, templateId: string): Promise<getTemplateInfo.Output>;
export declare namespace getTemplateInfo {
    type Output = Primitive<IResponse<IZaloOA.IZNSTemplateInfo>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/zalo-oa/zns/template/:templateId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (templateId: string) => string;
}

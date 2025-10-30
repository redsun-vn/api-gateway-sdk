import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ISeedData } from "../../../../../libs/shared/src/types/seed-data.type";
export declare function generateSample(connection: IConnection, data: generateSample.Input): Promise<generateSample.Output>;
export declare namespace generateSample {
    type Input = Resolved<ISeedData.SeedRequestBody>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/seed/sample";
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

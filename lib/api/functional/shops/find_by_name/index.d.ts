import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
export declare function findOneByName(connection: IConnection, name: string): Promise<findOneByName.Output>;
export declare namespace findOneByName {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shops/find-by-name/:name";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (name: string) => string;
}

import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IEMenuConfig } from "../../../../libs/shared/src/types/reservation-service/iemenu-config";
export declare function findOnePublic(connection: IConnection, id: string): Promise<findOnePublic.Output>;
export declare namespace findOnePublic {
    type Output = Primitive<IResponse<IEMenuConfig.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/e-menu/config/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (id: string) => string;
}

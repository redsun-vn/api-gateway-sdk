import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../libs/shared/src/types/common.type";
import type { IEMenuQRItem } from "../../../libs/shared/src/types/reservation-service/iemenu-qr-item";
export declare function findOnePublic(connection: IConnection, id: string): Promise<findOnePublic.Output>;
export declare namespace findOnePublic {
    type Output = Primitive<IResponse<IEMenuQRItem.IResponseWithTable>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/qr-order/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (id: string) => string;
}

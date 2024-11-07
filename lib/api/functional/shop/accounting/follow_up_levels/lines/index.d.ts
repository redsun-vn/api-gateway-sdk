import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IFollowUpLine, IFollowUpLevel } from "../../../../../../libs/shared/src/types/financial-service/debt/ifollow-up";
export declare function createLine(connection: IConnection, body: createLine.Input): Promise<createLine.Output>;
export declare namespace createLine {
    type Input = Resolved<IFollowUpLine.ICreate>;
    type Output = Primitive<IResponse<IFollowUpLevel.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/accounting/follow-up-levels/lines";
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
export declare function updateLine(connection: IConnection, id: string, body: updateLine.Input): Promise<updateLine.Output>;
export declare namespace updateLine {
    type Input = Resolved<IFollowUpLine.IUpdate>;
    type Output = Primitive<IResponse<IFollowUpLevel.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/accounting/follow-up-levels/lines/:id";
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
    const path: (id: string) => string;
}
export declare function deleteLine(connection: IConnection, id: string): Promise<deleteLine.Output>;
export declare namespace deleteLine {
    type Output = Primitive<IResponse<IFollowUpLevel.IResponse>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/accounting/follow-up-levels/lines/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}

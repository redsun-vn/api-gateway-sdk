import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IClinicAttachment } from "../../../../../libs/shared/src/types/partner-service/iclinic-attachment";
export * as visit from "./visit";
export declare function create(connection: IConnection, body: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<IClinicAttachment.ICreate>;
    type Output = Primitive<IResponse<IClinicAttachment.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/clinic/attachments";
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
export declare function findOne(connection: IConnection, id: string): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<IClinicAttachment.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/clinic/attachments/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function $delete(connection: IConnection, id: string): Promise<$delete.Output>;
export declare namespace $delete {
    type Output = Primitive<IResponse<IClinicAttachment.IDelete>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/clinic/attachments/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}

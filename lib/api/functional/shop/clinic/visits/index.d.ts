import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IClinicVisit } from "../../../../../libs/shared/src/types/partner-service/iclinic-visit";
export * as pending_payment from "./pending_payment";
export declare function create(connection: IConnection, dto: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<IClinicVisit.ICreate>;
    type Output = Primitive<IResponse<IClinicVisit.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/clinic/visits";
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
export declare function findOne(connection: IConnection, id: string, query: findOne.Query): Promise<findOne.Output>;
export declare namespace findOne {
    type Query = Resolved<IClinicVisit.IVisitPhiQuery>;
    type Output = Primitive<IResponse<IClinicVisit.IDetailResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/clinic/visits/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string, query: findOne.Query) => string;
}
export declare function update(connection: IConnection, id: string, dto: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<IClinicVisit.IUpdate>;
    type Output = Primitive<IResponse<IClinicVisit.IResponse>>;
    const METADATA: {
        readonly method: "PATCH";
        readonly path: "/shop/clinic/visits/:id";
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
export declare function amend(connection: IConnection, id: string, input: amend.Input): Promise<amend.Output>;
export declare namespace amend {
    type Input = Resolved<IClinicVisit.IAmend>;
    type Output = Primitive<IResponse<IClinicVisit.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/clinic/visits/:id/amend";
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
    const path: (id: string) => string;
}
export declare function cancel(connection: IConnection, id: string, body: cancel.Input): Promise<cancel.Output>;
export declare namespace cancel {
    type Input = Resolved<IClinicVisit.ICancel>;
    type Output = Primitive<IResponse<IClinicVisit.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/clinic/visits/:id/cancel";
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
    const path: (id: string) => string;
}
export declare function softDelete(connection: IConnection, id: string): Promise<softDelete.Output>;
export declare namespace softDelete {
    type Output = Primitive<IResponse<void>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/clinic/visits/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}

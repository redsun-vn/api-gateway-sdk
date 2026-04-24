import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { IClinicPrescription } from "../../../../../libs/shared/src/types/partner-service/iclinic-prescription";
export declare function create(connection: IConnection, body: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<IClinicPrescription.ICreate>;
    type Output = Primitive<IResponse<IClinicPrescription.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/clinic/prescriptions";
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
export declare function update(connection: IConnection, id: string, body: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<IClinicPrescription.IUpdate>;
    type Output = Primitive<IResponse<IClinicPrescription.IResponse>>;
    const METADATA: {
        readonly method: "PATCH";
        readonly path: "/shop/clinic/prescriptions/:id";
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
export declare function issue(connection: IConnection, id: string): Promise<issue.Output>;
export declare namespace issue {
    type Output = Primitive<IResponse<IClinicPrescription.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/clinic/prescriptions/:id/issue";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: string) => string;
}
export declare function findOne(connection: IConnection, id: string): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<IClinicPrescription.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/clinic/prescriptions/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function findMany(connection: IConnection, query: findMany.Query): Promise<findMany.Output>;
export declare namespace findMany {
    type Query = Resolved<IClinicPrescription.IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IClinicPrescription.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/clinic/prescriptions";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findMany.Query) => string;
}
export declare function print(connection: IConnection, id: string): Promise<print.Output>;
export declare namespace print {
    type Output = Primitive<IResponse<IClinicPrescription.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/clinic/prescriptions/:id/print";
        readonly request: null;
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
    type Input = Resolved<IClinicPrescription.ICancel>;
    type Output = Primitive<IResponse<IClinicPrescription.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/clinic/prescriptions/:id/cancel";
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

import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IPartner } from "../../../../../libs/shared/src/types/ipartner";
export declare function upload(connection: IConnection, input: upload.Input): Promise<upload.Output>;
export declare namespace upload {
    type Input = Resolved<IPartner.IUpload>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/partner/import";
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
export declare function template(connection: IConnection, type: IPartner.TypePartnerUpload): Promise<template.Output>;
export declare namespace template {
    type Output = Primitive<any>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/partner/import/template/:type";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (type: IPartner.TypePartnerUpload) => string;
}

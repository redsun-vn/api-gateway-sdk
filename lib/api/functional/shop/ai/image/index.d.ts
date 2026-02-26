import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAiImage } from "../../../../../libs/shared/src/types/ai-generation/index";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export * as jobs from "./jobs";
export declare function generate(connection: IConnection, data: generate.Input): Promise<generate.Output>;
export declare namespace generate {
    type Input = Resolved<IAiImage.IGenerateRequest>;
    type Output = Primitive<IResponse<IAiImage.IJobCreatedResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/ai/image/generate";
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
export declare function estimate(connection: IConnection, data: estimate.Input): Promise<estimate.Output>;
export declare namespace estimate {
    type Input = Resolved<IAiImage.IEstimateRequest>;
    type Output = Primitive<IResponse<IAiImage.IEstimateResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/ai/image/estimate";
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
export declare function edit(connection: IConnection, data: edit.Input): Promise<edit.Output>;
export declare namespace edit {
    type Input = Resolved<IAiImage.IEditRequest>;
    type Output = Primitive<IResponse<IAiImage.IJobCreatedResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/ai/image/edit";
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
export declare function remix(connection: IConnection, data: remix.Input): Promise<remix.Output>;
export declare namespace remix {
    type Input = Resolved<IAiImage.IRemixRequest>;
    type Output = Primitive<IResponse<IAiImage.IJobCreatedResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/ai/image/remix";
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
export declare function reframe(connection: IConnection, data: reframe.Input): Promise<reframe.Output>;
export declare namespace reframe {
    type Input = Resolved<IAiImage.IReframeRequest>;
    type Output = Primitive<IResponse<IAiImage.IJobCreatedResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/ai/image/reframe";
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

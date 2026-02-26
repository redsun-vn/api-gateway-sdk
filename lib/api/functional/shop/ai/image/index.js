"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reframe = exports.remix = exports.edit = exports.estimate = exports.generate = exports.jobs = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.jobs = __importStar(require("./jobs"));
async function generate(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...generate.METADATA,
        template: generate.METADATA.path,
        path: generate.path(),
    }, data);
}
exports.generate = generate;
(function (generate) {
    generate.METADATA = {
        method: "POST",
        path: "/shop/ai/image/generate",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    generate.path = () => "/shop/ai/image/generate";
})(generate || (exports.generate = generate = {}));
async function estimate(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...estimate.METADATA,
        template: estimate.METADATA.path,
        path: estimate.path(),
    }, data);
}
exports.estimate = estimate;
(function (estimate) {
    estimate.METADATA = {
        method: "POST",
        path: "/shop/ai/image/estimate",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    estimate.path = () => "/shop/ai/image/estimate";
})(estimate || (exports.estimate = estimate = {}));
async function edit(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...edit.METADATA,
        template: edit.METADATA.path,
        path: edit.path(),
    }, data);
}
exports.edit = edit;
(function (edit) {
    edit.METADATA = {
        method: "POST",
        path: "/shop/ai/image/edit",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    edit.path = () => "/shop/ai/image/edit";
})(edit || (exports.edit = edit = {}));
async function remix(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...remix.METADATA,
        template: remix.METADATA.path,
        path: remix.path(),
    }, data);
}
exports.remix = remix;
(function (remix) {
    remix.METADATA = {
        method: "POST",
        path: "/shop/ai/image/remix",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    remix.path = () => "/shop/ai/image/remix";
})(remix || (exports.remix = remix = {}));
async function reframe(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...reframe.METADATA,
        template: reframe.METADATA.path,
        path: reframe.path(),
    }, data);
}
exports.reframe = reframe;
(function (reframe) {
    reframe.METADATA = {
        method: "POST",
        path: "/shop/ai/image/reframe",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    reframe.path = () => "/shop/ai/image/reframe";
})(reframe || (exports.reframe = reframe = {}));
//# sourceMappingURL=index.js.map
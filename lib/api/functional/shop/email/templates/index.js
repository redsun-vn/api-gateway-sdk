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
exports.deleteTemplate = exports.updateTemplate = exports.createTemplate = exports.getTemplate = exports.listTemplates = exports.seed = exports.test_send = exports.duplicate = exports.activate = exports.preview = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.preview = __importStar(require("./preview"));
exports.activate = __importStar(require("./activate"));
exports.duplicate = __importStar(require("./duplicate"));
exports.test_send = __importStar(require("./test_send"));
exports.seed = __importStar(require("./seed"));
async function listTemplates(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...listTemplates.METADATA,
        template: listTemplates.METADATA.path,
        path: listTemplates.path(query),
    });
}
exports.listTemplates = listTemplates;
(function (listTemplates) {
    listTemplates.METADATA = {
        method: "GET",
        path: "/shop/email/templates",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    listTemplates.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/email/templates";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(listTemplates || (exports.listTemplates = listTemplates = {}));
async function getTemplate(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getTemplate.METADATA,
        template: getTemplate.METADATA.path,
        path: getTemplate.path(id),
    });
}
exports.getTemplate = getTemplate;
(function (getTemplate) {
    getTemplate.METADATA = {
        method: "GET",
        path: "/shop/email/templates/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getTemplate.path = (id) => `/shop/email/templates/${encodeURIComponent(id?.toString() ?? "null")}`;
})(getTemplate || (exports.getTemplate = getTemplate = {}));
async function createTemplate(connection, dto) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createTemplate.METADATA,
        template: createTemplate.METADATA.path,
        path: createTemplate.path(),
    }, dto);
}
exports.createTemplate = createTemplate;
(function (createTemplate) {
    createTemplate.METADATA = {
        method: "POST",
        path: "/shop/email/templates",
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
    createTemplate.path = () => "/shop/email/templates";
})(createTemplate || (exports.createTemplate = createTemplate = {}));
async function updateTemplate(connection, id, dto) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateTemplate.METADATA,
        template: updateTemplate.METADATA.path,
        path: updateTemplate.path(id),
    }, dto);
}
exports.updateTemplate = updateTemplate;
(function (updateTemplate) {
    updateTemplate.METADATA = {
        method: "PUT",
        path: "/shop/email/templates/:id",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    updateTemplate.path = (id) => `/shop/email/templates/${encodeURIComponent(id?.toString() ?? "null")}`;
})(updateTemplate || (exports.updateTemplate = updateTemplate = {}));
async function deleteTemplate(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...deleteTemplate.METADATA,
        template: deleteTemplate.METADATA.path,
        path: deleteTemplate.path(id),
    });
}
exports.deleteTemplate = deleteTemplate;
(function (deleteTemplate) {
    deleteTemplate.METADATA = {
        method: "DELETE",
        path: "/shop/email/templates/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    deleteTemplate.path = (id) => `/shop/email/templates/${encodeURIComponent(id?.toString() ?? "null")}`;
})(deleteTemplate || (exports.deleteTemplate = deleteTemplate = {}));
//# sourceMappingURL=index.js.map
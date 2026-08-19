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
exports.updateAction = exports.listActions = exports.variables = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.variables = __importStar(require("./variables"));
async function listActions(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...listActions.METADATA,
        template: listActions.METADATA.path,
        path: listActions.path(query),
    });
}
exports.listActions = listActions;
(function (listActions) {
    listActions.METADATA = {
        method: "GET",
        path: "/admin/email/actions",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    listActions.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/admin/email/actions";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(listActions || (exports.listActions = listActions = {}));
async function updateAction(connection, modelKey, actionKey, dto) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateAction.METADATA,
        template: updateAction.METADATA.path,
        path: updateAction.path(modelKey, actionKey),
    }, dto);
}
exports.updateAction = updateAction;
(function (updateAction) {
    updateAction.METADATA = {
        method: "PUT",
        path: "/admin/email/actions/:model_key/:action_key",
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
    updateAction.path = (modelKey, actionKey) => `/admin/email/actions/${encodeURIComponent(modelKey?.toString() ?? "null")}/${encodeURIComponent(actionKey?.toString() ?? "null")}`;
})(updateAction || (exports.updateAction = updateAction = {}));
//# sourceMappingURL=index.js.map
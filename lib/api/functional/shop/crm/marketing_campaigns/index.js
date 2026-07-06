"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCampaign = exports.report = exports.listCampaigns = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function listCampaigns(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...listCampaigns.METADATA,
        template: listCampaigns.METADATA.path,
        path: listCampaigns.path(query),
    });
}
exports.listCampaigns = listCampaigns;
(function (listCampaigns) {
    listCampaigns.METADATA = {
        method: "GET",
        path: "/shop/crm/marketing-campaigns",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    listCampaigns.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/marketing-campaigns";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(listCampaigns || (exports.listCampaigns = listCampaigns = {}));
async function report(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...report.METADATA,
        template: report.METADATA.path,
        path: report.path(query),
    });
}
exports.report = report;
(function (report) {
    report.METADATA = {
        method: "GET",
        path: "/shop/crm/marketing-campaigns/report",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    report.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/marketing-campaigns/report";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(report || (exports.report = report = {}));
async function updateCampaign(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateCampaign.METADATA,
        template: updateCampaign.METADATA.path,
        path: updateCampaign.path(id),
    }, body);
}
exports.updateCampaign = updateCampaign;
(function (updateCampaign) {
    updateCampaign.METADATA = {
        method: "PATCH",
        path: "/shop/crm/marketing-campaigns/:id",
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
    updateCampaign.path = (id) => `/shop/crm/marketing-campaigns/${encodeURIComponent(id?.toString() ?? "null")}`;
})(updateCampaign || (exports.updateCampaign = updateCampaign = {}));
//# sourceMappingURL=index.js.map
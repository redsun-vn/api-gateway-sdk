"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseResponse = exports.fetchWithError = exports.NetworkError = void 0;
class NetworkError extends Error {
    constructor(message, options) {
        super(message);
        this.response = options.response;
        this.responseData = options.responseData;
    }
}
exports.NetworkError = NetworkError;
async function fetchWithError(input, init) {
    const response = await fetch(input, init);
    if (!response.ok) {
        const responseData = await parseResponse(response);
        throw new NetworkError('Network response was not OK.', {
            response,
            responseData,
        });
    }
    return response;
}
exports.fetchWithError = fetchWithError;
async function parseResponse(response) {
    if (!response.body) {
        return '';
    }
    const data = await response.text();
    try {
        return JSON.parse(data);
    }
    catch (error) { }
    return data;
}
exports.parseResponse = parseResponse;
//# sourceMappingURL=fetchWithError.js.map
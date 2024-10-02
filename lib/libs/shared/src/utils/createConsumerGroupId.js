"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClientId = exports.createConsumerGroupId = void 0;
const uuid_1 = require("uuid");
const createConsumerGroupId = (id) => {
    return `api-gateway-${id}`;
};
exports.createConsumerGroupId = createConsumerGroupId;
const createClientId = (id) => {
    const uuid = (0, uuid_1.v4)();
    return `${id}-${uuid}`;
};
exports.createClientId = createClientId;
//# sourceMappingURL=createConsumerGroupId.js.map
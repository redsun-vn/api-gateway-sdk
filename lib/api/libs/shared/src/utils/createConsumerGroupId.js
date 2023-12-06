"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConsumerGroupId = void 0;
const uuid_1 = require("uuid");
const createConsumerGroupId = (id) => {
    const uuid = (0, uuid_1.v4)();
    return `${id}-${uuid}`;
};
exports.createConsumerGroupId = createConsumerGroupId;
//# sourceMappingURL=createConsumerGroupId.js.map
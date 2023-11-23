"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ESM_MICROSERVICES_NAME = exports.SEARCH_MICROSERVICE = exports.RESERVATIONS_MICROSERVICE = exports.FULFILLMENT_MICROSERVICE = exports.COMMENT_MICROSERVICE = exports.ACTIVITY_MICROSERVICE = exports.LOYALTY_MICROSERVICE = exports.REPORT_MICROSERVICE = exports.INVENTORY_MICROSERVICE = exports.PARTNER_MICROSERVICE = exports.ORDER_MICROSERVICE = exports.PRODUCT_MICROSERVICE = exports.ATTACHMENT_MICROSERVICE = exports.SHOP_MICROSERVICE = void 0;
const PREFIX = 'esm-';
exports.SHOP_MICROSERVICE = {
    id: `${PREFIX}shop`,
    name: 'SHOP_MICROSERVICE',
    groupId: `${PREFIX}shop-consumer`,
};
exports.ATTACHMENT_MICROSERVICE = {
    id: `${PREFIX}attachment`,
    name: 'ATTACHMENT_MICROSERVICE',
    groupId: `${PREFIX}attachment-consumer`,
};
exports.PRODUCT_MICROSERVICE = {
    id: `${PREFIX}product`,
    name: 'PRODUCT_MICROSERVICE',
    groupId: `${PREFIX}product-consumer`,
};
exports.ORDER_MICROSERVICE = {
    id: `${PREFIX}order`,
    name: 'ORDER_MICROSERVICE',
    groupId: `${PREFIX}order-consumer`,
};
exports.PARTNER_MICROSERVICE = {
    id: `${PREFIX}partner`,
    name: 'PARTNER_MICROSERVICE',
    groupId: `${PREFIX}partner-consumer`,
};
exports.INVENTORY_MICROSERVICE = {
    id: `${PREFIX}inventory`,
    name: 'INVENTORY_MICROSERVICE',
    groupId: `${PREFIX}inventory-consumer`,
};
exports.REPORT_MICROSERVICE = {
    id: `${PREFIX}report`,
    name: 'REPORT_MICROSERVICE',
    groupId: `${PREFIX}report-consumer`,
};
exports.LOYALTY_MICROSERVICE = {
    id: `${PREFIX}loyalty`,
    name: 'LOYALTY_MICROSERVICE',
    groupId: `${PREFIX}loyalty-consumer`,
};
exports.ACTIVITY_MICROSERVICE = {
    id: `${PREFIX}activity`,
    name: 'ACTIVITY_MICROSERVICE',
    groupId: `${PREFIX}activity-consumer`,
};
exports.COMMENT_MICROSERVICE = {
    id: `${PREFIX}comment`,
    name: 'COMMENT_MICROSERVICE',
    groupId: `${PREFIX}comment-consumer`,
};
exports.FULFILLMENT_MICROSERVICE = {
    id: `${PREFIX}fulfillment`,
    name: 'FULFILLMENT_MICROSERVICE',
    groupId: `${PREFIX}fulfillment-consumer`,
};
exports.RESERVATIONS_MICROSERVICE = {
    id: `${PREFIX}reservations`,
    name: 'RESERVATIONS_MICROSERVICE',
    groupId: `${PREFIX}reservations-consumer`,
};
exports.SEARCH_MICROSERVICE = {
    id: `${PREFIX}search`,
    name: 'SEARCH_MICROSERVICE',
    groupId: `${PREFIX}search-consumer`,
};
exports.ESM_MICROSERVICES_NAME = {
    shop: exports.SHOP_MICROSERVICE,
    attachment: exports.ATTACHMENT_MICROSERVICE,
    product: exports.PRODUCT_MICROSERVICE,
    order: exports.ORDER_MICROSERVICE,
    partner: exports.PARTNER_MICROSERVICE,
    inventory: exports.INVENTORY_MICROSERVICE,
    report: exports.REPORT_MICROSERVICE,
    loyalty: exports.LOYALTY_MICROSERVICE,
    activity: exports.ACTIVITY_MICROSERVICE,
    comment: exports.COMMENT_MICROSERVICE,
    fulfillment: exports.FULFILLMENT_MICROSERVICE,
    reservations: exports.RESERVATIONS_MICROSERVICE,
    search: exports.SEARCH_MICROSERVICE,
};
//# sourceMappingURL=microservices.js.map
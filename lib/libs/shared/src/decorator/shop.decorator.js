"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetShop = void 0;
const common_1 = require("@nestjs/common");
const const_1 = require("../const");
exports.GetShop = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const shopId = request?.cookies?.shop_id;
    if (!shopId) {
        throw new common_1.BadRequestException({
            message: 'shop not found',
            errorCode: const_1.ERRORS_DICTIONARY.SHOP_NOT_FOUND,
            statusCode: 403,
        });
    }
    return shopId;
});
//# sourceMappingURL=shop.decorator.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationParams = void 0;
const common_1 = require("@nestjs/common");
exports.PaginationParams = (0, common_1.createParamDecorator)((data, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    if (isNaN(page) || page < 0 || isNaN(limit) || limit < 0) {
        throw new common_1.BadRequestException('Invalid pagination params');
    }
    if (limit > 100) {
        throw new common_1.BadRequestException('Invalid pagination params: Max limit is 100');
    }
    return { page, limit };
});
//# sourceMappingURL=pagination.params.decorator.js.map
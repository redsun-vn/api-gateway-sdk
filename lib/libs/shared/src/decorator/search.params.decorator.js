"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchParams = void 0;
const common_1 = require("@nestjs/common");
const const_1 = require("../const");
exports.SearchParams = (0, common_1.createParamDecorator)((validParams, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    const search = req.query.search;
    if (typeof validParams != 'object') {
        throw new common_1.BadRequestException({
            message: 'Invalid search parameter',
            errorCode: const_1.ERRORS_DICTIONARY.SEARCH_PARAMS_INVALID_EXCEPTION,
        });
    }
    return {
        s: search,
        properties: validParams,
    };
});
//# sourceMappingURL=search.params.decorator.js.map